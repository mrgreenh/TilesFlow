import {Vector} from 'ptjs'

class Force{
    constructor(x, y, direction, intensity, color, width, height){
        this._x = (width/100) * x;
        this._y = (height/100) * y;
        this._vector = new Vector(this._x, this._y);
        this._direction = direction;
        this._intensity = intensity;
        this._color = new Vector(color);

        this._width = width;
        this._height = height;
        //this._boundingBox =
    }

    // _getBoundingBox(){

    // }

    getForceRadius(){
        var smallestDimension = Math.min(this._width, this._height);
        return (smallestDimension/200) * this._intensity;
    }

    getForceAtPoint(x, y){
        var pointVector = new Vector(x,y);
        var forceToPointVector = pointVector.$subtract(this._vector);

        var distance = forceToPointVector.magnitude();
        var normalizedVector = forceToPointVector.$normalize();

        var forceRadius = this.getForceRadius();
        //Linear decay for now
        var forceDecay = (forceRadius - Math.min(forceRadius, Math.abs(distance)))/forceRadius;

        var vectorX = new Vector(1, 0);
        var vectorY = new Vector(0, 1);
        var forceX = forceRadius*forceDecay*vectorX.projection(normalizedVector).magnitude();
        var forceY = forceRadius*forceDecay*vectorY.projection(normalizedVector).magnitude();

        var color = this._color.$multiply(forceDecay);
        return {forceX, forceY, color};
    }
}

export default Force;