import {Point, Vector} from "ptjs"

class ColorfulPoint {
    constructor(x, y, color){
        this._x = x;
        this._y = y;
        this.color = color;
        this.concept = new Point(x, y);
    }
}

export default ColorfulPoint;