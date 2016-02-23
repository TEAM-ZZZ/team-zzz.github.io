module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower/angular/angular.js',
      'bower/angular-ui-router/release/angular-ui-router.js',
      'bower/angular-mocks/angular-mocks.js',
      'bower/angular-animate/angular-animate.js',
      'bower/angular-messages/angular-messages.js',
      'src/app/app.module.js',
      'src/app/*.js',
      'src/app/**/*.js',
      'test/unit/**/*.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    singleRun: false

  });
};