var table={
  legs:3,color:'gray',priceUSD:130,
}
console.log(table)
console.log(table.priceUSD)
console.log(table.color)
console.log(table.legs)
                  //******************************
                  //objects in javascript
var car={};
car.color="red";
car["color"]="green";
car["speed"]=200;
car.speed=100;
console.log(car);
                  //******************************
                  //keys in objects
var arrofkeys=['speed','altitude','color'];
var drone={
  speed:70,altitude:333,color:"blue"
}
for(var i=0;i<arrofkeys.length;i++){
  console.log(drone[arrofkeys[i]])
}
                  //******************************
                  //build in math functions
let x=Math.PI;
console.log(x)
let y=Math.pow(4,2);
console.log(y)
let z=Math.max(23,789,234567);
console.log(z)
let a=Math.log(15);
console.log(x)
                  //******************************
                  // random variable or number
Math.random();
var decimal=Math.random();
console.log(decimal);
// console.log(decimal * 10);
console.log(Math.ceil(decimal * 10)) // ceil function is used to take output in exact integers rather than in decimal format.