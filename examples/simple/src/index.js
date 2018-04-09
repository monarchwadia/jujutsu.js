import Jujutsu from '../../../jujutsu/src/jujutsu.js';

const j = new Jujutsu({
  analytics: {
    google: {
      uaCode: 'UA-123456'
    }
  }
});

j.init();

console.log(j);