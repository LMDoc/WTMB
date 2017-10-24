const Media = require("./media");

module.exports = class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this.author = author;
      this.pages = pages;
    }
  }

