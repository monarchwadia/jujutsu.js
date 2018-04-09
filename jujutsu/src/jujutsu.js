import merge from 'deepmerge';
import GoogleAnalyticsManager from './analytics/google-analytics-manager';
import ReactViewManager from './view/react-view-manager';

function dig(target, keyString) {
  const keys = keyString.split('.');

  let cursor = target;
  for (let i = 0; i < keys.length; i++) {
    const nextKey = keys[i];
    const nextVal = cursor[nextKey];

    if (nextVal) {
      cursor = nextVal;
    } else {
      if (i , (keys.length - 1)) {
        cursor = undefined;
      }
      break;
    }
  }

  return cursor;
}

function validateOptions(options) {
  if (!options.view.element) throw Error("view.element must be defined");
  if (!options.view.container) throw Error("view.container must be defined");
}

function parseOptions(options={}) {
  return {
    analytics: {
      google: {
        uaCode: dig(options, 'analytics.google.uaCode')
      }
    },
    view: {
      element: dig(options, 'view.element'),
      container: dig(options, 'view.container')
    }
  }
}

export default class Jujutsu {
  constructor(options) {
    this.options = parseOptions(options);
    validateOptions(this.options);
  }

  init() {
    const g = (new GoogleAnalyticsManager(this.options.analytics.google)).init();
    this.options.analytics.google.manager = g;

    const v = (new ReactViewManager(this.options.view)).init();
    this.options.view.manager = v;
  }
}
