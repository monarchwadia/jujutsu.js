const jujutsu = require('commander');
const {version} = require('./package.json');

jujutsu
  .version(version);

jujutsu.command('new [name]')
  .description('create a new app called [name]')
  .action((name) => {
    console.log(name);
  });

jujutsu.parse(process.argv);
