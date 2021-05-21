const EnemyWeapon = require('EnemyWeapon');
cc.Class({
    extends: EnemyWeapon,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    fire() {
        let leftBulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(-120, 33));
        let rightBulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(120, 33));

        this.add(leftBulletPos);
        this.add(rightBulletPos);
    },

    // update (dt) {},
});
