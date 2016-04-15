import {Triangle, Vector} from 'ptjs'

class ColorfulTriangle{
    constructor(anchorPoint, nextColPoint, nextRowPoint){
        this.concept = new Triangle(anchorPoint.concept)
                            .to(nextColPoint.concept, nextRowPoint.concept);
        this.color = this.getColor([anchorPoint, nextColPoint, nextRowPoint]);
    }

    getColor(points){
        return points.reduce((result, point) => {
            var color = point.color ? point.color.$multiply(1/points.length) : new Vector(255,255,255);
            return result.$subtract(color);
        }, new Vector(255,255,255));
    }
}

export default ColorfulTriangle;