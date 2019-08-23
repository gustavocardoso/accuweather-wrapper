import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import AccuWeatherWrapper from '../src/main'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('Weather', () => {
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
    it('should have getWeather method', () => {
      expect(accuweather.getWeather).to.exist
    })

    it('should have currentConditions method', () => {
      expect(accuweather.getWeather.currentConditions).to.exist
    })

    it.skip('should have forecast method', () => {
      expect(accuweather.getWeather.forecast).to.exist
    })
  })

  describe('currentConditions', () => {
    it('should call fetch method', () => {
      const currentConditions = accuweather.getWeather.currentConditions()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL and parameters', () => {
      const currentConditions = accuweather.getWeather.currentConditions(3387236)

      expect(fetchedStub).to.have.been.calledWith(
        `${accuweather.apiURL}/currentconditions/v1/3387236?apikey=foo`
      )

      const currentConditions2 = accuweather.getWeather.currentConditions(98765)

      expect(fetchedStub).to.have.been.calledWith(
        `${accuweather.apiURL}/currentconditions/v1/98765?apikey=foo`
      )
    })

    it('should return data from the promise', () => {
      const currentConditions = accuweather.getWeather.currentConditions(3387236)

      currentConditions.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })
})
