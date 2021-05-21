(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Home.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cbae7WU3OFJDIu79x/5/ZBe', 'Home', __filename);
// Script/Home.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        index: 0,
        settingButton: cc.Button,
        hintButton: cc.Button,
        goButton: cc.Button
    },

    onLoad: function onLoad() {
        this.settingButton.node.on('click', this.goToSetting, this);
        this.hintButton.node.on('click', this.goToHint, this);
        this.goButton.node.on('click', this.goToLevel, this);
    },
    goToSetting: function goToSetting() {
        mEmitter.instance.emit('changeScreen', 'setting');
    },
    goToHint: function goToHint() {
        mEmitter.instance.emit('changeScreen', 'hint');
    },
    dashSpcace: function dashSpcace(evt) {
        this.index = evt._curPageIdx;
    },
    goToLevel: function goToLevel() {
        mEmitter.instance.emit('getSpace', this.index);
    },
    changeScene: function changeScene() {
        mEmitter.instance.emit('changeScreen', 'chooseLevel');
    },
    start: function start() {},
    update: function update(dt) {}
});

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
        //# sourceMappingURL=Home.js.map
        