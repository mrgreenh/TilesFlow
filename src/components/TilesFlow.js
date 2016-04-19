import {Form, Point} from 'ptjs';
import PointsMatrix from './PointsMatrix.js'

class TilesFlow {
    static render(space, step, forceField, visualSettings, offsetX){
        var form = new Form(space);
        console.log("x"+space.size.x)
        console.log("y"+space.size.y)
        var pointsMatrix = new PointsMatrix(space.size.x, space.size.y, step, forceField, offsetX);
        var points = pointsMatrix.getFlattenedMatrix();
        var triangles = pointsMatrix.getTriangles();

        form.points( points );

        for(let triangle of triangles){
            if(triangle.color){
                var color = "rgb("+[parseInt(triangle.color.x), parseInt(triangle.color.y), parseInt(triangle.color.z)].join(",")+")";
                form.fill( color );
                form.stroke( "black" );
            }
            form.triangle(triangle.concept);
        }
    }
}

export default TilesFlow;