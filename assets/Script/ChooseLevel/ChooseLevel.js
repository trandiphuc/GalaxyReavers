const mEmitter = require("./Emitter");

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
        level: 0,
    },

    onLoad() {
        this.finishedLevel = parseInt(cc.sys.localStorage.getItem("finishLevel") || 0);
        switch (this.finishedLevel) {
            case 1: this.level2Button.interactable = true;
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
        cc.tween(this.hintButton.node)
            .repeatForever(
                cc.tween(this.hintButton.node)
                    .to(0.2, { angle: -20 })
                    .to(0.2, { angle: 20 })
            )
            .start()
    },

    setIndex(value) {
        this.index = value;
    },

    setIsBlock(value) {
        this.isLockLv2 = value;
    },

    goToHome() {
        cc.director.loadScene('Menu', (() => {
            mEmitter.instance.emit('changeScreen', 'home');
            let getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('HomeNode').getComponent('Home');
            getIndex.setIndex(this.index);
        }));
    },

    showHint() {
        this.hintText.runAction(cc.spawn(
            cc.moveTo(1, cc.v2(0, 0)),
            cc.scaleTo(1, 1)
        ));
    },

    offHint() {
        this.hintText.runAction(cc.scaleTo(0.2, 1, 0));
    },

    goToLevel1() {
        this.level = 1;
        this.level1Button.interactable = false;
        this.player.runAction(cc.sequence(
            cc.moveTo(1, cc.v2(this.player.x, 1000)),
            cc.moveTo(0.2, cc.v2(this.level1Button.node.x, 1000)),
            cc.rotateTo(0.5, 180),
            cc.spawn(
                cc.scaleTo(1, 0.8),
                cc.moveTo(1, cc.v2(this.level1Button.node.x, this.level1Button.node.y))
            ),
            cc.rotateTo(1, 0)
        ));
        this.goToGame();
    },

    goToLevel2() {
        this.level = 2;
        this.player.runAction(cc.sequence(
            cc.moveTo(1, cc.v2(this.player.x, 1000)),
            cc.moveTo(0.1, cc.v2(this.level2Button.node.x, 1000)),
            cc.rotateTo(0.1, 180),
            cc.spawn(
                cc.scaleTo(1, 0.4),
                cc.moveTo(1, cc.v2(this.level2Button.node.x, this.level2Button.node.y))
            ),
            cc.rotateTo(1, 0),
            cc.callFunc(()=>{
                this.goToGame();
            })
        ));
    },

    goToLevel3() {
        this.level = 3;
        this.player.runAction(cc.sequence(
            cc.moveTo(1, cc.v2(this.player.x, 1000)),
            cc.moveTo(0.1, cc.v2(this.level3Button.node.x, 1000)),
            cc.rotateTo(0.1, 180),
            cc.spawn(
                cc.scaleTo(1, 0.2),
                cc.moveTo(1, cc.v2(this.level3Button.node.x, this.level3Button.node.y))
            ),
            cc.rotateTo(1, 0),
            cc.callFunc(()=>{
                this.goToGame();
            })
        ));
    },
    goToGame() {
        cc.director.loadScene('PlayGame', (() => {
            let getLevel = cc.director.getScene().getChildByName('Canvas').getChildByName('Game').getChildByName('WaveManager').getComponent('WaveMng');
            getLevel.setLevelIndex(this.level);
            let getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('Game').getComponent('Game');
            getIndex.setIndex(this.index);
        }))
    },
    start() {
        this.player.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame('space' + this.index);
        this.player.y = 1000;
        cc.tween(this.player)
            .to(0.1, { angle: 180 })
            .to(2, { position: cc.v2(this.level1Button.node.x, this.level1Button.node.y) })
            .to(1.5, { angle: 360 })
            .delay(1)
            .start();
    },

    // update (dt) {},
});
