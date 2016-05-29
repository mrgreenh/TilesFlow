import {patterns} from 'tilesflow';

var configurations = configurations = {
    theGrid: {
        forces: [

        ],
        visualConfig: {
            step: 70,
            baseColor: [0,0,0,0],
            colorInterpolationMode:"addition",
            padding: [0,0,2,0],
            stroke: [100,100,100,100]
        }
    },
    forces: {
        forces: [
            {
             x: 20,
             y: 20,
             decay: "cosine",
             intensity: 60,
             influencePosition: true,
             invert: true,
             color: [255, 150, 0, 255]
           }
        ],
        visualConfig: {
            stroke: [0,255,0,255],
//            pattern: patterns.brokenGlass
        }
    },
    colors: {
        visualConfig: {
             x: 20,
             y: 20,
             decay: "cosine",
             stroke: [0,0,0,0],
             intensity: 60,
             influencePosition: true,
             invert: true,
             color: [255, 150, 0, 255],
 //            pattern: patterns.brokenGlass
           },
       forces: [
            {
             x: 20,
             y: 20,
             decay: "cosine",
             intensity: 60,
             influencePosition: true,
             influenceColor: true,
             invert: true,
             color: [100, 150, 0, 255]
           }
       ]
    }
};

export default configurations;