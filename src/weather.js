export default function weather () {
  return {
    current: locationKey => {
      const url = `${this.apiURL}/currentconditions/v1/${locationKey}?apikey=${
        this.token
      }`

      return this.request(url)
    }
  }
}
