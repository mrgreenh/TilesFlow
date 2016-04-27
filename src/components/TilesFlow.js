import {Form, Point} from 'ptjs';
import PointsMatrix from './PointsMatrix.js'

class TilesFlow {
    static render(space, forceField, visualSettings, offsetX){

        visualSettings = Object.assign({}, {
            step: 100,
            stroke: undefined,
            fill: undefined,
            pattern: undefined
        }, visualSettings)

        var form = new Form(space);
        var pointsMatrix = new PointsMatrix(space.size.x, space.size.y, visualSettings.step, forceField, offsetX);
        var points = pointsMatrix.getFlattenedMatrix();
        var triangles = pointsMatrix.getTriangles();

        // var forces = pointsMatrix._forces;

        form.points( points );

        for(let triangle of triangles){
            if(triangle.color){
                var color = "rgb("+[parseInt(triangle.color.x), parseInt(triangle.color.y), parseInt(triangle.color.z)].join(",")+")";
                form.fill( this.getFillWithSettings(color, visualSettings) );
                form.stroke( this.getStrokeWithSettings(color, visualSettings) );
            }
            form.triangle(triangle.concept);
        }

        // for(let i in forces){
        //   var form = new Form(space);
        //   var p = new Point(forces[i]._x, forces[i]._y);
        //   form.stroke("red");
        //   form.fill("red");
        //   form.point(p);
        // }

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