const Media = require("./media");

module.exports = class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this.artist = artist;
      this.songs = songs;
    }
    shuffle() {
      let newPlayList = [];
  
      while (newPlayList.length < this.songs.length) {
        let random = Math.floor(Math.random(this.songs) * this.songs.length)
        let randomSong = this.songs[random];
        if (newPlayList.indexOf(randomSong) === -1) {
          newPlayList.push(randomSong);
        }
      }
      return newPlayList;
    };
  }

