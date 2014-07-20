/**
 * A JS Music Player simulator.
 *
 * The Player is able to play a single Song or a PlayList.
 * Also inform whether it will be playing or not at specific point in time.
 *
 */

var Player = function( ) {
};

Player.prototype.play = function( media ) {
    // add to playList if is array 
    if ( Array.isArray( media ) ) {
        this.playList = media;
    } else if ( media instanceof Song ) {
        // add to currentSong if is single Song 
        this.currentSong = media;
    }
};

