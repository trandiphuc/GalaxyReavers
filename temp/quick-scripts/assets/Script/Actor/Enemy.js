(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/Enemy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ebeb4CmYK9LSqR0kIdfj5s6', 'Enemy', __filename);
// Script/Actor/Enemy.js

'use strict';

var Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        maxHitPoint: 0,
        _hitPoint: 0,
        explodeFx: cc.SpriteFrame
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._hitPoint = this.maxHitPoint;
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.node.group === 'player_bullet') {
            this._hitPoint -= other.node.getComponent('Bullet').damage;
        }
        if (this._hitPoint <= 0) {
            self.destroy();
        }
    },
    die: function die() {
        var _this = this;

        if (this._hitPoint <= 0) {
            cc.tween(this.node).call(function () {
                _this.node.getComponent(cc.Sprite).spriteFrame = _this.explodeFx;
            }).delay(0.5).call(function () {
                Emitter.instance.emit('enemy_destroy');
                _this.node.destroy();
            }).start();
        }
    },
    update: function update(dt) {
        this.die();
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
        //# sourceMappingURL=Enemy.js.map
        