import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import AccuWeatherWrapper from '../src/main'

chai.use(sinonChai)

global.fetch = require('node-fetch')

describe('AccuWeatherWrapper Library', () => {
  it('should create an instance of AccuWeatherWrapper', () => {
    const accuweather = new AccuWeatherWrapper({})
    expect(accuweather).to.be.an.instanceOf(AccuWeatherWrapper)
  })

  it('should have a default apiURL', () => {
    const accuweather = new AccuWeatherWrapper({})

    expect(accuweather.apiURL).to.be.equal('http://dataservice.accuweather.com')
  })

  it('should receive api token as an option', () => {
    const accuweather = new AccuWeatherWrapper({
      token: 'azsxdcfvgbhnjmklç'
    })

    expect(accuweather.token).to.be.equal('azsxdcfvgbhnjmklç')
  })

  describe('request method', () => {
    let fetchedStub
    let promise

    beforeEach(() => {
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

    it('should have a request method', () => {
      const accuweather = new AccuWeatherWrapper({})

      expect(accuweather.request).to.exist
    })

    it('should call fetch when request', () => {
      const accuweather = new AccuWeatherWrapper({
        token: 'foo'
      })

      accuweather.request('url')

      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should call fetch with the correct URL', () => {
      const accuweather = new AccuWeatherWrapper({
        token: 'foo'
      })

      accuweather.request('www')

      expect(fetchedStub).to.have.been.calledWith('www')
    })

    it('should call fetch with the correct headers', () => {
      const accuweather = new AccuWeatherWrapper({
        token: 'foo'
      })

      const headers = {
        headers: {
          'Accept-Encoding': 'gzip,deflate'
        }
      }

      accuweather.request('www')

      expect(fetchedStub).to.have.been.calledWith('www', headers)
    })

    it('should return the correct data from the promise', async () => {
      const accuweather = new AccuWeatherWrapper({
        token: 'foo'
      })

      const data = await accuweather.request('www')

      expect(data).to.be.eql({ body: 'json' })
    })

    it('should handle promise error', async () => {
      const accuweather = new AccuWeatherWrapper({
        token: 'foo'
      })

      promise = fetchedStub.rejects('error')

      const data = await accuweather.request('www')

      expect(data).to.be.eql({ error: 'error' })
    })
  })
})
