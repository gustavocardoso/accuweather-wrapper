import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import AccuWeatherWrapper from '../src/main'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('Location', () => {
  let accuweather
  let fetchedStub
  let promise

  beforeEach(() => {
    accuweather = new AccuWeatherWrapper({
      token: 'foo'
    })

    fetchedStub = sinon.stub(global, 'fetch')

    promise = fetchedStub.resolves({
      json: () => ({
        body: 'json'
      })
    })
  })

  afterEach(() => {
    fetchedStub.restore()
  })

  describe('Smoke tests', () => {
    it('should have getLocation method', () => {
      expect(accuweather.getLocation).to.exist
    })

    it('should have byGeoposition method', () => {
      expect(accuweather.getLocation.byGeoposition).to.exist
    })
  })

  describe('byLocation', () => {
    it('should call fetch method', () => {
      const location = accuweather.getLocation.byGeoposition('49.246', '-123.116')

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL and parameters', () => {
      const location = accuweather.getLocation.byGeoposition('49.246', '-123.116')

      expect(fetchedStub).to.have.been.calledWith(
        `${accuweather.apiURL}/locations/v1/cities/geoposition/search?apikey=${
          accuweather.token
        }&q=49.246%2C-123.116`
      )

      const location2 = accuweather.getLocation.byGeoposition('50', '55')

      expect(fetchedStub).to.have.been.calledWith(
        `${accuweather.apiURL}/locations/v1/cities/geoposition/search?apikey=${
          accuweather.token
        }&q=50%2C55`
      )
    })

    it('should return the correct data from the promise', () => {
      const location = accuweather.getLocation.byGeoposition('49.246', '-123.116')

      location.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })
})
