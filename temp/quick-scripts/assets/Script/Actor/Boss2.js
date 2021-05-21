(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/Boss2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd7bd4mn5OlHEqvcCIyDuqj6', 'Boss2', __filename);
// Script/Actor/Boss2.js

'use strict';

cc.Class({
    extends: require('Enemy2'),

    properties: {
        speed: cc.Vec2.ZERO
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._hitPoint = this.maxHitPoint;
    },
    start: function start() {},
    update: function update(dt) {
        this.die();
        var RADIUS = 45;
        var deltaSpeed = this.speed.mul(dt);
        this.node.position = this.node.position.addSelf(deltaSpeed);
        var screenSize = cc.Canvas.instance.node.getContentSize();
        var right = screenSize.width >> 1;
        var left = -right;

        var posX = this.node.position.x;
        if (posX - RADIUS < left || posX + RADIUS > right) {
            this.speed.negSelf();
        }
    }
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
        //# sourceMappingURL=Boss2.js.map
        