"use strict";
cc._RF.push(module, '1ede9ecBtRB+LeqYBFPSroX', 'BossWeapon');
// Script/Actor/BossWeapon.js

'use strict';

var EnemyWeapon = require('EnemyWeapon');
cc.Class({
    extends: EnemyWeapon,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    fire: function fire() {
        var leftBulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(-120, 33));
        var rightBulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(120, 33));

        this.add(leftBulletPos);
        this.add(rightBulletPos);
    }
}

// update (dt) {},
);

cc._RF.pop();