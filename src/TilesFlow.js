import {Form, Point, Color} from 'ptjs';
import PointsMatrix from './PointsMatrix.js';
import patterns from './patterns.js';
import ForceField from './ForceField.js';

class TilesFlow {

    constructor(space, forceField, visualSettings){
        this._space = space;
        this._forceField = new ForceField(forceField, space.size.x, space.size.y);
        this._visualSettings = visualSettings;
    }

    render(offsetX){

        var visualSettings = Object.assign({}, {
            step: 100,
            stroke: undefined,
            fill: undefined,
            pattern: undefined,
            baseColor: [0,0,0,0],
            colorInterpolationMode: "addition",
            showForces: false,
            pattern: patterns.cloth,
            padding: [0,0,0,0],
            pointsColor: [0,0,0,0]
        }, this._visualSettings)

        var form = new Form(this._space);
        var pointsMatrix = new PointsMatrix(
            this._space.size.x,
            this._space.size.y,
            visualSettings.step,
            visualSettings.baseColor,
            visualSettings.colorInterpolationMode,
            this._forceField,
            offsetX);
        var points = pointsMatrix.getFlattenedMatrix();
        var triangles = pointsMatrix.getTiles(visualSettings.pattern, visualSettings.padding);

        var forces = pointsMatrix._forces;

        for(let triangle of triangles){
            if(triangle.color){
                var color = triangle.color;
                var fillColor = this.getFillWithSettings(color, visualSettings);
                form.fill( new Color(fillColor[0], fillColor[1], fillColor[2], fillColor[3]/255, 'rgba').rgba() );
                var strokeColor = this.getStrokeWithSettings(color, visualSettings);
                form.stroke( new Color(strokeColor[0], strokeColor[1], strokeColor[2], strokeColor[3]/255, 'rgba').rgba() );
            }
            form.triangle(triangle.concept);
        }

        var pointsColor = visualSettings.pointsColor;
        form.fill(new Color(pointsColor[0], pointsColor[1], pointsColor[2], pointsColor[3]/255, 'rgba').rgba());
        form.stroke(new Color(pointsColor[0], pointsColor[1], pointsColor[2], pointsColor[3]/255, 'rgba').rgba());
        form.points( points.map(point => point.concept) );

        if(visualSettings.showForces){
            for(let i in forces){
              var p = new Point(forces[i]._x, forces[i]._y);
              form.stroke("red");
              form.fill("red");
              form.point(p);
            }            
        }

    }

    getFillWithSettings(color, visualSettings){
        if(!visualSettings.fill) return color;
        else return visualSettings.fill;
    }

    getStrokeWithSettings(color, visualSettings){
        if(!visualSettings.stroke) return color;
        else return visualSettings.stroke;
    }
}

exports.patterns = patterns;
export default TilesFlow;