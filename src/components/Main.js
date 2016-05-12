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
        x: 20,
        y: 20,
        decay: "linear",
        intensity: 80,
        influencePosition: true,
        invert: true,
        color: [255, 150, 0, 255]
      },
      {   
        x: 30,
        y: 30,
        decay: "clipping_power",
        intensity: 100,
        color: [0, 110, 0, 255],
        influencePosition: true,
        influenceColor: true,
        axis: "y"
      },
      {   
        x: 20,
        y: 11,
        decay: "cosine",
        intensity: 50,
        color: [255, 110, 255, 255],
        influenceColor: true
      },
      // {   
      //   x: 85,
      //   y: 111,
      //   decay: "cosine",
      //   intensity: 50,
      //   color: [5, 0, 0, 255]
      // },
      // {   
      //   x: 70,
      //   y: 35,
      //   decay: "cosine",
      //   intensity: 50,
      //   color: [255, 110, 255, 255]
      // },
      // {   
      //   x: 30,
      //   y: 80,
      //   decay: "cosine",
      //   intensity: 100,
      //   color: [55, 200, 110, 255]
      // },
      // {   
      //   x: 50,
      //   y: 75,
      //   decay: "cosine",
      //   intensity: 70,
      //   color: [55, 200, 110, 255]
      // },
      // {   
      //   x: 80,
      //   y: 90,
      //   decay: "cosine",
      //   intensity: 120,
      //   color: [55, 200, 110, 255]
      // }
    ];

    var visualSettings = {
      step: 50,
      baseColor: [0,0,0,0],
      colorInterpolationMode:"addition",
      padding: [0,0,2,0],
      pattern:cloth,
      stroke: [0,0,0,255]
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
