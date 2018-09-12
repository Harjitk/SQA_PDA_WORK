var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 9)
  })

  it('it should substract', function(){
    calculator.numberClick(10)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should multiply', function(){
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 10)
  })

  it('it should divide', function(){
    calculator.numberClick(50)
    calculator.operatorClick('/')
    calculator.numberClick(10)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })


it('it should number click', function(){
  calculator.numberClick(8)
  assert.equal(calculator.runningTotal, 8 )
})


it('should have a operator click', function(){
  calculator.numberClick(8)
  calculator.operatorClick('-')
  calculator.numberClick(4)
  calculator.operatorClick('=')
  assert.equal(calculator.runningTotal, 4)
})

it('should have a clear click', function(){
  calculator.numberClick(8)
  calculator.operatorClick('-')
  calculator.numberClick(4)
  calculator.clearClick('clr')
  assert.equal(calculator.runningTotal, 0)
})


})
