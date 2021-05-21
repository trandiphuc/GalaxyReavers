(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/Enemy2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3e68fi0FU9PjKF4+95cc/F+', 'Enemy2', __filename);
// Script/Actor/Enemy2.js

'use strict';

var Enemy = require('Enemy');
cc.Class({
    extends: Enemy,

    properties: {
        interval: 3,
        attackSpeed: 1
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._hitPoint = this.maxHitPoint;
    },
    onEnable: function onEnable() {
        this.schedule(this.attack, this.interval);
    },
    onDisable: function onDisable() {
        this.unschedule(this.attack);
    },
    attack: function attack() {
        var lastPos = this.node.y;
        cc.tween(this.node).to(this.attackSpeed, { y: -600 }).to(this.attackSpeed, { y: lastPos }).start();
    }

    // update (dt) {},

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
        //# sourceMappingURL=Enemy2.js.map
        