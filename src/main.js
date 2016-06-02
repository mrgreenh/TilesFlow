import TilesFlow from 'tilesflow';
import ReadingTracker from './ReadingTracker.js';

var wwidth = window.innerWidth;
var readingTracker = new ReadingTracker();

var space1 = "#pt";
var space2 = "#pt2";
var spaces = [space1, space2];


var space = spaces.shift();
spaces.push(space);
function doIt(){
  var a = TilesFlow;
  var flows = [new TilesFlow(space, readingTracker.forceField, readingTracker.visualSettings)];

  console.log(TilesFlow)
  console.log(TilesFlow.PATTERNS)
  var maxSpeedOffset = 100;
  var speedOffset = 0;
  var speedInverse = 20;
  var transitionProgress = 0;
  var transitionLength = 100;
  var previousConfName = readingTracker.selectedConfName;
  var transitioningToConf = null;

  function paint(timestamp){
    var offsetX = (timestamp + speedOffset)/speedInverse;
    for(var i in flows){
      var currentFlow = flows[i];
      currentFlow._space.space.getContext("2d").clearRect(0,0,currentFlow._space.size.x,500)
      currentFlow.render(offsetX);
    }

    //Transition handling
    if(previousConfName != readingTracker.selectedConfName || transitionProgress){
      //If we are not transitioning, we start one
      if(!transitioningToConf){
        transitioningToConf = readingTracker.selectedConfName;
        var space = spaces.shift();
        var targetForceField = Array.apply(null, readingTracker.forceField);
        var targetVisualSettings = Object.assign({}, readingTracker.visualSettings)
        flows.push(new TilesFlow(space, targetForceField, targetVisualSettings))
        spaces.push(space);
      }

      //If we are transitioning, we keep going
      if(transitionProgress < transitionLength){
        var progress = transitionProgress/transitionLength;
        var inverseProgress = 1 - progress;
        flows[0].getCanvas().style.opacity = inverseProgress;
        flows[1].getCanvas().style.opacity = progress;
        speedOffset += maxSpeedOffset - Math.abs(maxSpeedOffset - maxSpeedOffset * (progress * 2));
        transitionProgress ++;
      }else{ //If transition is over, we clean up
        transitionProgress = 0;
        previousConfName = transitioningToConf;
        transitioningToConf = null;
        flows.shift();
      }
    }

    window.requestAnimationFrame(paint);
  }

  paint();
}

setTimeout(doIt, 0);