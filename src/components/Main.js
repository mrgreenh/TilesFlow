require('normalize.css');
require('styles/App.css');

import React from 'react';
import {CanvasSpace, Form, Point} from 'ptjs';
import TilesFlow from './TilesFlow.js'

class AppComponent extends React.Component {
  componentDidMount(){
    var space = new CanvasSpace('canvasElem', '#f1f1f1').display();

    var canvasElem = document.querySelector("#pt canvas");
    var canvasWidth = canvasElem.width;
    var canvasHeight = canvasElem.height;

    var step = 100;

    var forceField = [
      {
        x: -20,
        y: -20,
        decay: "linear",
        intensity: 70,
        color: [255,255,200]
      },
      {
        x: 0,
        y: 20,
        decay: "linear",
        intensity: 70,
        color: [150,150,150]
      },
      {
        x: 50,
        y: -10,
        decay: "linear",
        intensity: 70,
        color: [255,255,200]
      },
      {
        x: -10,
        y: 110,
        decay: "linear",
        intensity: 70,
        color: [255,255,200]
      },
      {
        x: 40,
        y: 110,
        decay: "linear",
        intensity: 70,
        color: [255,255,200]
      },
      {
        x: 40,
        y: 20,
        decay: "linear",
        intensity: 70,
        color: [200,255,200]
      },
      {
        x: 60,
        y: 30,
        decay: "linear",
        intensity: 70,
        color: [255,200,200]
      },
      {   
        x: 40,
        y: 80,
        decay: "linear",
        intensity: 70,
        color: [200,200,255]
      },
      {   
        x: 20,
        y: 40,
        decay: "linear",
        intensity: 70,
        color: [200,200,255]
      },
      {   
        x: 15,
        y: 80,
        decay: "linear",
        intensity: 70,
        color: [200,255,255]
      },
      {   
        x: 50,
        y: 70,
        decay: "linear",
        intensity: 70,
        color: [255,200,255]
      }
    ];

    var visualSettings = {

    };

    var bot = {
        animate: function( time, fs, context ) {
            var offsetX = parseInt(time/10);
            TilesFlow.render(space, step, forceField, visualSettings, offsetX);
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
