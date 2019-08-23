export default function location () {
  return {
    byGeoposition: async (latitude, longitude) => {
      const locationURL = `${this.apiURL}/locations/v1/cities/geoposition/search?apikey=${
        this.token
      }&q=${latitude}%2C${longitude}`

      const location = await this.request(locationURL)

      return { key: location.Key }
    }
  }
}
