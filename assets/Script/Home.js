const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        index: 0,
        settingButton: cc.Button,
        hintButton: cc.Button,
        goButton: cc.Button,
    },

    onLoad() {
        this.settingButton.node.on('click', this.goToSetting, this);
        this.hintButton.node.on('click', this.goToHint, this);
        this.goButton.node.on('click', this.goToLevel, this);
    },

    goToSetting(){
        mEmitter.instance.emit('changeScreen', 'setting');
    },

    goToHint(){
        mEmitter.instance.emit('changeScreen', 'hint');
    },

    dashSpcace(evt) {
        this.index = evt._curPageIdx;
    },

    goToLevel(){
        mEmitter.instance.emit('getSpace', this.index);
    },

    changeScene() {
        mEmitter.instance.emit('changeScreen', 'chooseLevel');
    },

    start() {

    },

    update(dt) {

    },
});
