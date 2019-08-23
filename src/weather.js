export default function weather () {
  return {
    currentConditions: locationKey => {
      const url = `${this.apiURL}/currentconditions/v1/${locationKey}?apikey=${
        this.token
      }`

      return this.request(url)
    }
  }
}
