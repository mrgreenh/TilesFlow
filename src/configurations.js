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
    },
    forces_colors: {
        forces:[
            {
                 x: 50,
                 y: 40,
                 decay: "linear",
                 intensity: 100,
                 influencePosition: true,
                 influenceColor: true,
                 color: [250, 0, 100, 250]
           }
       ],
        visualConfig: {
                stroke: [255,255,255,255],
                pointsColor: [0,0,0,255],
                baseColor: [50,100,50,50],
                showForces: true,
                padding: [0,0,1,0]
        }
    },
    more_on_colors: {
        forces:[
            {
                 x: 50,
                 y: 40,
                 decay: "linear",
                 intensity: 100,
                 influencePosition: true,
                 influenceColor: true,
                 color: [150, 0, 200, 0]
           },
           {
                 x: 20,
                 y: 60,
                 decay: "cosine",
                 intensity: 150,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
          {
                 x: 80,
                 y: -20,
                 decay: "sine",
                 intensity: 150,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
         {
                 x: 60,
                 y: 60,
                 decay: "clipping_power",
                 intensity: 200,
                 influenceColor: true,
                 color: [0, 200, 200, 0]
           }

       ],
        visualConfig: {
                stroke: [255,255,255,0],
                baseColor: [255,255,255,255],
                padding: [0,0,1,0],
                colorInterpolationMode: "subtraction"
        }
    },
    patterns: {
        forces:[
            {
                 x: 50,
                 y: 40,
                 decay: "linear",
                 intensity: 100,
                 influencePosition: true,
                 influenceColor: true,
                 color: [150, 0, 200, 0]
           },
           {
                 x: 35,
                 y: 60,
                 decay: "cosine",
                 intensity: 80,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
          {
                 x: 80,
                 y: -20,
                 decay: "sine",
                 intensity: 90,
                 influenceColor: true,
                 color: [100, 100, 50, 0]
           },
         {
                 x: 60,
                 y: 60,
                 decay: "clipping_power",
                 intensity: 100,
                 influenceColor: true,
                 color: [0, 200, 200, 0]
           },

            {
                 x: 55,
                 y: 90,
                 intensity: 100,
                 influencePosition: true
           },

           {
                 x: 30,
                 y: 90,
                 intensity: 100,
                 influencePosition: true
           }

       ],
        visualConfig: {
                baseColor: [255,255,255,255],
                stroke: [50,50,50,50],
                padding: [0,0,2,0],
                colorInterpolationMode: "subtraction",
                pattern: TilesFlow.PATTERNS.brokenGlass
        }
    }
};

export default configurations;