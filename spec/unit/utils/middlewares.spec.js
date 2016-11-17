const sinon = require('sinon')
const chai = require('chai')
const proxyquire = require('proxyquire')

const expect = chai.expect
const redisStub = sinon.stub()
const middlewares = proxyquire('../../../lib/utils/middlewares', {
  './redis': redisStub
})

describe('middlewares', () => {
  describe('.addStore()', () => {
    it('adds a store object to req', () => {
      // Given
      const reqStub = sinon.stub()

      // When
      const obj = { next () {} }
      middlewares.addStore(reqStub, {}, obj.next)

      // Then
      expect(reqStub).to.have.property('store')
    })
    it('calls next', () => {
      // Given
      const reqStub = sinon.stub()
      const nextSpy = sinon.spy()

      // When
      middlewares.addStore(reqStub, {}, nextSpy)

      // Then
      expect(nextSpy.called).to.be.true
    })
  })
  describe('.addServicesRegistry()', () => {
    it('adds a services object to req', () => {
      // Given
      const reqStub = sinon.stub()

      // When
      const obj = { next () {} }
      middlewares.addServicesRegistry(reqStub, {}, obj.next)

      // Then
      expect(reqStub).to.have.property('services')
    })
    it('calls next', () => {
      // Given
      const reqStub = sinon.stub()
      const fakeNext = sinon.spy()

      // When
      middlewares.addServicesRegistry(reqStub, {}, fakeNext)

      // Then
      expect(fakeNext.called).to.be.true
    })
  })
  describe('.registerService()', () => {
    it('assigns the service to the appropriate key', () => {
      // Given
      const fakeService = () => 'fakeServiceResult'
      const fakeReq = { services: {} }
      const fakeNext = sinon.spy()
      const callback = middlewares.registerService('fakeServiceName', fakeService)

      // When
      callback(fakeReq, {}, fakeNext)

      // Then
      expect(fakeReq.services.fakeServiceName).to.deep.equal('fakeServiceResult')
    })
    it('calls next', () => {
      // Given
      const fakeReq = { services: {} }
      const fakeNext = sinon.spy()
      const fakeService = () => {}
      const callback = middlewares.registerService('fakeServiceName', fakeService)

      // When
      callback(fakeReq, {}, fakeNext)

      // Then
      expect(fakeNext.called).to.be.true
    })
  })
})
