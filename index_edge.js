/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'main',
                type: 'image',
                rect: ['-29px', '-4px','254px','203px','auto', 'auto'],
                clip: ['rect(0px 227px 203px 7.299802780151367px)'],
                fill: ["rgba(0,0,0,0)",im+"main.png",'0px','0px'],
                transform: [[],[],[],['0.82194','0.82194']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['105px', '69px','200px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['115px', '60px','183px','60px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            },
            {
                id: 't',
                type: 'image',
                rect: ['100px', '131px','200px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px']
            },
            {
                id: 'l',
                type: 'image',
                rect: ['54px', '2px','193px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','298px','178px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [1,"rgba(4,22,200,1.00)","solid"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_l}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '42px'],
                ["style", "opacity", '0'],
                ["style", "left", '54px'],
                ["style", "width", '193px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["color", "border-color", 'rgba(4,22,200,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '178px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '1px'],
                ["style", "width", '298px']
            ],
            "${_main}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.82194'],
                ["transform", "scaleX", '0.82194'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,227,203,7.299802780151367], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-29px']
            ],
            "${__3}": [
                ["style", "top", '60px'],
                ["style", "height", '60px'],
                ["style", "opacity", '0'],
                ["style", "left", '115px'],
                ["style", "width", '183px']
            ],
            "${_t}": [
                ["style", "top", '131px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0'],
                ["style", "left", '100px'],
                ["style", "width", '200px']
            ],
            "${__2}": [
                ["style", "top", '69px'],
                ["style", "height", '80px'],
                ["style", "opacity", '0'],
                ["style", "left", '105px'],
                ["style", "width", '200px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid10", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 4105, duration: 500 },
                { id: "eid6", tween: [ "transform", "${_l}", "scaleY", '1', { fromValue: '0'}], position: 210, duration: 290 },
                { id: "eid7", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 295 },
                { id: "eid22", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 3705, duration: 500 },
                { id: "eid11", tween: [ "style", "${_main}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid4", tween: [ "transform", "${_l}", "scaleX", '1', { fromValue: '0'}], position: 210, duration: 290 },
                { id: "eid8", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500 },
                { id: "eid13", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 3705, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-21517434");
