require('normalize.css');
require('styles/App.css');

import React from 'react';
import {CanvasSpace, Form, Point} from 'ptjs';
import Signal from 'signaljs';
import PointsMatrix from './PointsMatrix.js'

class AppComponent extends React.Component {
  componentDidMount(){
    var space = new CanvasSpace('canvasElem', '#f1f1f1').display();

    var canvasElem = document.querySelector("#pt canvas");
    var canvasWidth = canvasElem.width;
    var canvasHeight = canvasElem.height;

    var step = 120;

    var forceField = [
      {
        x: -20,
        y: -20,
        direction: "outer",
        intensity: 100,
        color: [255,255,200]
      },
      {
        x: 0,
        y: 0,
        direction: "outer",
        intensity: 80,
        color: [150,150,150]
      },
      {
        x: 50,
        y: -10,
        direction: "outer",
        intensity: 40,
        color: [255,255,200]
      },
      {
        x: -10,
        y: 110,
        direction: "outer",
        intensity: 100,
        color: [255,255,200]
      },
      {
        x: 40,
        y: 110,
        direction: "outer",
        intensity: 80,
        color: [255,255,200]
      },
      {
        x: 60,
        y: 30,
        direction: "outer",
        intensity: 50,
        color: [255,200,200]
      },
      {   
        x: 40,
        y: 80,
        direction: "outer",
        intensity: 40,
        color: [200,200,255]
      },
      {   
        x: 20,
        y: 40,
        direction: "outer",
        intensity: 50,
        color: [200,200,255]
      },
      {   
        x: 85,
        y: 80,
        direction: "outer",
        intensity: 50,
        color: [200,255,255]
      },
      {   
        x: 90,
        y: 30,
        direction: "outer",
        intensity: 50,
        color: [255,200,255]
      }
    ];

    var form = new Form(space);

    var dot = new Point( 250, 250 );

    var colors = ["#ff9999","#99ff99", "#9999ff"];

    var bot = {
        animate: function( time, fs, context ) {
            var offsetX = parseInt(time/100);
            var pointsMatrix = new PointsMatrix(canvasWidth, canvasHeight, step, forceField, offsetX);
            var points = pointsMatrix.getFlattenedMatrix();
            var triangles = pointsMatrix.getTriangles();
            form.points( points );
            for(let triangle of triangles){
              if(triangle.color){
                var color = "rgb("+[parseInt(triangle.color.x), parseInt(triangle.color.y), parseInt(triangle.color.z)].join(",")+")";
                form.fill( color );
                form.stroke( color );
              }
              form.triangle(triangle.concept);
            }
            form.fill( "#000" ).stroke(false);
            form.text( new Point( 20, 20 ), "frame rate is "+(1000/fs) ); // draw frame rate as text
        }
    };

    space.add( bot ); // adding the bot object into space
    space.play();
  }

  render() {
    return (
      <div id="pt">
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
