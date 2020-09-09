import { config } from './wdio.conf';

const CHROME_ARGS = [
  '--disable-default-apps',
  '--disable-extensions',
  '--disable-popup-blocking'
];

const chromeConfig: WebdriverIO.Config = {
  ...config,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: CHROME_ARGS
      }
    }
  ]
};

exports.config = chromeConfig;
