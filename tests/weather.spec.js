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

    it('should have current method', () => {
      expect(accuweather.getWeather.current).to.exist
    })

    it('should have forecast method', () => {
      expect(accuweather.getWeather.forecast).to.exist
    })
  })

  describe('current', () => {
    it('should call fetch method', () => {
      const current = accuweather.getWeather.current()

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL and parameters', () => {
      const current = accuweather.getWeather.current(123456)

      expect(fetchedStub).to.have.been.calledWith(
        `${accuweather.apiURL}/currentconditions/v1/123456?apikey=foo`
      )

      const current2 = accuweather.getWeather.current(98765)

      expect(fetchedStub).to.have.been.calledWith(
        `${accuweather.apiURL}/currentconditions/v1/98765?apikey=foo`
      )
    })

    it('should return the correct data from promise', () => {
      const current = accuweather.getWeather.current(98765)

      current.then(data => {
        expect(data).to.be.eql({ body: 'json' })
      })
    })
  })
})
