/*global process*/
const pa11y = require('pa11y');
const cliReporter = require('pa11y/reporter/cli');

const test = pa11y({
  log: {
    debug: console.log.bind(console),
    error: console.error.bind(console),
    info: console.info.bind(console)
  }
});
const cwd = process.cwd();
const demoPath = `file://${cwd}/demos/local/test.html`;
test.run(demoPath, (error, result) => {
  if(error){
    return console.log(`Ooops:${error.message}`);
  }
  cliReporter.results(result, demoPath);
});
