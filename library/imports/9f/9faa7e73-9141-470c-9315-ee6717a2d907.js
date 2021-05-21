"use strict";
cc._RF.push(module, '9faa75zkUFHDJMV7mcXotkH', 'Player');
// Script/Actor/Player.js

"use strict";

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        maxSpeed: 10,
        level: "",
        explodeFx: cc.SpriteFrame
    },

    onLoad: function onLoad() {
        this.level = this.node._parent.name;
        this._tmpPos = this.node.position;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },
    onTouchMove: function onTouchMove(event) {
        var touches = event.getTouches();
        var moving = touches[0].getDelta();
        this._tmpPos.addSelf(moving);
    },
    onTouchEnd: function onTouchEnd() {
        this._tmpPos = this.node.position;
    },
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.node.group === 'enemy' || other.node.group === 'enemy_bullet') {
            this.die();
        }
    },
    die: function die() {
        var _this = this;

        cc.log(this.node.parent);
        var level = this.node.parent.getChildByName('WaveManager').getComponent('WaveMng').getLevelIndex();
        cc.tween(this.node).call(function () {
            _this.node.getComponent(cc.Sprite).spriteFrame = _this.explodeFx;
        }).delay(1).call(function () {
            cc.director.loadScene("Menu", function () {
                mEmitter.instance.emit('changeScreen', 'gameover');
                var getLevelScore = cc.director.getScene().getChildByName('Canvas').getChildByName('GameOverNode').getComponent('GameOver');
                getLevelScore.setLevel(level);
            });
            _this.node.destroy();
        }).start();

        // cc.director.loadScene("Menu", (()=>{
        //     mEmitter.instance.emit('changeScreen', 'gameover');
        //     let getLevelScore = cc.director.getScene().getChildByName('Canvas').getChildByName('GameOverNode').getComponent('GameOver');
        //     getLevelScore.setLevel(level);
        // }));
        // this.node.destroy();
    },
    update: function update(dt) {
        var currentPos = this.node.position;
        var delta = this._tmpPos.sub(currentPos);
        var distance = delta.magSqr();

        var maxSpeedPerFrame = this.maxSpeed * dt;
        if (distance > maxSpeedPerFrame * maxSpeedPerFrame) {
            delta.normalizeSelf();
            delta.mulSelf(maxSpeedPerFrame);
        }

        this.node.position = this.node.position.add(delta);

        var screen = cc.Canvas.instance.node.getContentSize();
        this.node.x = cc.misc.clampf(this.node.x, -screen.width / 2, screen.width / 2);
        this.node.y = cc.misc.clampf(this.node.y, -screen.height / 2, screen.height / 2);
    },
    onDestroy: function onDestroy() {
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.Canvas.instance.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
});

cc._RF.pop();