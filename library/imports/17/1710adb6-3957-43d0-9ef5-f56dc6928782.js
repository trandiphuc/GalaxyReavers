"use strict";
cc._RF.push(module, '1710a22OVdD0J719W3GkoeC', 'ChooseLevel');
// Script/ChooseLevel/ChooseLevel.js

"use strict";

var mEmitter = require("./Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        finishedLevel: 0,
        homeButton: cc.Button,
        player: cc.Node,
        atlas: cc.SpriteAtlas,
        level1Button: cc.Button,
        level2Button: cc.Button,
        level3Button: cc.Button,
        hintButton: cc.Button,
        hintText: cc.Node,
        offhintText: cc.Button,
        index: 0,
        level: 0
    },

    onLoad: function onLoad() {
        this.finishedLevel = parseInt(cc.sys.localStorage.getItem("finishLevel") || 0);
        cc.log(this.finishedLevel);
        switch (this.finishedLevel) {
            case 1:
                this.level2Button.interactable = true;
                break;
            case 2:
                this.level2Button.interactable = true;
                this.level3Button.interactable = true;
                break;
        };
        this.homeButton.node.on('click', this.goToHome.bind(this));
        this.hintButton.node.on('click', this.showHint, this);
        this.offhintText.node.on('click', this.offHint, this);
        this.level1Button.node.on('click', this.goToLevel1, this);
        this.level2Button.node.on('click', this.goToLevel2, this);
        this.level3Button.node.on('click', this.goToLevel3, this);
        cc.tween(this.hintButton.node).repeatForever(cc.tween(this.hintButton.node).to(0.2, { angle: -20 }).to(0.2, { angle: 20 })).start();
    },
    setIndex: function setIndex(value) {
        this.index = value;
    },
    setIsBlock: function setIsBlock(value) {
        this.isLockLv2 = value;
    },
    goToHome: function goToHome() {
        var _this = this;

        cc.director.loadScene('Menu', function () {
            mEmitter.instance.emit('changeScreen', 'home');
            var getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('HomeNode').getComponent('Home');
            getIndex.setIndex(_this.index);
        });
    },
    showHint: function showHint() {
        this.hintText.runAction(cc.spawn(cc.moveTo(1, cc.v2(0, 0)), cc.scaleTo(1, 1)));
    },
    offHint: function offHint() {
        this.hintText.runAction(cc.scaleTo(0.2, 1, 0));
    },
    goToLevel1: function goToLevel1() {
        this.level = 1;
        this.level1Button.interactable = false;
        this.player.runAction(cc.sequence(cc.moveTo(1, cc.v2(this.player.x, 1000)), cc.moveTo(0.2, cc.v2(this.level1Button.node.x, 1000)), cc.rotateTo(0.5, 180), cc.spawn(cc.scaleTo(1, 0.8), cc.moveTo(1, cc.v2(this.level1Button.node.x, this.level1Button.node.y))), cc.rotateTo(1, 0)));
        this.goToGame();
    },
    goToLevel2: function goToLevel2() {
        this.level = 2;
        this.player.runAction(cc.sequence(cc.rotateTo(0.5, 335), cc.spawn(cc.scaleTo(1, 0.4), cc.moveTo(1, cc.v2(this.level2Button.node.x, this.level2Button.node.y))), cc.rotateTo(1, 0)));
        this.goToGame();
    },
    goToLevel3: function goToLevel3() {
        this.level = 3;
        this.level3Button.interactable = false;
        this.player.runAction(cc.sequence(cc.rotateTo(0.5, 100), cc.spawn(cc.scaleTo(1, 0.2), cc.moveTo(1, cc.v2(this.level3Button.node.x, this.level3Button.node.y))), cc.rotateTo(1, 0)));
        this.goToGame();
    },
    goToGame: function goToGame() {
        var _this2 = this;

        cc.director.loadScene('PlayGame', function () {
            var getLevel = cc.director.getScene().getChildByName('Canvas').getChildByName('Game').getChildByName('WaveManager').getComponent('WaveMng');
            getLevel.setLevelIndex(_this2.level);
            var getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('Game').getComponent('Game');
            getIndex.setIndex(_this2.index);
        });
    },
    start: function start() {
        this.player.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame('space' + this.index);
        this.player.y = 1000;
        cc.tween(this.player).to(0.1, { angle: 180 }).to(2, { position: cc.v2(this.level1Button.node.x, this.level1Button.node.y) }).to(1.5, { angle: 360 }).delay(1).start();
    }
}

// update (dt) {},
);

cc._RF.pop();