class Magazine extends Publication{
    constructor(title, publisher, periodicity, realease, type, price, discount, copies, releaseDate){
        super(title, publisher, type, price, discount, copies, 20)
        this.periodicity= periodicity;
        this.release= realease
        this._releaseDate = releaseDate.getTime();
    }
    // getPublicPrice(){
    //     // return this.price+(this.price/100)*20-(this.price/100)*this.discount+(this.price/100)*30;
    //     const publicPriceWithTax = super.getPublicPriceWithoutTax();
    //     const tax = this.price*0.2;
    //     const publicPrice = publicPriceWithTax+tax;
    //     return publicPrice;
    // }

    get releaseDate(){
        const date = new Date(this._releaseDate);
        return date;
    }

    set releaseDate(value){
        const time = value.getTime();
        this._releaseDate = time;
    }

    toString(){

        const magazineString =  super.toString()+
                                "PERIODICITA': " + this.periodicity + "\n" +
                                "NUMERO USCITA: " + this.release + "\n" +
                                "DATA DI USCITA: " + this.releaseDate;
                                
                                
        return magazineString;
    }
}

