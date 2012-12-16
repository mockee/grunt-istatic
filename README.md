# grunt-istatic

Grunt tasks for [iStatic](https://github.com/mockee/istatic).

## Getting Started
Install the plugin:
```bash
$ npm install grunt-istatic
```

Load the plugin that provides the "istatic" task:
```javascript
grunt.loadNpmTasks('grunt-istatic')
```

## Examples
```javascript
// Configuration
istatic: {
  testapp: {
    repos: {
      'ded/bonzo': {
        file: {
          '/bonzo.js': '/public/js/lib/'
        }
      }
    , 'dexteryy/OzJS': {
        tag: '2.5.1'
      , file: {
          '/oz.js': '/public/js/lib/'
      }
    }
  }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## License
Copyright (c) 2012 mockee
Licensed under the MIT license.
