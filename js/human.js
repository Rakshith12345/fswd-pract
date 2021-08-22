function Human(eye,hair,color){
    this.eye=eye
    this.hair=hair
    this.color=color
    
}
function character(height){
    this.height=height
   
    console.log("there height is :"+height)
}
character("5'8")
var c1=new Human("round","black","dark brown")
var c2=new Human("oval","white","dark")
console.log("c1 eye is : "+c1.eye+" c2 eye is : "+c2.eye)

function new_human(height,hairs,color){
    this.height=height
    this.hairs=hairs
    this.color=color
}
new_human("5'8","brown","dark")
console.log("his height is : "+height," his hairs are: "+ hairs," his color is :"+ color)