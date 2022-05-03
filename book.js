class Book extends Publication{
    constructor (title, author, publisher, type, price, copies, pages, discount, yop){
        super(title, publisher, type, price, discount, copies, 10)
        this.author = author;
        this.pages = pages;
        this.yop = yop
    }

    // getPublicPrice(){
    //     // return this.price+(this.price/100)*10-(this.price/100)*this.discount+(this.price/100)*30;
    //     const publicPriceWithTax = super.getPublicPriceWithoutTax();
    //     const tax = this.price*0.1;
    //     const publicPrice = publicPriceWithTax+tax;
    //     return publicPrice;
    // }
    toString(){

        const bookString =  super.toString() +
                            "AUTORE: " + this.author + "\n" + 
                            "PAGINE: " + this.pages + "\n" +
                            "ANNO DI PUBBLICAZIONE: " + this.yop;                       
                                
        return bookString;
    }
    
}

