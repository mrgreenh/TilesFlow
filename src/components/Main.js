require('normalize.css');
require('styles/App.css');

import React from 'react';
import {CanvasSpace, Form, Point} from 'ptjs';
import TilesFlow from './TilesFlow.js'
import Force from './Force.js'

class AppComponent extends React.Component {
  componentDidMount(){
    var space = new CanvasSpace('canvasElem', '#f1f1f1').display();

    var canvasElem = document.querySelector("#pt canvas");
    var canvasWidth = canvasElem.width;
    var canvasHeight = canvasElem.height;

    var step = 20;

    var forceField = [
      {   
        x: 50,
        y: 30,
        decay: "linear",
        intensity: 50,
        color: [255,200,255]
      },
      {   
        x: 20,
        y: 30,
        decay: "linear",
        intensity: 50,
        color: [255,250,200]
      },
      {   
        x: 70,
        y: 30,
        decay: "linear",
        intensity: 50,
        color: [255,250,200]
      },
      {   
        x: 20,
        y: 70,
        decay: "linear",
        intensity: 50,
        color: [200,250,200]
      }
    ];

    var visualSettings = {
        stroke: "#999"
    };

    var bot = {
        animate: function( time, fs, context ) {
            var offsetX = parseInt(time/100);
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
