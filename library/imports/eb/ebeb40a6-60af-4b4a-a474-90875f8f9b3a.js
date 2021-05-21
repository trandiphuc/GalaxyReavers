"use strict";
cc._RF.push(module, 'ebeb4CmYK9LSqR0kIdfj5s6', 'Enemy');
// Script/Actor/Enemy.js

'use strict';

var Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        maxHitPoint: 0,
        _hitPoint: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._hitPoint = this.maxHitPoint;
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.node.group === 'player_bullet') {
            this._hitPoint -= other.node.getComponent('Bullet').damage;
        }
    },
    die: function die() {
        if (this._hitPoint <= 0) {
            Emitter.instance.emit('enemy_destroy');
            this.node.destroy();
        }
    },
    update: function update(dt) {
        this.die();
    }
});

cc._RF.pop();