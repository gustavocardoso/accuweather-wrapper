export default function getLocation () {
  return {
    byGeoposition: (latitude, longitude) => {
      const locationURL = `${this.apiURL}/locations/v1/cities/geoposition/search?apikey=${
        this.token
      }&q=${latitude}%2C${longitude}`

      return this.request(locationURL)
    }
  }
}
