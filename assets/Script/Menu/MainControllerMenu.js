 const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        homeScreen: cc.Node,
        settingScreen: cc.Node,
        intentScreen: cc.Node,
        gameOverScreen: cc.Node,
        winGameScreen: cc.Node,
    },

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('changeScreen', this.onTransformScreen.bind(this));
    },
    onTransformScreen(name){
        switch(name){
            case 'home':{
                this.homeScreen.active = true;
                this.settingScreen.active = false;
                this.intentScreen.active = false;
                this.gameOverScreen.active = false;
                this.winGameScreen.active = false;
                break;
            }
            case 'setting':{
                this.settingScreen.active = true;
                this.homeScreen.active = false;
                this.intentScreen.active = false;
                this.gameOverScreen.active = false;
                this.winGameScreen.active = false;
                break;
            }
            case 'intent':{
                this.intentScreen.active = true;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                this.gameOverScreen.active = false;
                this.winGameScreen.active = false;
                break;
            }
            case 'gameover':{
                this.gameOverScreen.active = true;
                this.intentScreen.active = false;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                this.winGameScreen.active = false;
                break;
            }
            case 'wingame':{
                this.winGameScreen.active = true;
                this.gameOverScreen.active = false;
                this.intentScreen.active = false;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                break;
            }
        }
    },
    start () {

    },

    // update (dt) {},
});