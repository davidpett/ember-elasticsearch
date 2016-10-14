import config from 'ember-get-config';
import es from 'npm:elasticsearch';

export function initialize(applicationInstance) {
  let service = applicationInstance.lookup('service:elasticsearch');
  if (config.elasticsearch && config.elasticsearch.host) {
    let client = new es.Client(config.elasticsearch);
    service.set('client', client);
  } else {
    throw new Error(`[ELASTIC SEARCH] You need to provide: elasticsearch: { host: 'foo' } in config/environment.js`);
  }
}

export default {
  name: 'ember-elasticsearch',
  initialize
};
