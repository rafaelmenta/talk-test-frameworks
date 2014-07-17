describe("Calculator", function() {

    var calc;

    before(function() {
        calc = Calculator();
    });

    it('should sum two numbers', function() {
        var result = calc.add(2, 3);
        result.should.equals(5);
    });

    it('should divide two numbers', function() {
        var result = calc.div(6, 2);
        result.should.equals(3);
    });

    it('should not divide by zero', function() {
        try {
            var result = calc.div(6, 2);
        } catch( err ) {
          err.should.equal('Can not divide by zero');
        }
    });

    it('should expect numbers only', function() {
        try {
            calc.add('a', 3);
        } catch (err) {
            err.should.equal('Only numbers are valid');
        }
    });

});