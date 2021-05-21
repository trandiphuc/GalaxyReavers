(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/BossWeapon.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1ede9ecBtRB+LeqYBFPSroX', 'BossWeapon', __filename);
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
        //# sourceMappingURL=BossWeapon.js.map
        