import TilesFlow from 'tilesflow';
import {CanvasSpace, Form, Point} from 'ptjs';
import ReadingTracker from './ReadingTracker.js';

var wwidth = window.innerWidth;
var readingTracker = new ReadingTracker();

var space1 = new CanvasSpace('canvasElem', '#fff').display("#pt");
var space2 = new CanvasSpace('canvasElem2', '#fff').display("#pt2", doIt);
var spaces = [space1, space2];


var space = spaces.shift();
spaces.push(space);
function doIt(){
  var canvasElems = document.querySelectorAll(".pt canvas");
  canvasElems = Array.apply(null, canvasElems);
  var a = TilesFlow;
  var flows = [new TilesFlow(space, readingTracker.forceField, readingTracker.visualSettings)];

  var canvasElem = canvasElems.shift();
  canvasElems.push(canvasElem);

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
    for(var i in flows){
      var currentFlow = flows[i];
      currentFlow._space.space.getContext("2d").clearRect(0,0,currentFlow._space.size.x,500)
      var offsetX = (timestamp + speedOffset)/speedInverse;
      currentFlow.render(offsetX);
    }

    //Transition handling
    if(previousConfName != readingTracker.selectedConfName || transitionProgress){
      if(!transitioningToConf){
        transitioningToConf = readingTracker.selectedConfName;
        var space = spaces.shift();
        var targetForceField = Array.apply(null, readingTracker.forceField);
        var targetVisualSettings = Object.assign({}, readingTracker.visualSettings)
        flows.push(new TilesFlow(space, targetForceField, targetVisualSettings))
        spaces.push(space);
      }

      if(transitionProgress < transitionLength){
        var progress = transitionProgress/transitionLength;
        var inverseProgress = 1 - progress;
        canvasElems[1].style.opacity = inverseProgress;
        canvasElems[0].style.opacity = progress;
        speedOffset += maxSpeedOffset - Math.abs(maxSpeedOffset - maxSpeedOffset * (progress * 2));
        transitionProgress ++;
      }else{
        transitionProgress = 0;
        previousConfName = transitioningToConf;
        transitioningToConf = null;
        flows.shift();
        var invisibleCanvas = canvasElems.shift();
        canvasElems.push(invisibleCanvas);
      }
    }

    window.requestAnimationFrame(paint);
  }

  paint();
}