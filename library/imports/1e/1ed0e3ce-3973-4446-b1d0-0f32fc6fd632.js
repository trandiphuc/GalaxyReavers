"use strict";
cc._RF.push(module, '1ed0ePOOXNERrHQDzL8b9Yy', 'MainControllerMenu');
// Script/Menu/MainControllerMenu.js

'use strict';

var Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        homeScreen: cc.Node,
        settingScreen: cc.Node,
        intentScreen: cc.Node,
        gameOverScreen: cc.Node,
        winGameScreen: cc.Node
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
                    this.intentScreen.active = false;
                    this.gameOverScreen.active = false;
                    this.winGameScreen.active = false;
                    break;
                }
            case 'setting':
                {
                    this.settingScreen.active = true;
                    this.homeScreen.active = false;
                    this.intentScreen.active = false;
                    this.gameOverScreen.active = false;
                    this.winGameScreen.active = false;
                    break;
                }
            case 'intent':
                {
                    this.intentScreen.active = true;
                    this.homeScreen.active = false;
                    this.settingScreen.active = false;
                    this.gameOverScreen.active = false;
                    this.winGameScreen.active = false;
                    break;
                }
            case 'gameover':
                {
                    this.gameOverScreen.active = true;
                    this.intentScreen.active = false;
                    this.homeScreen.active = false;
                    this.settingScreen.active = false;
                    this.winGameScreen.active = false;
                    break;
                }
            case 'wingame':
                {
                    this.winGameScreen.active = true;
                    this.gameOverScreen.active = false;
                    this.intentScreen.active = false;
                    this.homeScreen.active = false;
                    this.settingScreen.active = false;
                    break;
                }
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();