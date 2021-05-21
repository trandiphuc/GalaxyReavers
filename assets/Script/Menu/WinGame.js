const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        congra: cc.Node,
        player: cc.Node,
        labelCon: cc.Label,
    },

    onLoad () {
        this.labelCon.node.active = false;
        cc.tween(this.congra)
            .repeatForever(
                cc.tween(this.congra)
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
            )   
            .start()
        this.homeButton.node.on('click', this.goToHome.bind(this));
    },

    goToHome(){
        mEmitter.instance.emit('changeScreen', 'home');
    },

    start () {
        cc.tween(this.player)
            .to(2, {x: 0, y: -100})
            .delay(5)
            .to(1, {angle: 0})
            .to(2, {x: 0, y: 1000})
            .call(()=>{
                for(let i = 0; i < this.node.childrenCount - 2; i++){
                    this.node.children[i].active = false;
                    this.labelCon.node.active = true;
                }
            })
            .start()

    },

    // update (dt) {},
});
