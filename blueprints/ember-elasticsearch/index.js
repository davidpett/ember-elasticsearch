/*jshint node:true*/
module.exports = {
  description: 'ember-elasticsearch default blueprint',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([{
      name: 'ember-browserify'
    }, {
      name: 'elasticsearch'
    }]);
  }
};
