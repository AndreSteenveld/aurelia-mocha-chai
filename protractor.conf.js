// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
    },

    // seleniumAddress: 'http://0.0.0.0:4444',
    specs: ['test/e2e/dist/**/*.js'],

    plugins: [{
        path: 'aurelia.protractor.js',
    }],

    framework: 'mocha',

    mochaOpts: {
        reporter: 'spec',
        timeout: 4000,
    },
};
