class Publication{
    constructor(title, publisher, type, price, discount, copies,tax){
        this.title = title;
        this.publisher = publisher;
        this.type = type;
        this.price = price;
        this.copies = copies;
        this.discount = discount;
        this.tax = tax;
    }

    toString(){
        
        const bookString =      "TITOLO: " + this.title + "\n" + 
                                "CASA EDITRICE: " + this.publisher + "\n" + 
                                "GENERE: " + this.type + "\n" +
                                "PREZZO: " + "€" +this.getPublicPriceWithTax() + "\n" +
                                "SCONTO: " + this.discount+"%" + "\n"+
                                "COPIE: " + this.copies + "\n";
                                
        return bookString;
    }

    getPublicPriceWithTax(){
        const discount = this.price*this.discount / 100;
        const margin = this.price * 0.3;
        const tax = this.price*this.tax / 100;
        const publicPriceWithTax = this.price+tax-discount+margin;

        return publicPriceWithTax
    }

}