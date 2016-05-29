import ColorfulTriangle from './ColorfulTriangle.js'
import Force from './Force.js'
import ColorfulPoint from './ColorfulPoint.js'
import {Vector} from 'ptjs'

class PointsMatrix {
    constructor(width,
                height,
                step,
                baseColor,
                colorInterpolationMode,
                forceField,
                offsetX){
        this._matrix = this.generateMatrix( width,
                                            height,
                                            step,
                                            colorInterpolationMode,
                                            forceField,
                                            offsetX);
        this._colorInterpolationMode = colorInterpolationMode;
        this._baseColor = baseColor;
    }

    generateMatrix(width, height, step, colorInterpolationMode, forceField, offsetX){
        var forces = forceField.getForces();
        this._forces = forces;
        var matrix = [];
        for(let x=0; x<=Math.ceil((width+(4*step))/step); x++){
            var column = [];
            for(let y=0; y<=Math.ceil(height/step); y++){
                var xCoord = x*step + (offsetX%step*2 - step*2);
                var yCoord = y*step + (x%2)*step/2;
                var {newX, newY, colorSum} = this._applyForcesToPoint(
                    xCoord,
                    yCoord,
                    forces,
                    colorInterpolationMode);
                column.push(new ColorfulPoint(newX, newY, colorSum));
            }
            matrix.push(column);
        }
        return matrix;
    }

    _applyForcesToPoint(x, y, forces, colorInterpolationMode){
        var vectorsXSum = 0;
        var vectorsYSum = 0;
        var colorSum = [0, 0, 0, 0];
        for(var i in forces){
            var {forceX, forceY, color} = forces[i].getForceAtPoint(x, y);
            if(forces[i].influencePosition){
                vectorsXSum += forces[i].axis == "y" ? 0 : forceX;
                vectorsYSum += forces[i].axis == "x" ? 0 : forceY;                
            }
            
            if(forces[i].influenceColor){
                var colorInterpolationFunction;
                switch(colorInterpolationMode){
                    case "subtraction":
                        colorInterpolationFunction = (currentCoord, i) => currentCoord - color[i];
                        break;                    
                    default:
                        colorInterpolationFunction = (currentCoord, i) => currentCoord + color[i];
                        break;
                }
                colorSum = colorSum.map(colorInterpolationFunction);
            }
        }

        var newX = x + vectorsXSum;
        var newY = y + vectorsYSum;
        return {newX, newY, colorSum};
    }

    getMatrix(){
        return this._matrix;
    }

    getFlattenedMatrix(){
        var result = [];
        for(let i in this._matrix){
            result = result.concat(this._matrix[i]);
        }
        return result;
    }

    getTriangle(anchor, pointA, pointB){
        var anchorPoint = this._matrix[anchor[0]] ? this._matrix[anchor[0]][anchor[1]] : undefined;
        var nextColPoint = this._matrix[pointA[0]] ? this._matrix[pointA[0]][pointA[1]] : undefined;
        var nextRowPoint = this._matrix[pointB[0]] ? this._matrix[pointB[0]][pointB[1]] : undefined;
        
        if(!anchorPoint || !nextColPoint || !nextRowPoint) return;
        else return new ColorfulTriangle(anchorPoint,
                                         nextColPoint,
                                         nextRowPoint,
                                         this._colorInterpolationMode,
                                         this._baseColor);
    }

    getTiles(pattern, padding){
        var tiles = [];
        for(let col=padding[3]; col < this._matrix.length-1-padding[1]; col ++){
            let even = !(col%2);
            for(let row=padding[0]; row < this._matrix[col].length-1-padding[2]; row ++){
                if(!even){
                    for(var t in pattern){
                        var points = pattern[t];
                        if(points.length == 3){
                            var result = this.getTriangle(
                                [col+points[0][0], row+points[0][1]],
                                [col+points[1][0], row+points[1][1]],
                                [col+points[2][0], row+points[2][1]]);
                            if(result)
                                tiles.push(result);
                        }
                    }
                }
            }
        }
        return tiles;
    }

}

export default PointsMatrix;