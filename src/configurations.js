var configurations = configurations = {
    theGrid: {
        forces: [
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
          }
        ],
        visualConfig: {
            step: 70,
            baseColor: [0,0,0,0],
            colorInterpolationMode:"addition",
            padding: [0,0,2,0],
            stroke: [100,100,100,100]
        }
    }
};

export default configurations;