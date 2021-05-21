(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Menu/Setting.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd75eeS2l6BJJZVTOSVNFaGA', 'Setting', __filename);
// Script/Menu/Setting.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        toggleMusic: cc.Node,
        musicButton: cc.Button,
        soundButton: cc.Button,
        offSprite: cc.SpriteFrame,
        onSprite: cc.SpriteFrame,
        onMusic: cc.Label,
        offMusic: cc.Label,
        toggleSound: cc.Node,
        onSound: cc.Label,
        offSound: cc.Label
    },

    onLoad: function onLoad() {
        this.offMusic.node.active = false;
        this.offSound.node.active = false;
        this.homeButton.node.on('click', this.goToHome.bind(this));
    },
    goToHome: function goToHome() {
        mEmitter.instance.emit('changeScreen', 'home');
    },
    onOffMusic: function onOffMusic() {
        this.settingMS(this.onMusic, this.offMusic, this.toggleMusic, this.musicButton, this.offSprite, this.onSprite);
    },
    onOffSound: function onOffSound() {
        this.settingMS(this.onSound, this.offSound, this.toggleSound, this.soundButton, this.offSprite, this.onSprite);
    },
    settingMS: function settingMS(onMS, offMS, toggleMS, btn, offSprite, onSprite) {
        if (onMS.node.active) {
            cc.tween(toggleMS).to(0.3, { position: cc.v2(55, 0) }).call(function () {
                onMS.node.active = false;
                offMS.node.active = true;
            }).start();
            btn.node.children[0].getComponent(cc.Sprite).spriteFrame = offSprite;
        } else {
            cc.tween(toggleMS).to(0.3, { position: cc.v2(-45, 0) }).call(function () {
                offMS.node.active = false;
                onMS.node.active = true;
            }).start();
            btn.node.children[0].getComponent(cc.Sprite).spriteFrame = onSprite;
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
        //# sourceMappingURL=Setting.js.map
        