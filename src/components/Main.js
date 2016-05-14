require('normalize.css');
require('styles/App.css');

import React from 'react';
import {CanvasSpace, Form, Point} from 'ptjs';
import TilesFlow from './TilesFlow.js'
import Force from './Force.js'
import {brokenGlass, cloth} from './patterns.js'
import ForceField from './ForceField.js';

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
            decay: "cosine",
            intensity: 100,
            influencePosition: true,
            invert: true,
            color: [255, 150, 0, 255]
          },
          {   
            x: 60,
            y: 40,
            decay: "cosine",
            intensity: 100,
            influencePosition: true,
            invert: false,
            color: [255, 150, 0, 255]
          },

          {   
            x: 70,
            y: 65,
            decay: "cosine",
            intensity: 200,
            influencePosition: true,
            invert: false,
            axis:"y",
            color: [255, 150, 0, 255]
          },

          {   
            x: 35,
            y: 35,
            decay: "clipping_power",
            intensity: 130,
            color: [0, 110, 0, 255],
            influencePosition: true,
            influenceColor: true,
            axis: "y"
          },
          {   
            x: 20,
            y: 11,
            decay: "cosine",
            intensity: 100,
            color: [255, 110, 255, 255],
            influenceColor: true
          },
          {   
            x: 50,
            y: 71,
            decay: "linear",
            intensity: 200,
            color: [0, 200, 255, 255],
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
      step: 70,
      baseColor: [0,0,0,0],
      colorInterpolationMode:"addition",
      padding: [0,0,2,0],
      pattern:brokenGlass,
      stroke: [100,100,100,100]
    };

    var flow = new TilesFlow(space, forceField, visualSettings);

    var bot = {
        animate: function( time, fs, context ) {
            var offsetX = time/20;
            flow.render(offsetX);
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
