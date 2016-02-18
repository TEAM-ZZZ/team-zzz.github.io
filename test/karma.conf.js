module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower/angular/angular.js',
      'bower/angular-ui-router/release/angular-ui-router.js',
      'bower/angular-mocks/angular-mocks.js',
      'bower/angular-materialize/src/angular-materialize.js',
      'bower/angular-animate/angular-animate.js',
      'bower/angular-messages/angular-messages.js',
      'app/app.module.js',
      'app/*.js',
      'app/**/*.js',
      'test/unit/**/*.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};