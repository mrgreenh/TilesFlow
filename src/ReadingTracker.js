import configurations from './configurations.js';

class ReadingTracker {

    constructor(configurations){
        this._text = document.querySelector("#projectDescription");

        this._scrollToConf("theGrid");
        this._bindScrollEvents();
    }

    _scrollToConf(name){
        if(configurations[name]){
            this.forceField = configurations[name].forces;
            this.visualSettings = configurations[name].visualConfig;
        }
    }

    _bindScrollEvents(){
        window.addEventListener("scroll", (e) => {
            var paragraphs = document.querySelectorAll("#projectDescription p");
            for(let i = 0; i<paragraphs.length; i++){
                var p = paragraphs.item(i);
                var boundingBox = p.getBoundingClientRect();
                if( Math.abs(boundingBox.top - window.innerHeight/2) < 50 ){
                    var scrollCallbackName = p.getAttribute("data-scrollCallback");
                    console.log(scrollCallbackName)
                    if(scrollCallbackName && configurations[scrollCallbackName]){
                        this._scrollToConf(scrollCallbackName);
                        break;
                    }
                }
            }
        });
    }
}

export default ReadingTracker;