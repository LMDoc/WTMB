const Media = require("./media");

module.exports = class Movie extends Media {
    constructor(title, director, duration) {
      super(title);
      this.director = director;
      this.duration = duration;
    }
  }