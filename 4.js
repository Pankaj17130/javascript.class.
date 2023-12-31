class Shape{
    constructor(){
        this.type ="shape";      
    }
    calculateArea(){
        return "area calculation not implemented for this shape.";

    }
    calculatePerimeter(){
        return "Perimeter calculation not implemented for this shape";

    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
        this.type="circle";
        
    }
    calculateArea(){
        return Math.PI* this.radius* this.radius;
    }
    calculatePerimeter(){
        return 2* Math.PI*this.radius;

    }

}

class Rectangle extends Shape {
    constructor(width,height){
        super();
        this.type="Rectangle";
        this.width= width;
        this.height=height;

    }
    calculateArea(){
       return this.width*this.height;
    }
    calculatePerimeter(){
        return 2* (this.width+this.height);
    }
}

class triangle extends Shape{
    constructor(base, height ,side1, side2, side3){
        super();
        this.height=height;
        this.type="triangle"
        this.base=base;
        this.side1=side1;
        this.side2= side2;
        this.side3= side3;
    }
    calculateArea(){
        return 0.5 * this.base* this.height;

    }
    calculatePerimeter(){
        return this.side1 + this.side2 + this.side3;
    }
}
const rectangleInstance = new Rectangle(5, 6);
console.log(`Rectangle - Area: ${rectangleInstance.calculateArea()}, Perimeter: ${rectangleInstance.calculatePerimeter()}`);

const circleInstance = new Circle(5);
console.log(`Circle - Area: ${circleInstance.calculateArea()}, Perimeter: ${circleInstance.calculatePerimeter()}`);

const triangleInstance = new triangle(8, 9, 5, 7, 10);
console.log(`Triangle - Area: ${triangleInstance.calculateArea()}, Perimeter: ${triangleInstance.calculatePerimeter()}`);



