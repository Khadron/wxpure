// import create from '../../store/create';

Component({
  externalClasses: ['my-class'],
  properties: {
    text: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#2d8cf0'
    },
    size: {
      type: Object,
      value: {
        w: 36,
        h: 36
      }
    }
  },
  data: {
    item: {}
  },
  ready() {
    this.data.item = {
      text: this.data.text,
      checked: this.data.checked,
      disabled: this.data.disabled,
      color: this.data.color
    }
  },
  methods: {
    checkboxChange() {
      // this.store.data.checked = !this.data.checked;
      // this.update();
      this.setData({
        checked: !this.data.checked
      })
      this.data.item = {
        text: this.data.text,
        checked: this.data.checked,
        disabled: this.data.disabled,
        color: this.data.color
      }
      console.log('checkbox', this.data.item)
      this.triggerEvent('change', this.data.item)
    },
    changeCheckState(checkState) {
      this.setData({
        checked: checkState
      })
    }
  }
})
