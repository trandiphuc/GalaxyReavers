 const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        homeScreen: cc.Node,
        settingScreen: cc.Node,
        hintScreen: cc.Node,
        chooseLevel: cc.Node,
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
                this.chooseLevel.active = false;
                this.hintScreen.active = false;
                break;
            }
            case 'setting':{
                this.settingScreen.active = true;
                this.homeScreen.active = false;
                this.chooseLevel.active = false;
                this.hintScreen.active = false;
                break;
            }
            case 'hint':{
                this.chooseLevel.active = false;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                this.hintScreen.active = true;
                break;
            }

            // case 'level1':{
            //     cc.director.loadScene('Level 1');
            //     break;
            // }

            case 'chooseLevel':{
                this.chooseLevel.active = true;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                this.hintScreen.active = false;
                break;
            }
        }
    },
    start () {

    },

    // update (dt) {},
});