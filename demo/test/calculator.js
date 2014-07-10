describe("Calculator", function() {

  var calc;

  before(function() {
    calc = Calculator();
  });

  it('should sum two numbers', function() {
    var result = calc.add(2, 3);
    result.should.equals(5);
  });

  it('should expect numbers only', function() {
    try {
      calc.add('a', 3);
    } catch(err) {
      err.should.equal('Only numbers are valid');
    }
  });

});
