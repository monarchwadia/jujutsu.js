import Jujutsu from '../../../jujutsu/src/jujutsu.jsx';
import React from 'react';
import App from './App.jsx';

const j = new Jujutsu({
  analytics: {
    google: {
      uaCode: 'UA-123456'
    }
  }
});

j.render(<App/>, document.getElementById('out'));
