function Cars(car_brand,car_price){
    this.car_brand=car_brand
    this.car_price=car_price
}
function autopilot(){
    console.log("it has autopilot")
}
autopilot()



var c1=new Cars("telsa",52665713)
var c2=new Cars("maruti",357634)
console.log("Brand is : "+c1.car_brand,"Price is : "+c1.car_price)
console.log("Brand is : "+c2.car_brand,"Price is : "+c2.car_price)