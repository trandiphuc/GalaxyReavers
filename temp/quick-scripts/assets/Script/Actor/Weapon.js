(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/Weapon.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1b0f2PfbuRG2rA/6wS9nYbQ', 'Weapon', __filename);
// Script/Actor/Weapon.js

'use strict';

var Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        bulletsPool: cc.Node,
        bullet: {
            default: null,
            type: cc.Prefab
        },
        interval: 0.1
    },

    start: function start() {},
    onEnable: function onEnable() {
        this.schedule(this.fire, this.interval);
    },
    onDisable: function onDisable() {
        this.unschedule(this.fire);
    },
    fire: function fire() {
        var bulletPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        bulletPos.subSelf(cc.v2(360, 640));
        Emitter.instance.emit('fire', this.bullet, bulletPos);
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
        //# sourceMappingURL=Weapon.js.map
        