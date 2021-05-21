(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/EnemyBullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0ad96p3Ly9EcaQKAJ/FtwH3', 'EnemyBullet', __filename);
// Script/Actor/EnemyBullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    update: function update(dt) {
        var bulletPos = this.node.position;
        bulletPos.addSelf(this.speed.mul(dt));

        var screenSize = cc.Canvas.instance.node.getContentSize();
        var top = screenSize.height >> 1;
        var bottom = -top;
        var right = screenSize.width >> 1;
        var left = -right;

        var outScreen = bulletPos.x < left || bulletPos.x > right || bulletPos.y < bottom || bulletPos.y > top;
        if (outScreen) {
            this.node.destroy();
            return;
        }
        this.node.scale += dt;
        this.node.position = bulletPos;
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
        //# sourceMappingURL=EnemyBullet.js.map
        