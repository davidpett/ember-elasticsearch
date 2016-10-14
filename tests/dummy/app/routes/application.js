import Ember from 'ember';
import injectService from 'ember-service/inject';

const {
  get
} = Ember;

export default Ember.Route.extend({
  elasticsearch: injectService(),
  model() {
    get(this, 'elasticsearch.client').search({
      q: 'foo'
    });
  }
});
