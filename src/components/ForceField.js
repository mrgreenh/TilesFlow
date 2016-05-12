import Force from './Force.js';

class ForceField{
    constructor(forces, width, height){
        this._forces = forces.map(force => new Force(
            width/100*force.x,
            height/100*force.y,
            force.direction,
            force.intensity,
            force.color,
            width,
            height,
            force.decay,
            force.invert,
            force.influenceColor,
            force.influencePosition,
            force.axis));
    }

    getForces(){
        return this._forces;
    }
}

export default ForceField;