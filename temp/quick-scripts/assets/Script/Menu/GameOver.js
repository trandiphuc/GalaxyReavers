(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Menu/GameOver.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '209c4AKTWxHfaWL8v0VvklG', 'GameOver', __filename);
// Script/Menu/GameOver.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        loseGame: cc.Node,
        homeButton: cc.Button,
        levelLabel: cc.Label,
        waveLabel: cc.Label,
        replayButton: cc.Button,
        level: 0,
        wave: 0
    },

    onLoad: function onLoad() {
        this.homeButton.node.on('click', this.goToHome.bind(this));
        this.replayButton.node.on('click', this.goToLevel.bind(this));
        cc.tween(this.loseGame).repeatForever(cc.tween(this.loseGame).to(0.5, { opacity: 0 }).to(0.5, { opacity: 255 })).start();
    },
    setLevel: function setLevel(value) {
        this.level = value;
    },
    goToHome: function goToHome() {
        mEmitter.instance.emit('changeScreen', 'home');
    },
    goToLevel: function goToLevel() {
        var _this = this;

        cc.director.loadScene("PlayGame", function () {
            mEmitter.instance.emit('changeLevel', _this.level);
        });
    },
    start: function start() {
        this.levelLabel.string = "Level " + this.level;
        this.waveLabel.string = this.wave;
    }
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
        //# sourceMappingURL=GameOver.js.map
        