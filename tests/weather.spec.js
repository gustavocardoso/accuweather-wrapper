import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import AccuWeatherWrapper from '../src/main'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('Weather', () => {
  let accuweather
  let fetchedStub

  beforeEach(() => {
    accuweather = new AccuWeatherWrapper({
      token: 'foo'
    })

    fetchedStub = sinon.stub(global, 'fetch')

    fetchedStub.resolves({
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

    it('should have oneDayForecast method', () => {
      expect(accuweather.getWeather.oneDayForecast).to.exist
    })

    it('should have the fiveDaysForecast method', () => {
      expect(accuweather.getWeather.fiveDaysForecast).to.exist
    })
  })

  describe('currentConditions', () => {
    it('should call fetch method', () => {
      accuweather.getWeather.currentConditions()

      expect(fetchedStub).to.have.been.calledOnce
    })

    context('url parameters', () => {
      it('should call api with basic parameters', () => {
        accuweather.getWeather.currentConditions(3387236)

        expect(fetchedStub).to.have.been.calledWith(
          `${accuweather.apiURL}/currentconditions/v1/3387236?apikey=foo`
        )

        accuweather.getWeather.currentConditions(98765)

        expect(fetchedStub).to.have.been.calledWith(
          `${accuweather.apiURL}/currentconditions/v1/98765?apikey=foo`
        )
      })

      it('should call api with metric parameter', () => {
        accuweather.getWeather.currentConditions(3387236, true)

        expect(fetchedStub).to.have.been.calledWith(
          `${accuweather.apiURL}/currentconditions/v1/3387236?apikey=foo&metric=true`
        )
      })
    })

    it('should return data from the promise', async () => {
      const currentConditions = await accuweather.getWeather.currentConditions(3387236)

      expect(currentConditions).to.be.eql({ body: 'json' })
    })
  })

  describe('oneDayForecast', () => {
    it('should call fetch method', () => {
      accuweather.getWeather.oneDayForecast()

      expect(fetchedStub).to.have.been.calledOnce
    })

    context('URL parameters', () => {
      it('should call api with basic parameters', () => {
        accuweather.getWeather.oneDayForecast(3387236)

        expect(fetchedStub).to.have.been.calledWith(
          `${accuweather.apiURL}/forecasts/v1/daily/1day/3387236?apikey=foo`
        )
      })

      it('should call api with metric parameter', () => {
        accuweather.getWeather.oneDayForecast(3387236, true)

        expect(fetchedStub).to.have.been.calledWith(
          `${accuweather.apiURL}/forecasts/v1/daily/1day/3387236?apikey=foo&metric=true`
        )
      })
    })

    it('should return data from the promise', async () => {
      const oneDayForecast = await accuweather.getWeather.oneDayForecast(3387236)

      expect(oneDayForecast).to.be.eql({ body: 'json' })
    })
  })

  describe('fiveDaysForecast', () => {
    it('should call fetch method', () => {
      accuweather.getWeather.fiveDaysForecast()

      expect(fetchedStub).to.have.been.calledOnce
    })

    context('URL parameters', () => {
      it('should call api with basic parameters', () => {
        accuweather.getWeather.fiveDaysForecast(3387236)

        expect(fetchedStub).to.have.been.calledWith(
          `${accuweather.apiURL}/forecasts/v1/daily/5day/3387236?apikey=foo`
        )
      })

      it('should call api with metric parameter', () => {
        accuweather.getWeather.fiveDaysForecast(3387236, true)

        expect(fetchedStub).to.have.been.calledWith(
          `${accuweather.apiURL}/forecasts/v1/daily/5day/3387236?apikey=foo&metric=true`
        )
      })
    })

    it('should return data from the promise', async () => {
      const fiveDaysForecast = await accuweather.getWeather.fiveDaysForecast(3387236)

      expect(fiveDaysForecast).to.be.eql({ body: 'json' })
    })
  })
})
