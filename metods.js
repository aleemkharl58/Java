var car={};
car.mileage=1958;
car.color="blue";
console.log(car);
car.turnthekey=function(){
  console.log("the engine is running")
}
car.lightson=function(){
  console.log("the lights are on")
}
console.log(car);
car.turnthekey();
car.lightson();