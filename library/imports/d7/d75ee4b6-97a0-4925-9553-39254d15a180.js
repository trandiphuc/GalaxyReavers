"use strict";
cc._RF.push(module, 'd75eeS2l6BJJZVTOSVNFaGA', 'Setting');
// Script/Setting.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button
    },

    onLoad: function onLoad() {
        this.homeButton.node.on('click', this.goToHome.bind(this));
    },
    goToHome: function goToHome() {
        mEmitter.instance.emit('changeScreen', 'home');
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();