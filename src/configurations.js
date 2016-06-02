import TilesFlow from 'tilesflow';
var configurations = configurations = {
    theGrid: {
        forces: [

        ],
        visualConfig: {
            step: 70,
            baseColor: [0,0,0,0],
            padding: [0,0,1,0],
            stroke: [100,100,100,100]
        }
    },
    forces: {
        forces: [
            {
             x: 30,
             y: 45,
             decay: "linear",
             intensity: 100,
             influencePosition: true,
             color: [100, 50, 50, 255]
           }
        ],
        visualConfig: {
            stroke: [0,255,0,255],
            pattern: TilesFlow.PATTERNS.brokenGlass,
            padding: [0,0,1,0],
        }
    },
    colors: {
        visualConfig: {
             color: [255, 150, 0, 255],
             pattern: TilesFlow.PATTERNS.brokenGlass,
             padding: [0,0,1,0],
           },
       forces: [
            {
             x: 30,
             y: 45,
             decay: "linear",
             intensity: 100,
             influencePosition: true,
             influenceColor: true,
             color: [100, 50, 50, 255]
           },
            {
             x: 80,
             y: 80,
             decay: "linear",
             intensity: 100,
             influenceColor: true,
             color: [200, 0, 255, 255]
           }
       ]
    }
};

export default configurations;