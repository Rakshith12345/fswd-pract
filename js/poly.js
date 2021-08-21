class Car{
    C_Tax;
    constructor(price){
        console.log("First")
        this.price=price;
        this.C_Tax = 18;
    }
    get_Price(){
        console.log("price of the car is :"+this.price);
    
    }
}

class Ford_Car extends Car{ 
    constructor(mode_Name, price){
        super(price)
        console.log("Second")
        this.mode_Name = mode_Name;
    }
    get_Price(){
        console.log("car price is: "+this.price)
    }
}
let x=new Ford_Car("Ecopsort", 1200000)
console.log(x)
//x.get_Price()

class Hundai_Car  extends Car{

}
let h = new Hundai_Car();
console.log(h)

class maruti_car extends Car{
    constructor(fuel,price){
        super(price)

        this.fuel=fuel;
    }
    get_Price(){
        console.log("fuel is: "+this.fuel)
    }
    
}
let y=new maruti_car("electric",1200)
console.log(y)
y.get_Price()