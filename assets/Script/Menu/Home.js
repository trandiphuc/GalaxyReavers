const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        logo: cc.Node,
        bg1: cc.Node,
        bg2: cc.Node,
        settingButton: cc.Button,
        intentButton: cc.Button,
        goButton: cc.Button,
        pageSpace: cc.PageView,
        index: 0,
    },

    onLoad() {
        this.settingButton.node.on('click', this.goToSetting.bind(this));
        this.intentButton.node.on('click', this.goToIntent.bind(this));
        this.goButton.node.on('click', this.goToLevel.bind(this));
    },

    setIndex(value) {
        this.index = value;
    },

    goToSetting() {
        mEmitter.instance.emit('changeScreen', 'setting');
    },

    goToIntent() {
        mEmitter.instance.emit('changeScreen', 'intent');
    },

    dashSpcace(evt) {
        this.index = evt._curPageIdx;
    },

    goToLevel() {
        this.goButton.interactable = false;
        this.pageSpace.node.children[1].active = false;
        this.settingButton.node.runAction(cc.moveBy(1, cc.v2(-600, 0)));
        this.intentButton.node.runAction(cc.moveBy(1, cc.v2(600, 0)));
        cc.tween(this.goButton.node)
            .to(1, { opacity: 0 })
            .start();
        cc.tween(this.logo)
            .to(1, { opacity: 0 })
            .start();
        this.bg1.runAction(cc.moveBy(3, cc.v2(0, -1280 * 3)));
        if (this.bg1.y <= -1250) {
            this.bg1.y = 1280;
        }
        this.bg2.runAction(cc.moveBy(3, cc.v2(0, -1280 * 3)));
        if (this.bg2.y <= -1250) {
            this.bg2.y = 1280;
        }
        setTimeout(() => {
            cc.director.loadScene('ChooseLevel', (()=>{
                let getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('Level').getComponent('ChooseLevel');
                getIndex.setIndex(this.index);
            }))
        }, 3000);
    },

    start() {
    
    },

    update(dt) {
        
    },
});
