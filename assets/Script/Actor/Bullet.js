const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        },
        damage: 0,
        sound: {
            type: cc.AudioClip,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    onEnable() {
        cc.audioEngine.playEffect(this.sound, false);
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'enemy') {
            Emitter.instance.emit('remove', this);
        }
    }

    // update (dt) {},
});