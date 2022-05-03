class Publication{
    constructor(title, publisher, type, price, discount, copies){
        this.title = title;
        this.publisher = publisher;
        this.type = type;
        this.price = price;
        this.copies = copies;
        this.discount = discount;
    }

    toString(){
        
        const bookString =      "TITOLO: " + this.title + "\n" + 
                                "CASA EDITRICE: " + this.publisher + "\n" + 
                                "GENERE: " + this.type + "\n" +
                                "PREZZO: " + "€" +this.getPublicPrice() + "\n" +
                                "SCONTO: " + this.discount+"%" + "\n"+
                                "COPIE: " + this.copies + "\n";
                                
        return bookString;
    }

    getPublicPriceWithoutTax(){
        const discount = this.price*this.discount / 100;
        const margin = this.price * 0.3;
        const publicPriceWithoutTax = this.price-discount+margin;

        return publicPriceWithoutTax
    }

}