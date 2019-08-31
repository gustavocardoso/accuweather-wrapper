# JS Starter Boilerplate

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

Save the _.env.sample_ file as _.env_ and provide the values for the environment variables: **API_URL** and **ACCESS_TOKEN**

### ES6

```js
// to import a specific method
import AccuWeatherWrapper from 'accuweather-wrapper'

const accuweather = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
})

// using  method
spotify.search.artists('Incubus')
```

### CommonJS

```js
const SpotifyWrapper = require('spotify-wrapper').default

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
})
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `SpotifyWrapper`. Follow an example:

```js
const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
})

const albums = spotify.search.albums('Choosen Artist')
```

## Methods

> Follow the methods that the library provides.

### search.albums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as _album_.

**Arguments**

| Argument | Type     | Options            |
| -------- | -------- | ------------------ |
| `query`  | _string_ | 'Any search query' |

**Example**

```js
spotify.search.albums('Incubus').then(data => {
  // do what you want with the data
})
```

### search.artists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as _artist_.

**Arguments**

| Argument | Type     | Options            |
| -------- | -------- | ------------------ |
| `query`  | _string_ | 'Any search query' |

**Example**

```js
spotify.search.artists('Incubus').then(data => {
  // do what you want with the data
})
```

### search.tracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as _track_.

**Arguments**

| Argument | Type     | Options            |
| -------- | -------- | ------------------ |
| `query`  | _string_ | 'Any search query' |

**Example**

```js
spotify.search.tracks('Drive').then(data => {
  // do what you want with the data
})
```

### search.playlists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as _playlist_.

**Arguments**

| Argument | Type     | Options            |
| -------- | -------- | ------------------ |
| `query`  | _string_ | 'Any search query' |

**Example**

```js
spotify.search.playlists('Happy Day').then(data => {
  // do what you want with the data
})
```

### album.getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type     | Options       |
| -------- | -------- | ------------- |
| `id`     | _string_ | 'Specific id' |

**Example**

```js
spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy').then(data => {
  // do what you want with the data
})
```

### album.getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type               | Options        |
| -------- | ------------------ | -------------- |
| `ids`    | _Array of strings_ | ['id1', 'id2'] |

**Example**

```js
spotify.album
  .getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want with the data
  })
```

### album.getTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Arguments**

| Argument | Type     | Options       |
| -------- | -------- | ------------- |
| `id`     | _string_ | 'Specific id' |

**Example**

```js
spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy').then(data => {
  // do what you want with the data
})
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Willian Justen](https://avatars2.githubusercontent.com/u/3991845?v=3&s=150) |
| :---------------------------------------------------------------------------: |
|              [Willian Justen](https://github.com/willianjusten/)              |

See also the list of [contributors](https://github.com/willianjusten/spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
