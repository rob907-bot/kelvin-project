// used const because kelvin variable will stay constant. The forecast today is 293 Kelvin.
const kelvin = "293";

// to get celsius I added the subtract sign and put the 'kelvin' variable and 273 into parenthesis.
var celsius = (kelvin - 273);

// plugged the equation and just added var for variable declaration
var fahrenheit = (celsius * (9/5) + 32);

// used Math.floor to round down the number
var fahrenheit = (Math.floor(fahrenheit))

var fahrenheit = `The temperature is ${fahrenheit} degrees Fahrenheit.`

console.log(fahrenheit)
