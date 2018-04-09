import Jujutsu from '../../../jujutsu/src/jujutsu.js';
// import App from './App.jsx';
import React from 'react';

const j = new Jujutsu({
  analytics: {
    google: {
      uaCode: 'UA-123456'
    }
  },
  view: {
    container: document.getElementById('out'),
    element: (<h1>Hello, world!</h1>)
  }
});

j.init();

console.log(j);
