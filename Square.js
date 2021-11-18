class Square extends Shape{
    constructor(sideLength) {
        super("square", 4, sideLength);
        this.sideLength = sideLength;

    }
    //method
    calcArea(){
        this.area = Math.pow(this.sideLength, 2);
        console.log("area:" + this.area);
    }
}