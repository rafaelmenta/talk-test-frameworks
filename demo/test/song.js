describe('Song', function() {

    var song;
    beforeEach( function() {
        song = new Song( 1.5 );
    } );

    it('should be a function', function() {
        Song.should.be.a("function");
    });

    it( 'should be playing after call play()', function() {
        song.play();
        expect(song.isPlaying).to.be.true;
    });

    it( 'should call nextSong after X seconts', function( ) {
        var clock = sinon.useFakeTimers();
        sinon.stub( Song.prototype, 'nextSong' );

        song.play();
        clock.tick( song.duration * 1000 );
        
        expect( song.nextSong.calledOnce ).to.be.true;
        clock.restore();
    } );

});