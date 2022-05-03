/// PROPERTIES: TITLE, EDITOR, RELEASE, CADENCE, TYPE, PRICE, DISCOUNT, COPIES


/// METHODS:  
/// TOSTRING()
/// GETPUBLICPRICE() - CALCOLARE PREZZO AL PUBBLICO [PRICE+20%-DISCOUNT+30%]

class Magazine {
    constructor(title, publisher, periodicy, realease, type, price, discount, copies, releaseDate){
        this.title = title;
        this.publisher = publisher;
        this.periodicy= periodicy;
        this.release= realease
        this.type = type;
        this.price = price;
        this.discount = discount;
        this.copies = copies;
        this.releaseDate = releaseDate;
    }
    getPublicPrice(){
        return this.price+(this.price/100)*20-(this.price/100)*this.discount+(this.price/100)*30;
    }

    toString(){
        
        const bookString =      "Title: " + this.title + "\n" + 
                                "Publisher: " + this.publisher + "\n" + 
                                "Periodicy: " + this.periodicy + "\n" + 
                                "Release: " + this.release + "\n" +
                                "Type: " + this.type + "\n" +
                                "Price: " + "€" + this.getPublicPrice() + "\n" +
                                "Discount: " + this.discount+"%" + "\n" +
                                "Copies: " + this.copies + "\n" +
                                "Release Date: " + this.releaseDate;
                                
        return bookString;
    }
}
