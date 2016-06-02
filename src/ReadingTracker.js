import configurations from './configurations.js';

class ReadingTracker {

    constructor(configurations){
        this._text = document.querySelector("#projectDescription");

        this.selectedConfName = undefined;
        this._scrollToConf("theGrid");
        this._bindScrollEvents();
    }

    _scrollToConf(name){
        if(configurations[name]){
            this.forceField = configurations[name].forces;
            this.visualSettings = configurations[name].visualConfig;
            this.selectedConfName = name;
        }
    }

    _bindScrollEvents(){
        window.addEventListener("scroll", (e) => {
            var paragraphs = document.querySelectorAll("#projectDescription p");
            for(let i = paragraphs.length-1; i>=0; i--){
                var p = paragraphs.item(i);
                var boundingBox = p.getBoundingClientRect();
                if( boundingBox.top < 500 ){
                    var scrollCallbackName = p.getAttribute("data-scrollToConf");
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