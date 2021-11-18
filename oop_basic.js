//shape constructor
function Shape(name, sides, sideLength) {
    //attributes aka fields
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    //functional- methods
    this.calcPerimeter = function (){
        this.perimeter = this.sides * this.sideLength ;
        console.log(this.perimeter)
    }
}
// object creation
let square = new Shape("square",4,5 );
let triangle = new Shape("triangle", 3, 3);
console.log(square)
console.log(triangle)
//object method calling
square.calcPerimeter()
triangle.calcPerimeter()
