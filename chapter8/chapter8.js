var myObject = {};

var dreamCar = {
    make: "Volkswagen",
    model: "Golf R",
    color: "Limestone Grey",
    year: 2018,
    bodyStyle: "Hot Hatchback",
    price: 460000
};

console.log("The type of dreamCar is " + typeof (dreamCar));

document.getElementById('pricetag').innerHTML = dreamCar.price;
document.getElementById('modelyear').innerHTML = dreamCar.year;
document.getElementById('body').style.backgroundColor = dreamCar.color;
document.getElementById('body').innerHTML = dreamCar.make + ' ' + dreamCar.model;

