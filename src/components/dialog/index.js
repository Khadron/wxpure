Component({
  externalClasses: ['my-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    title: {
      type: String,
      value: '提示'
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    clickCloseModal: {
      type: Boolean,
      value: false
    }
  },
  data: {
    visible: false,
    ok: null,
    no: null
  },
  ready() {},
  methods: {
    showModal(ok, no) {
      this.setData({
        visible: true
      })
      if (ok && typeof ok === 'function') {
        this.data.ok = ok
      }
      if (no && typeof no === 'function') {
        this.data.no = no
      }
    },
    hide() {
      this.setData({
        visible: false
      })
    },
    handleClick() {
      if (this.data.ok) {
        this.data.ok(this)
      } else {
        this.hide()
      }
      this.triggerEvent('confirm')
    },
    handleCancel() {
      if (this.data.no) {
        this.data.no()
      }
      this.hide()
      this.triggerEvent('cancel')
    },
    clickShade() {
      if (this.data.clickCloseModal) {
        this.hide()
      }
    }
  }
})
