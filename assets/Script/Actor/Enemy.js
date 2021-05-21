const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        maxHitPoint: 0,
        _hitPoint: 0,
        explodeFx: cc.SpriteFrame,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._hitPoint = this.maxHitPoint;
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'player_bullet') {
            this._hitPoint -= other.node.getComponent('Bullet').damage;
        }
        if(this._hitPoint <= 0) {
            self.destroy();
        }
    },

    die() {
        if(this._hitPoint <= 0) {
            cc.tween(this.node)
                .call(() => {
                    this.node.getComponent(cc.Sprite).spriteFrame = this.explodeFx;
                })
                .delay(0.5)
                .call(() => {
                    Emitter.instance.emit('enemy_destroy');
                    this.node.destroy();
                })
                .start();
        }
    },

    update(dt) {
        this.die();
    },
});
