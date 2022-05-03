const book1 = new Book ('La lista','Michael Conelly', 'Litle, Brown', 'Mistero', 15.00, 100, 422, 5, 2011);
const book2 = new Book ('Il cardellino', 'Donna Tartt', 'Rizzoli', 'Narrativa', 17.00, 300, 893, 5, 2017);
const magazine1 = new Magazine('Elle', 'Carol Smith', 'Settimanale', 10, 'Fashion', 1.50, 0, 300, new Date(2019, 02, 23).toDateString());
const magazine2 = new Magazine('Donna Moderna', 'Stile Italia Edizione','Settimanale', 18, 'attualità', 1.50, 0, 300, new Date(2021, 03, 15).toDateString());


const booksArray = [book1, book2];
const magazinesArray = [magazine1, magazine2];

console.log(book1.toString());
console.log(book2.toString());

console.log(magazine1.toString());
console.log(magazine2.toString());