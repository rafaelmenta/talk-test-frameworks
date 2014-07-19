describe('Player', function() {

    var player;
    beforeEach( function() {
        player = new Player();
    } );

    it('should be a function', function() {
        Player.should.be.a("function");
    });

    it('should have a property currentSong when an object is passed do play()', function() {
        var song = new Song( 125 );
        player.play( song );
        player.should.have.property( 'currentSong' );
        player.should.not.have.property( 'playList' );
    });

    it('should have a property playList when an array is passed do play()', function() {
        var songs = [ new Song( 125 ), new Song( 55 ), new Song( 92 ) ];
        player.play( songs );
        player.should.have.property( 'playList' );
        player.should.not.have.property( 'currentSong' );
    });

});