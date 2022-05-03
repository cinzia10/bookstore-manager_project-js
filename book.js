///// PROPERTIES:   TITLE, AUTHOR, GENRE, PRICE, COPIES, PAGE, DISCOUNT, YOP
/// METHODS:  
/// TOSTRING()
/// GETPUBLICPRICE() - CALCOLARE PREZZO AL PUBBLICO [PRICE+10%-DISCOUNT+30%]


class Book {
    constructor (title, author, editor, genre, price, copies, pages, discount, yop){
        this.title = title;
        this.author = author;
        this.editor = editor;
        this.genre = genre;
        this.price = price;
        this.copies = copies;
        this.pages = pages;
        this.discount = discount;
        this.yop = yop
    }

    getPublicPrice(){
        return this.price+(this.price/100)*10-(this.price/100)*this.discount+(this.price/100)*30;
    }
    toString(){
        
        const bookString =      "Title: " + this.title + "\n" + 
                                "Author: " + this.author + "\n" + 
                                "Editor: " + this.editor + "\n" + 
                                "Genre: " + this.genre + "\n" +
                                "Price: " + "€" +this.getPublicPrice() + "\n" +
                                "Copies: " + this.copies + "\n" +
                                "Pages: " + this.pages + "\n" +
                                "Discount: " + this.discount+"%" + "\n" +
                                "Year of publishing: " + this.yop;
                                
        return bookString;
    }
    
}

