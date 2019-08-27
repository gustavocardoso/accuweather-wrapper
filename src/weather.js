export default function weather () {
  return {
    currentConditions: locationKey => {
      const url = `${this.apiURL}/currentconditions/v1/${locationKey}?apikey=${
        this.token
      }`

      return this.request(url)
    },

    oneDayForecast: locationKey => {
      const url = `${this.apiURL}/forecasts/v1/daily/1day/${locationKey}?apikey=${
        this.token
      }`

      return this.request(url)
    },

    fiveDaysForecast: () => {}
  }
}
