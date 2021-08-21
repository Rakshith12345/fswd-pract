class car{
    constructor(brand){
        this.brand=brand
    }
    some(){
        
       return 'brand is : ' + this.brand;
    }
}

class carr extends car{
    
    constructor(brand,price){
        super(brand)
        this.price=price
    }
    show(){
        return this.some() + ' price is ' + this.price           
    }
}
let x=new carr("ford",2000000)
console.log(x.show())