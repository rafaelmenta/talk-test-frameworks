
var Song = function( duration ) {
    this.duration = duration;
    this.isPlaying = false;
};

Song.prototype.play = function() {
    this.isPlaying = true;
};