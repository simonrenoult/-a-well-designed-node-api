const sinon = require('sinon')
const helloWorld = require('../../../lib/hello-world/handlers')

describe('hello-world handlers', () => {
  describe('.sayHello()', () => {
    it('calls res.send once', () => {
      // Given
      const fakeReq = {}
      const sendStub = sinon.stub()
      const fakeRes = { send: sendStub }

      // When
      helloWorld.sayHello(fakeReq, fakeRes)

      // Then
      sinon.assert.calledOnce(sendStub)
    })
    it('calls res.send with "hello world!"', () => {
      // Given
      const fakeReq = {}
      const sendStub = sinon.stub()
      const fakeRes = { send: sendStub }

      // When
      helloWorld.sayHello(fakeReq, fakeRes)

      // Then
      sinon.assert.calledWith(sendStub, 'hello world!')
    })
  })
})
