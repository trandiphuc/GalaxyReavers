const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
    },

    onLoad () {
        this.homeButton.node.on('click', this.goToHome.bind(this));
    },

    goToHome(){
        mEmitter.instance.emit('changeScreen', 'home');
    },

    start () {

    },

    // update (dt) {},
});
