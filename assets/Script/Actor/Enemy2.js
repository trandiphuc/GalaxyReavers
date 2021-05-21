const Enemy = require('Enemy');
cc.Class({
    extends: Enemy,

    properties: {
        interval: 3,
        attackSpeed: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._hitPoint = this.maxHitPoint;
    },
    
    onEnable() {
        this.schedule(this.attack, this.interval);
    },
    
    onDisable() {
        this.unschedule(this.attack);
    },

    attack() {
        let lastPos = this.node.y;
        cc.tween(this.node)
            .to(this.attackSpeed, {y: -600})
            .to(this.attackSpeed, {y: lastPos})
            .start();
    },

    update (dt) {
        this.die();
    },
});
