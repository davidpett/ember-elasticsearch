[![Build Status](https://travis-ci.org/davidpett/ember-elasticsearch.svg?branch=master)](https://travis-ci.org/davidpett/ember-elasticsearch)
[![npm version](https://badge.fury.io/js/ember-elasticsearch.svg)](https://badge.fury.io/js/ember-elasticsearch)
[![Ember Observer Score](http://emberobserver.com/badges/ember-elasticsearch.svg)](http://emberobserver.com/addons/ember-elasticsearch)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![FastBoot Ready](https://img.shields.io/badge/FastBoot-ready-brightgreen.svg)](http://ember-fastboot.com)
# ember-elasticsearch

This addon provides a FastBoot compatible wrapper around the [elasticsearch package](https://www.npmjs.com/package/elasticsearch).

## Installation

* `ember install ember-elasticsearch`
* configure your elasticsearch host in `config/environment.js`:

```javascript
...
elasticsearch: {
    host: 'YOUR_HOST_HERE'
}
...
```

## Usage

You can now inject the `elasticsearch` service in your routes and use the search client like so:

```javascript
elasticsearch: injectService(),
model() {
  return get(this, 'elasticsearch.client').search({
    q: 'foo'
  }).then((data) => {
    return data.hits.hits;
  });
}
```
