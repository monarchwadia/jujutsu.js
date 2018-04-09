import merge from 'deepmerge';
import GoogleAnalyticsManager from './analytics/google-analytics-manager';

const defaultOptions = {
  analytics: {
    google: {
      uaCode: null
    }
  }
}

function parseOptions(options={}) {
  return merge(defaultOptions, options);
}

export default class Jujutsu {
  constructor(options) {
    this.options = parseOptions(options);
  }

  init() {
    this.analytics = {
      google: (new GoogleAnalyticsManager(this.options.analytics.google)).init()
    };
  }
}
