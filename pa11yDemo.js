/*global process*/
const pa11y = require('pa11y');
const cliReporter = require('pa11y/reporter/cli');

const test = pa11y({
  log: {
    debug: console.log.bind(console),
    error: console.error.bind(console),
    info: console.info.bind(console)
  },
  ignore: ['WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID', 'WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail']
});
const cwd = process.cwd();
const demoPath = `file://${cwd}/demos/local/pa11y.html`;
test.run(demoPath, (error, result) => {
  if(error){
    return console.log(`Ooops:${error.message}`);
  }
  cliReporter.results(result, demoPath);
});
