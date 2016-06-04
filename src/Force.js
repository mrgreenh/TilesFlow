import {Vector} from 'ptjs'

class Force{
    constructor(x,
                y,
                direction,
                intensity,
                color,
                width,
                height,
                decay,
                invert,
                influenceColor,
                influencePosition,
                axis){
        this._x = x;
        this._y = y;
        this._vector = new Vector(this._x, this._y);
        this._direction = direction;
        this._intensity = intensity;
        this._color = color || [0,0,0,0];
        this._decay = decay;
        this._invert = invert;

        this._width = width;
        this._height = height;

        this.axis = axis;
        this.influenceColor = influenceColor;
        this.influencePosition = influencePosition;

    }

    getForceRadius(){
        var smallestDimension = Math.min(this._width, this._height);
        return (smallestDimension/200) * this._intensity;
    }

    getForceAtPoint(x, y){
        var pointVector = new Vector(x,y);
        var forceToPointVector = pointVector.$subtract(this._vector);
        var distance = forceToPointVector.magnitude();

        var forceRadius = this.getForceRadius();

        var forceDecay;
        if(distance > forceRadius){
            if(this._invert) forceDecay=1;
            else forceDecay=0;
        }else{
            var x = (forceRadius - Math.min(forceRadius, Math.abs(distance)))/(forceRadius||1);
            if(this._invert) x = 1 - x;
            switch(this._decay){
                case "cosine":
                    forceDecay = Math.pow(Math.cos(Math.PI * (1 - x) / 2), 10);
                    break;
                case "clipping_power":
                    forceDecay = Math.pow(Math.max(0, Math.abs(x) * 2 - 1), 3)
                    break;
                case "sine":
                    forceDecay = Math.pow(Math.abs(Math.sin(Math.PI * x / 2)), 0.5);
                    break;
                default:
                    forceDecay = x;
                    break;
            }            
        }

        var normalizedVector = forceToPointVector.$normalize();

        var vectorX = new Vector(1, 0);
        var vectorY = new Vector(0, 1);
        var forceX = forceRadius*forceDecay*vectorX.projection(normalizedVector).x;
        var forceY = forceRadius*forceDecay*vectorY.projection(normalizedVector).y;

        var color = this._color.map(colorCoord => colorCoord * forceDecay);
        return {forceX, forceY, color};
    }
}

export default Force;
