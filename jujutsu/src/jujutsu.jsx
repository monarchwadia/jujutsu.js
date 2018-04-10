import merge from 'deepmerge';
import GoogleAnalyticsManager from './analytics/google-analytics-manager';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

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

const instance = {};
const JJContext = React.createContext(instance);
export { JJContext as JJContext };

export class Partial extends React.Component {
  render() {
    return (
      <JJContext.Consumer>
        {
          (jj) => { console.log("HERE's JJ!", jj); return this.props.children }
        }
      </JJContext.Consumer>
    )
  }
}

export default class Jujutsu {
  constructor(options) {
    this.options = parseOptions(options);
    instance['jj'] = this;
  }

  render(element, container) {
    this.options.analytics.google.manager = 
      (new GoogleAnalyticsManager(this.options.analytics.google)).init();

    ReactDom.render(element, container);
   }
}
