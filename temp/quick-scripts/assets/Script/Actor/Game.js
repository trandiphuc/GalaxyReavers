(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1f00bWjcyFA454PDFTnnHno', 'Game', __filename);
// Script/Actor/Game.js

'use strict';

var Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        index: 0,
        player: {
            default: [],
            type: cc.Prefab
        }
    },

    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },
    setIndex: function setIndex(value) {
        this.index = value;
    },
    start: function start() {
        var player = cc.instantiate(this.player[this.index]);
        player.y = -300;
        this.node.addChild(player);
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
        //# sourceMappingURL=Game.js.map
        