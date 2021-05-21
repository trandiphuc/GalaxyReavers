(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/MainController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '13787rYYNlAU4fhAXosaJ4u', 'MainController', __filename);
// Script/MainController.js

'use strict';

var Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        homeScreen: cc.Node,
        settingScreen: cc.Node,
        hintScreen: cc.Node,
        chooseLevel: cc.Node
    },

    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('changeScreen', this.onTransformScreen.bind(this));
    },
    onTransformScreen: function onTransformScreen(name) {
        switch (name) {
            case 'home':
                {
                    this.homeScreen.active = true;
                    this.settingScreen.active = false;
                    this.chooseLevel.active = false;
                    this.hintScreen.active = false;
                    break;
                }
            case 'setting':
                {
                    this.settingScreen.active = true;
                    this.homeScreen.active = false;
                    this.chooseLevel.active = false;
                    this.hintScreen.active = false;
                    break;
                }
            case 'hint':
                {
                    this.chooseLevel.active = false;
                    this.homeScreen.active = false;
                    this.settingScreen.active = false;
                    this.hintScreen.active = true;
                    break;
                }

            // case 'level1':{
            //     cc.director.loadScene('Level 1');
            //     break;
            // }

            case 'chooseLevel':
                {
                    this.chooseLevel.active = true;
                    this.homeScreen.active = false;
                    this.settingScreen.active = false;
                    this.hintScreen.active = false;
                    break;
                }
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=MainController.js.map
        