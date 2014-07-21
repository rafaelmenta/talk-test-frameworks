/**
 * A JS Music Player simulator.
 *
 * The Player is able to play a single Song or a playList.
 * Also inform whether it will be playing or not at specific point in time.
 *
 */

var Player = function( ) {
    this.currentSongIndex = -1;
};

Player.prototype.play = function( media ) {
    // add to playList if is array
    if ( Array.isArray( media ) ) {
        this.playList = media;
    } else if ( media instanceof Song ) {
        // add to singleSong if is single Song
        this.singleSong = media;
    }
    this.playNext();
};

Player.prototype.playNext = function() {
    var currentSong;
    if ( this.singleSong || this.playList) {
        this.currentSongIndex += 1;
        if ( this.singleSong && this.currentSongIndex === 0 ) {
            currentSong = this.singleSong;
        } else if ( this.playList && this.currentSongIndex < this.playList.lenght ) {
            currentSong = this.playList[this.currentSongIndex];
        }
        if ( currentSong instanceof Song ) {
            currentSong.player = this;
            currentSong.play();
        }
    }
    return currentSong;
};
