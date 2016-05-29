import TilesFlow from 'tilesflow';
import {CanvasSpace, Form, Point} from 'ptjs';
import ReadingTracker from './ReadingTracker.js';

var wwidth = window.innerWidth;
var readingTracker = new ReadingTracker();

var canvasElems = document.querySelectorAll(".canvasElem");

for (var ce of canvasElems){
  ce.width = wwidth;
  ce.height = 350;
}

var canvasElems = Array.apply(null, canvasElems);
var space1 = new CanvasSpace('canvasElem', '#fff').display("#pt");
var space2 = new CanvasSpace('canvasElem2', '#fff').display("#pt2");
var spaces = [space1, space2];


for(var sp of spaces){
  sp.size.x = canvasElems[0].width;
  sp.size.y = canvasElems[0].height;
}

var space = spaces.shift();
spaces.push(space);
var canvasElem = canvasElems.shift();
canvasElems.push(canvasElem);

console.log(TilesFlow)
console.log(TilesFlow.PATTERNS)
var a = TilesFlow;
var flows = [new TilesFlow(space, readingTracker.forceField, readingTracker.visualSettings)];
var maxSpeedInverse = 20;
var speedInverse = 20;
var transitionProgress = 0;
var transitionLength = 100;
var previousConfName = readingTracker.selectedConfName;
var transitioningToConf = null;

function paint(timestamp){
  for(var i in flows){
    var currentFlow = flows[i];
    currentFlow._space.space.getContext("2d").clearRect(0,0,currentFlow._space.size.x,500)
    var offsetX = timestamp/speedInverse;
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
      speedInverse = Math.max(15, Math.abs(maxSpeedInverse - maxSpeedInverse * (progress * 2)));
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