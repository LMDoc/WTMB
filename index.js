const Media = require("./media");
const Book = require("./book");
const Movie = require("./movie");
const CD = require("./cd");



const harryPotter = new Book ('Harry Potter', 'JK Rowling', 360);
const totalRecall = new Movie ('Total Recall', 'Some Guy', 90);
const sgtPepper = new CD('Sgt Pepper\'s Lonely Hearts Club Band', 'The Beatles', ['Sgt Pepper\'s Lonely Hearts Club Band', 'With a Little Help from My Friends', "Lucy in the Sky with Diamonds", "Getting Better", "Fixing a Hole"]);

console.log(harryPotter.title);
console.log(totalRecall.title);

sgtPepper.addRating(5)
sgtPepper.addRating(3)
sgtPepper.addRating(1)
sgtPepper.addRating(3)
sgtPepper.addRating(5)

console.log(sgtPepper.getAverageRating());
console.log(sgtPepper.shuffle().join(', '));







  