# grunt-istatic

Grunt tasks for istatic

## Getting Started
Install the module with: `npm install grunt-istatic`

### Example
```javascript
// Load the plugin that provides the "istatic" task
grunt.loadNpmTasks('grunt-istatic');

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
}
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 mockee
Licensed under the MIT license.
