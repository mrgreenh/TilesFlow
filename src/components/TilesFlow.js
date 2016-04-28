import {Form, Point, Color} from 'ptjs';
import PointsMatrix from './PointsMatrix.js'

class TilesFlow {
    static render(space, forceField, visualSettings, offsetX){

        visualSettings = Object.assign({}, {
            step: 100,
            stroke: undefined,
            fill: undefined,
            pattern: undefined,
            baseColor: [0,0,0,0],
            colorInterpolationMode: "addition",
            showForces: false
        }, visualSettings)

        var form = new Form(space);
        var pointsMatrix = new PointsMatrix(
            space.size.x,
            space.size.y,
            visualSettings.step,
            visualSettings.baseColor,
            visualSettings.colorInterpolationMode,
            forceField,
            offsetX);
        var points = pointsMatrix.getFlattenedMatrix();
        var triangles = pointsMatrix.getTriangles();

        var forces = pointsMatrix._forces;

        form.points( points );

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

        if(visualSettings.showForces){
            for(let i in forces){
              var p = new Point(forces[i]._x, forces[i]._y);
              form.stroke("red");
              form.fill("red");
              form.point(p);
            }            
        }

    }

    static getFillWithSettings(color, visualSettings){
        if(!visualSettings.fill) return color;
        else return visualSettings.fill;
    }

    static getStrokeWithSettings(color, visualSettings){
        if(!visualSettings.stroke) return color;
        else return visualSettings.stroke;
    }
}

export default TilesFlow;