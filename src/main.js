import TilesFlow from './TilesFlow.js';
import {CanvasSpace, Form, Point} from 'ptjs';
import ReadingTracker from './ReadingTracker.js';

var wwidth = window.innerWidth;
var readingTracker = new ReadingTracker();

var canvasElem = document.querySelector("#canvasElem");
canvasElem.width = wwidth;
canvasElem.height = 300;
var space = new CanvasSpace('canvasElem', '#fff').display("#pt");

space.size.x = canvasElem.width;
space.size.y = canvasElem.height;

var flow = new TilesFlow(space, readingTracker.forceField, readingTracker.visualSettings);

function paint(timestamp){
    space.space.getContext("2d").clearRect(0,0,space.size.x,500)
    var offsetX = timestamp/20;
    flow.render(offsetX);
    window.requestAnimationFrame(paint);
}

paint();