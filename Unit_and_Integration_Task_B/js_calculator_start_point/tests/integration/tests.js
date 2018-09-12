var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  // running a html element by id and assigning it to a variable
  // grabbing element number2 and cligking it
  // expect like assert-get value of what the running total is and it
  // will equal the string 2
  // eventually-the test will pass

  it('Do the number buttons work to update the display of the running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click()
    element(by.css('#number4')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('24');

  })

    // Do each of the arithmetical operations work to
    // update the display with the result of the operation?
    it('should add numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number1')).click()
      element(by.css('#operator_add')).click()
      element(by.css('#number1')).click()
      element(by.css('#operator_equals')).click()
      expect(running_total.getAttribute('value')).to.eventually.equal('2');

    })

    it('should subtract numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number4')).click()
      element(by.css('#operator_subtract')).click()
      element(by.css('#number2')).click()
      element(by.css('#operator_equals')).click()
      expect(running_total.getAttribute('value')).to.eventually.equal('2');

    })

    it('should multiply numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number3')).click()
      element(by.css('#operator_multiply')).click()
      element(by.css('#number3')).click()
      element(by.css('#operator_equals')).click()
      expect(running_total.getAttribute('value')).to.eventually.equal('9');

    })

    it('should divide numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number8')).click()
      element(by.css('#operator_divide')).click()
      element(by.css('#number2')).click()
      element(by.css('#operator_equals')).click()
      expect(running_total.getAttribute('value')).to.eventually.equal('4');

    })

    // Can we chain multiple operations together?

    it('Can we chain multiple operations together', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number2')).click()
      element(by.css('#operator_add')).click()
      element(by.css('#number2')).click()
      element(by.css('#operator_multiply')).click()
      element(by.css('#number3')).click()
      element(by.css('#operator_equals')).click()
      expect(running_total.getAttribute('value')).to.eventually.equal('12');
    })

	// Does it work as expected for a range of numbers?
  // (positive, negative, decimals, large numbers)

  it('should give a positive number', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('7');

  })

  it('should give a negative number', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');

  })

  it('should give a decimal point number', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('2.5');

  })

  it('should give a large number', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click()
    element(by.css('#number1')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number1')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('110');

  })


})
