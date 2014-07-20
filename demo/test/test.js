describe("My first test suite", function() {

    it('should fail', function() {
        true.should.be.true;
    });

});


describe("a test", function() {
    var foo = false;
    beforeEach(function(done) {
        setTimeout(function() {
            foo = true;
            done();
        }, 50);
    });
    it("should pass", function() {
        expect(foo).equals(true);
    });
});