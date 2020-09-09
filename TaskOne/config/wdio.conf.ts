let isDebug = () => process.env.VSCODE_DEBUG_MODE === 'true';
const defaultTimeoutInterval = 120000;
const outputDir = 'logs';

export const config: WebdriverIO.Config = {
  services: ['chromedriver'],
  specs: ['./src/Tests/**/*.spec.ts'],
  baseUrl: 'https://www.nike.com',
  path: '/',
  // exclude: ['./test/specs/navigation.spec.ts'],
  waitforTimeout: 60000,
  maxInstances: isDebug() ? 1 : 1,
  execArgv: isDebug() ? ['--inspect'] : [],
  framework: 'jasmine',
  reporters: [
    'spec',
    [
      'junit',
      {
        outputDir: outputDir,
        outputFileFormat: function(options: any) {
          return `results-${options.cid}-${Date.now()}.xml`;
        }
      }
    ]
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: isDebug()
      ? 24 * 60 * 60 * 1000
      : defaultTimeoutInterval,
    useColors: true,

    expectationResultHandler: function(passed: any, assertion: any) {
      /**
       * only take screenshot if assertion failed
       */
      if (passed) {
        return;
      }

      browser.saveScreenshot(`logs/error_${assertion.error.message}.png`);
    },
    require: ['tsconfig-paths/register']
  },
  logLevel: 'info',
  outputDir: outputDir,
  // hooks
  before(capabilities, specs) {
    //Increase the window to the maximum available size without going full-screen
    browser.maximizeWindow();
    browser.url('/en/');
  }
};
