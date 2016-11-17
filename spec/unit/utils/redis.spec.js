const chai = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

const expect = chai.expect
const redis = proxyquire('../../../lib/utils/redis', {
  'redis': sinon.stub()
})

describe('redis', () => {
  it('returns a function', () => {
    expect(redis).to.be.a('function')
  })
})
