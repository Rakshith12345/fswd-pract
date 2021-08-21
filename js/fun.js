class Car{
    constructor(name){
        this.name=name
        
    }
    
    drives(){
        console.log("i am dri "+ this.name)
        
    }
}

class Cars extends Car{
    drives(){
        super.drives()
        console.log("i am driving "+this.name)
    }

}

let x=new Car("toyota");
x.drives();

