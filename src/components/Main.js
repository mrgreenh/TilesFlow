require('normalize.css');
require('styles/App.css');

import React from 'react';
import {CanvasSpace, Form, Point} from 'ptjs';
import TilesFlow from './TilesFlow.js'
import Force from './Force.js'
import {cloth} from './patterns.js'

class AppComponent extends React.Component {
  componentDidMount(){
    var space = new CanvasSpace('canvasElem', '#fff').display();

    var canvasElem = document.querySelector("#pt canvas");
    var canvasWidth = canvasElem.width;
    var canvasHeight = canvasElem.height;

    var forceField = [
      {   
        x: 50,
        y: 30,
        decay: "linear",
        intensity: 50,
        color: [255, 0, 255, 255]
      },
      {   
        x: 50,
        y: 10,
        decay: "linear",
        intensity: 80,
        color: [255, 255, 255, 255]
      },
      {   
        x: 20,
        y: 10,
        decay: "linear",
        intensity: 80,
        color: [255, 255, 0, 255]
      },
      {   
        x: 85,
        y: 110,
        decay: "linear",
        intensity: 80,
        color: [0, 50, 200, 255]
      },
      {   
        x: 70,
        y: 35,
        decay: "linear",
        intensity: 80,
        color: [150, 0, 255, 255]
      },
      {   
        x: 30,
        y: 55,
        decay: "linear",
        intensity: 50,
        color: [100, 200, 255, 255]
      },
      // {   
      //   x: 20,
      //   y: 110,
      //   decay: "linear",
      //   intensity: 100,
      //   color: [255,255,255,255]
      // },
      // {   
      //   x: 30,
      //   y: 110,
      //   decay: "linear",
      //   intensity: 100,
      //   color: [255,0,0,255]
      // }
    ];

    var visualSettings = {
      step: 100,
      baseColor: [0,0,0,0],
      colorInterpolationMode:"addition",
      stroke: [255,255,255,100]
    };

    var bot = {
        animate: function( time, fs, context ) {
            var offsetX = time/50;
            TilesFlow.render(space, forceField, visualSettings, offsetX);
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
