const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        toggleMusic: cc.Node,
        musicButton: cc.Button,
        soundButton: cc.Button,
        offSprite: cc.SpriteFrame,
        onSprite: cc.SpriteFrame,
        onMusic: cc.Label,
        offMusic: cc.Label,
        toggleSound: cc.Node,
        onSound: cc.Label,
        offSound: cc.Label,
    },

    onLoad () {
        this.offMusic.node.active = false;
        this.offSound.node.active = false;
        this.homeButton.node.on('click', this.goToHome.bind(this));
    },

    goToHome(){
        mEmitter.instance.emit('changeScreen', 'home');
    },

    onOffMusic(){
        this.settingMS(this.onMusic, this.offMusic, this.toggleMusic, this.musicButton, this.offSprite, this.onSprite); 
    },

    onOffSound(){
        this.settingMS(this.onSound, this.offSound, this.toggleSound, this.soundButton, this.offSprite, this.onSprite);
    },

    settingMS(onMS, offMS, toggleMS, btn, offSprite, onSprite) {
        if (onMS.node.active) {
            cc.tween(toggleMS)
                .to(0.3, { position: cc.v2(55, 0) })
                .call(() => {
                    onMS.node.active = false;
                    offMS.node.active = true;
                })
                .start();
                btn.node.children[0].getComponent(cc.Sprite).spriteFrame = offSprite;
        }
        else {
            cc.tween(toggleMS)
                .to(0.3, { position: cc.v2(-45, 0) })
                .call(() => {
                    offMS.node.active = false;
                    onMS.node.active = true;
                })
                .start();
                btn.node.children[0].getComponent(cc.Sprite).spriteFrame = onSprite;
        }
    },    

    start () {

    },

    // update (dt) {},
});
