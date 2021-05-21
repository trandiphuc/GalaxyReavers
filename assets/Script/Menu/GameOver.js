const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        loseGame: cc.Node,
        homeButton: cc.Button,
        levelLabel: cc.Label,
        replayButton: cc.Button,
        level: 0,
        wave: 0,
    },

    onLoad() {
        this.homeButton.node.on('click', this.goToHome.bind(this));
        this.replayButton.node.on('click', this.goToLevel.bind(this));
        cc.tween(this.loseGame)
            .repeatForever(
                cc.tween(this.loseGame)
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
            )   
            .start()
    },

    setLevel(value){
        this.level = value;
    },

    goToHome(){
        mEmitter.instance.emit('changeScreen', 'home');
    },

    goToLevel(){
        cc.director.loadScene("PlayGame", (()=>{
            mEmitter.instance.emit('changeLevel', this.level);
        }))
    },

    start() {
        this.levelLabel.string = "Level " + this.level;
    },

    // update (dt) {},
});
