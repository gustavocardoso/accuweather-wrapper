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

    const data = {
      Version: 1,
      Key: '3387236',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Marpole',
      EnglishName: 'Marpole',
      PrimaryPostalCode: 'V6P',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America'
      },
      Country: { ID: 'CA', LocalizedName: 'Canada', EnglishName: 'Canada' },
      AdministrativeArea: {
        ID: 'BC',
        LocalizedName: 'British Columbia',
        EnglishName: 'British Columbia',
        Level: 1,
        LocalizedType: 'Province',
        EnglishType: 'Province',
        CountryID: 'CA'
      },
      TimeZone: {
        Code: 'PDT',
        Name: 'America/Vancouver',
        GmtOffset: -7,
        IsDaylightSaving: true,
        NextOffsetChange: '2019-11-03T09:00:00Z'
      },
      GeoPosition: {
        Latitude: 49.207,
        Longitude: -123.132,
        Elevation: { Metric: [Object], Imperial: [Object] }
      },
      IsAlias: false,
      ParentCity: {
        Key: '53286',
        LocalizedName: 'Vancouver',
        EnglishName: 'Vancouver'
      },
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Greater Vancouver',
          EnglishName: 'Greater Vancouver'
        }
      ],
      DataSets: ['Alerts', 'ForecastConfidence', 'MinuteCast', 'Radar']
    }

    promise = fetchedStub.resolves({
      json: () => data
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

    it('should return location key from the data', async () => {
      const locationKey = await accuweather.getLocation.byGeoposition(
        '49.246',
        '-123.116'
      )

      expect(locationKey).to.be.eql({ key: '3387236' })
    })
  })
})
