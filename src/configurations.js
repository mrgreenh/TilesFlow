import TilesFlow from 'tilesflow';
var configurations = {
    points: {
        forces: [

        ],
        visualConfig: {
            pointsColor: [0,0,0,255]
        }
    },
    step: {
        forces: [

        ],
        visualConfig: {
            step: 50,
            pointsColor: [0,0,0,255]
        }
    },
    triangles: {
        forces: [

        ],
        visualConfig: {
            stroke: [0,0,0,100],
            pointsColor: [0,255,0,255]
        }
    },
    colors: {
        forces: [],
        visualConfig: {
            stroke: [100,0,100,255],
            pointsColor: [200,0,200,255],
            baseColor: [250,250,0,100]
        }
    },
    forces: {
        forces: [
            {
             x: 50,
             y: 40,
             decay: "linear",
             intensity: 100,
             influencePosition: true
           }
        ],
        visualConfig: {
            stroke: [100,0,100,255],
            pointsColor: [0,0,0,255],
            baseColor: [250,250,0,100],
            showForces: true,
            padding: [0,0,1,0]
        }
    },
    padding: {
        forces: [
            {
             x: 50,
             y: 40,
             decay: "linear",
             intensity: 100,
             influencePosition: true
           }
        ],
        visualConfig: {
            stroke: [100,0,100,255],
            baseColor: [250,250,0,100],
            padding: [0,0,1,0]
        }
    }
};

export default configurations;