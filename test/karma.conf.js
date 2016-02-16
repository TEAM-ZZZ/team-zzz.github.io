module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower/angular/angular.js',
      'bower/angular-ui-route/angular-ui-route.js',
      'bower/angular-mocks/angular-mocks.js',
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