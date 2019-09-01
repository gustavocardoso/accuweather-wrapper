# AccuWeather Wrapper

[![Build Status](https://travis-ci.com/gustavocardoso/accuweather-wrapper.svg?branch=master)](https://travis-ci.com/gustavocardoso/accuweather-wrapper) [![Coverage Status](https://coveralls.io/repos/github/gustavocardoso/accuweather-wrapper/badge.svg?branch=master)](https://coveralls.io/github/gustavocardoso/accuweather-wrapper?branch=master)

A wrapper to work with the [Accuweather Web API](https://developer.accuweather.com).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

| ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 40+ ✔                                                                                                         | 42+ ✔                                                                                                          | 29+ ✔                                                                                                        | 10.1+ ✔                                                                                                       | Nope ✘                                                                                                    |

## Dependencies

This library uses [fetch](https://fetch.spec.whatwg.org/) to make requests to the Accuweather Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install accuweather-wrapper --save
```

## How to use

### Configuration

Save the _.env.sample_ file as _.env_ and provide the values for the environment variable **ACCESS_TOKEN**.

### ES6

```js
// to import a specific method
import AccuWeatherWrapper from 'accuweather-wrapper'

// passing access token via options
const accuweather = new AccuWeatherWrapper({
  token: 'YOUR_TOKEN_HERE'
})

// using access token via .env file
const accuweather = new AccuWeatherWrapper({})

// using  method getLocation
const lat = 49.2093644
const long = -123.1270038
locationKey = accuweather.getLocation.byGeoposition(lat, long)
```

### CommonJS

```js
const AccuWeatherWrapper = require('accuweather-wrapper').default

// passing access token via options
const accuweather = new AccuWeatherWrapper({
  token: 'YOUR_TOKEN_HERE'
})

// using access token via .env file
const accuweather = new AccuWeatherWrapper({})
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="accuweather-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="accuweather-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `AccuWeatherWrapper`. Follow an example:

```js
const accuweather = new AccuWeatherWrapper({
  token: 'YOUR_TOKEN_HERE'
})

const currentConditions = accuweather.getWeather.currentConditions(locationKey)
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gustavocardoso/accuweather-wrapper/tags).

## Authors

| ![Gustavo Cardoso](https://avatars1.githubusercontent.com/u/3013?s=150&v=4) |
| :-------------------------------------------------------------------------: |
|  [Gustavo Cardoso](https://github.com/gustavocardoso/accuweather-wrapper/)  |

See also the list of [contributors](https://github.com/gustavocardoso/accuweather-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
