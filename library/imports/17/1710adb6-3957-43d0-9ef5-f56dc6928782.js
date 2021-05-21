"use strict";
cc._RF.push(module, '1710a22OVdD0J719W3GkoeC', 'ChooseLevel');
// Script/ChooseLevel.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        player: {
            default: [],
            type: cc.Prefab
        },
        level2Button: cc.Button,
        index: 0
    },

    onLoad: function onLoad() {
        mEmitter.instance.registerEvent('getSpace', this.onGetSpace.bind(this));
        this.homeButton.node.on('click', this.goToHome.bind(this));
        this.level2Button.node.on('click', this.goToLevel2, this);
    },
    onGetSpace: function onGetSpace(index) {
        this.index = index;
        var player = cc.instantiate(this.player[this.index]);
        player.x = 120;
        player.y = -350;
        player.width = 300;
        player.height = 300;
        this.node.addChild(player);
    },
    goToHome: function goToHome() {
        this.node.getChildByName(this.player[this.index].name).destroy();
        mEmitter.instance.emit('changeScreen', 'home');
    },
    goToLevel2: function goToLevel2() {
        cc.tween(this.node.getChildByName(this.player[this.index].name)).to(0.5, { angle: 30 }).to(0.5, { scale: 0.4 }).to(0.5, { position: cc.v2(this.level2Button.node.x, this.level2Button.node.y + 20) }).start();
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();