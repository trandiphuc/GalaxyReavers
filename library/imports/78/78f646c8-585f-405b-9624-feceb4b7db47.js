"use strict";
cc._RF.push(module, '78f64bIWF9AW5Yk/s60t9tH', 'MainControllerLevel');
// Script/Actor/MainControllerLevel.js

'use strict';

var Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        Level1: cc.Node,
        Level2: cc.Node
    },

    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('changeLevel', this.onTranformLevel.bind(this));
    },
    onTranformLevel: function onTranformLevel(level) {
        switch (level) {
            case 'Level 1':
                {
                    this.level.active = true;
                    this.leve2.active = false;
                    break;
                }
            case 'Level 2':
                {
                    this.Level2.active = true;
                    this.level.active = false;
                    break;
                }
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();