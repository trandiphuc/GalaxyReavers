(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Menu/WinGame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bc508NBeC9NdZeH3UJvdj4H', 'WinGame', __filename);
// Script/Menu/WinGame.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        congra: cc.Node,
        player: cc.Node,
        labelCon: cc.Label
    },

    onLoad: function onLoad() {
        this.labelCon.node.active = false;
        cc.tween(this.congra).repeatForever(cc.tween(this.congra).to(0.5, { opacity: 0 }).to(0.5, { opacity: 255 })).start();
        this.homeButton.node.on('click', this.goToHome.bind(this));
    },
    goToHome: function goToHome() {
        mEmitter.instance.emit('changeScreen', 'home');
    },
    start: function start() {
        var _this = this;

        cc.tween(this.player).to(2, { x: 0, y: -100 }).delay(5).to(1, { angle: 0 }).to(2, { x: 0, y: 1000 }).call(function () {
            for (var i = 0; i < _this.node.childrenCount - 2; i++) {
                _this.node.children[i].active = false;
                _this.labelCon.node.active = true;
            }
        }).start();
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
        //# sourceMappingURL=WinGame.js.map
        