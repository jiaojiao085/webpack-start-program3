module.exports = {
  template: require('./template.html'),
  replace: true,
  data: function () {
    return {
      msg: 'Page C,a small new goal',
      leftName: 'pagec leftname',
      rightName: 'pagec rightname'
    }
  },
  components: {
    'app-header': require('../../components/header'),
    'app-pane': require('../../components/pane')
  }
}