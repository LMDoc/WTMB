module.exports = class Media {
    constructor(title) {
      this.title = title;
      this.ratings = [];
      this.isCheckedOut = false;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) =>
        currentSum + rating, 0);
      let averageRating = ratingsSum / this.ratings.length;
      return `'${this.title}' has an average rating of ${averageRating.toFixed(1)}`;
    }
  
    addRating(rating) {
      this.ratings.push(rating)
    }
  };