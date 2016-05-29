import {Triangle, Vector} from 'ptjs'

class ColorfulTriangle{
    constructor(anchorPoint, nextColPoint, nextRowPoint, colorInterpolationMode, baseColor){
        this.concept = new Triangle(anchorPoint.concept)
                            .to(nextColPoint.concept, nextRowPoint.concept);
        this.color = this.getColor([anchorPoint, nextColPoint, nextRowPoint], colorInterpolationMode, baseColor);
    }

    getColor(points, colorInterpolationMode, baseColor){
        return points.reduce((result, point) => {
            var color = point.color ? point.color.map(c => c/points.length) : baseColor;
            return result.map((c, i) => c + color[i]);
        }, baseColor);
    }
}

export default ColorfulTriangle;