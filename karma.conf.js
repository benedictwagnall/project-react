// Karma configuration
// Generated on Wed Jul 12 2017 15:45:57 GMT+0100 (BST)

const path = require('path')

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: [
            {pattern: 'tests.webpack.js'},
        ],

        preprocessors: {
            'src/**/*.js': [ 'webpack', 'babel'],
            'tests.webpack.js': [ 'webpack' ]
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015']
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js')
            },
            sourceFileName: function(file) {
                return file.originalPath
            }
        },

        webpack: {
            context: path.join(__dirname, 'src'),
            entry: [
                './main.js',
            ],
            output: {
                path: path.join(__dirname, 'www'),
                filename: 'bundle.js',
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use:[ 'babel-loader' ],
                    },
                ],
            },
            resolve: {
                modules: [
                    path.join(__dirname, 'node_modules'),
                ],
            },
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots'],


        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],

        client: {captureConsole: true},

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
