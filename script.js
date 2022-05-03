const book1 = new Book ('La lista','Michael Conelly', 'Litle, Brown', 'Mistero', 15.00, 100, 422, 5, 2011);
const book2 = new Book ('Il cardellino', 'Donna Tartt', 'Rizzoli', 'Narrativa', 17.00, 300, 893, 5, 2017);
const magazine1 = new Magazine('Elle', 'Carol Smith', 'Settimanale', 10, 'Fashion', 1.00, 0, 300, new Date(2019, 02, 23).toDateString());
const magazine2 = new Magazine('Donna Moderna', 'Stile Italia Edizione','Settimanale', 18, 'attualità', 1.00, 0, 300, new Date(2021, 03, 15).toDateString());


const booksArray = [book2];
const magazinesArray = [magazine2];

console.log(booksArray.toString());
console.log(magazinesArray.toString());

function table (array){
    const table = document.getElementById("list");
    for (const element of array) {
        const row = document.createElement("tr");

        const col1 = document.createElement("td");
        const data1 = document.createTextNode(element.title);
        col1.appendChild(data1);
        row.appendChild(col1);

        const col2 = document.createElement("td");
        const data2 = document.createTextNode("€ "+element.getPublicPrice());
        col2.appendChild(data2);
        row.appendChild(col2);

        const col3 = document.createElement("td");
        const data3 = document.createTextNode(element.yop);
        col3.appendChild(data3);
        row.appendChild(col3);


        table.appendChild(row)
    }
}


table(booksArray)