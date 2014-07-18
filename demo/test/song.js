describe('Song', function() {

    var song;
    beforeEach( function() {
        song = new Song( 154 );
    } );

    it('should be a function', function() {
        Song.should.be.a("function");
    });

    it('should be playing after call play()', function() {
        song.play();
        expect(song.isPlaying).to.be.true;
    });

});