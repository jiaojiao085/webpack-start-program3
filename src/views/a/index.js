module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      msg: 'Page A,maybe not as boring as you think',
      leftName: 'left,breakthrough',
      rightName: 'right,breakthrough'
    }
  },
  components: {
    'app-header': require('../../components/header'),
    'app-pane': require('../../components/pane')
  }
}