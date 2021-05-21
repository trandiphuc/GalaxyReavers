const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        Level1: cc.Node,
        Level2: cc.Node,
    },

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('changeLevel', this.onTranformLevel.bind(this));
    },

    onTranformLevel(level){
        switch(level){
            case 'Level 1':{
                this.level.active = true;
                this.leve2.active = false;
                break;
            }
            case 'Level 2':{
                this.Level2.active = true;
                this.level.active = false;
                break;
            }
        }
    },
    start () {

    },

    // update (dt) {},
});