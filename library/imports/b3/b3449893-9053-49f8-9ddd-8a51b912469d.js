"use strict";
cc._RF.push(module, 'b3449iTkFNJ+J3dilG5Ekad', 'BulletsPool');
// Script/Actor/BulletsPool.js

'use strict';

var Emitter = require('Emitter');
var bullet = require('Bullet');
cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        this.pool = new cc.NodePool('bullet');
        this.bullets = [];
        Emitter.instance.registerEvent('fire', this.add.bind(this));
        Emitter.instance.registerEvent('remove', this.remove.bind(this));
    },
    add: function add(prefab, position) {
        var bulletNode = this.pool.get();
        if (!bulletNode) {
            bulletNode = cc.instantiate(prefab);
        }
        bulletNode.active = true;
        var bullet = bulletNode.getComponent('Bullet');
        this.bullets.push(bullet);
        // // convert position to local space
        position.subSelf(this.node.parent.position);
        bullet.node.position = position;
        // // add to scene
        bullet.node.parent = this.node;
    },
    remove: function remove(bullet) {
        bullet.node.active = false;
        cc.js.array.remove(this.bullets, bullet);
        this.pool.put(bullet.node);
    },
    update: function update(dt) {
        var screenSize = cc.Canvas.instance.node.getContentSize();
        var top = screenSize.height >> 1;
        var bottom = -top;
        var right = screenSize.width >> 1;
        var left = -right;

        var bullets = this.bullets;
        for (var i = 0; i < bullets.length; i++) {
            var _bullet = bullets[i];
            var bulletPos = _bullet.node.position;
            bulletPos.addSelf(_bullet.speed.mul(dt));

            var outScreen = bulletPos.x < left || bulletPos.x > right || bulletPos.y < bottom || bulletPos.y > top;
            if (outScreen) {
                this.remove(_bullet);
                continue;
            }
            _bullet.node.position = bulletPos;
        }
    }
});

cc._RF.pop();