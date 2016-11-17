const sinon = require('sinon')
const chai = require('chai')

const fakeStore = { get () {} }
const services = require('../../../lib/products/services')(fakeStore)
const expect = chai.expect

describe('products services', () => {
  before(() => {
    // Given
    this.fakeStoreGet = sinon.stub(fakeStore, 'get')
  })
  beforeEach(() => {
    this.fakeStoreGet.reset()
  })
  after(() => {
    this.fakeStoreGet.restore()
  })
  describe('.findAll()', () => {
    describe('when store.get fails', () => {
      before(() => {
        this.fakeStoreGet.callsArgWith(1, new Error('fakeError'), null)
      })
      it('returns an error', () => {
        // When
        const findAllPromise = services.findAll()

        // Then
        return findAllPromise.catch(error => expect(error).to.exist)
      })
    })
    describe('when store.get returns an array', () => {
      before(() => {
        // Given
        this.fakeStoreGet.callsArgWith(1, null, [])
      })
      it('calls store.get once', () => {
        // When
        const findAllPromise = services.findAll()

        // Then
        return findAllPromise.then(() => sinon.assert.calledOnce(this.fakeStoreGet))
      })
      it('returns the array', () => {
        // When
        const findAllPromise = services.findAll()

        // Then
        return findAllPromise.then(products => expect(products).to.deep.equal([]))
      })
    })
  })
})
