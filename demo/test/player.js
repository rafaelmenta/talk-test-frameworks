describe('Player', function() {

    var player;
    beforeEach( function() {
        player = new Player();
    } );

    it('should be a function', function() {
        Player.should.be.a("function");
    });

    describe( 'when playing a single song', function() {
        it('should have a property singleSong when an object is passed do play()', function() {
            var playNextStub = sinon.stub( Player.prototype, 'playNext' ),
                song = new Song( 125 );

            player.play( song );

            player.should.have.property( 'singleSong' );
            player.should.not.have.property( 'playList' );
            playNextStub.restore();
        });

        it.only( 'should play the only song and exit the player', function() {
            var clock = sinon.useFakeTimers(),
                song = new Song( 120 ),
                playNextSpy = sinon.spy( player, 'playNext' ),
                playSpy = sinon.spy(song, 'play');

            player.play( song );
            clock.tick( song.duration * 1000 );

            expect( song.play.calledOnce ).to.be.true;
            expect( playNextSpy.calledTwice ).to.be.true;
            expect( playNextSpy.returnValues[0] ).to.deep.equal( song );
            expect( playNextSpy.returnValues[1] ).to.deep.equal( undefined );

            playNextSpy.restore();
            clock.restore();
        } )

    } );

    describe( 'when playing a list of songs', function() {
        it('should have a property playList when an array is passed do play()', function() {
            var playNextStub = sinon.stub( Player.prototype, 'playNext' ),
                songs = [ new Song( 125 ), new Song( 55 ), new Song( 92 ) ];

            player.play( songs );

            player.should.have.property( 'playList' );
            player.should.not.have.property( 'singleSong' );
            playNextStub.restore();
        });
    });

});