"use strict";
cc._RF.push(module, '1f00bWjcyFA454PDFTnnHno', 'Game');
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