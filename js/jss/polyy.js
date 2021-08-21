class Human{
    c_colour;
    constructor(name){
        this.name=name
        this.c_colour="white"
        
    }
    basic_details(){
        console.log("colour is :"+this.c_colour)
        
        
    console.log("name is "+this.name) 

    }
}
let x=new Human("raks")
x.basic_details()

class human_color extends Human{
    c_height;
    constructor(age){
        
        super()
        this.age=age
        this.c_height="5'6"
        
    }
    basic_details(){
        console.log("age is : "+this.age)
        console.log("height is :"+this.c_height)
    }
    
}
let y=new human_color(25)
y.basic_details()