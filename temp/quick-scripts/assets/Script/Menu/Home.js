(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Menu/Home.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cbae7WU3OFJDIu79x/5/ZBe', 'Home', __filename);
// Script/Menu/Home.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        logo: cc.Node,
        bg1: cc.Node,
        bg2: cc.Node,
        settingButton: cc.Button,
        intentButton: cc.Button,
        goButton: cc.Button,
        pageSpace: cc.PageView,
        index: 0
    },

    onLoad: function onLoad() {
        this.settingButton.node.on('click', this.goToSetting.bind(this));
        this.intentButton.node.on('click', this.goToIntent.bind(this));
        this.goButton.node.on('click', this.goToLevel.bind(this));
    },
    setIndex: function setIndex(value) {
        this.index = value;
    },
    goToSetting: function goToSetting() {
        mEmitter.instance.emit('changeScreen', 'setting');
    },
    goToIntent: function goToIntent() {
        mEmitter.instance.emit('changeScreen', 'intent');
    },
    dashSpcace: function dashSpcace(evt) {
        this.index = evt._curPageIdx;
    },
    goToLevel: function goToLevel() {
        var _this = this;

        this.goButton.interactable = false;
        this.pageSpace.node.children[1].active = false;
        this.settingButton.node.runAction(cc.moveBy(1, cc.v2(-600, 0)));
        this.intentButton.node.runAction(cc.moveBy(1, cc.v2(600, 0)));
        cc.tween(this.goButton.node).to(1, { opacity: 0 }).start();
        cc.tween(this.logo).to(1, { opacity: 0 }).start();
        this.bg1.runAction(cc.moveBy(3, cc.v2(0, -1280 * 3)));
        if (this.bg1.y <= -1250) {
            this.bg1.y = 1280;
        }
        this.bg2.runAction(cc.moveBy(3, cc.v2(0, -1280 * 3)));
        if (this.bg2.y <= -1250) {
            this.bg2.y = 1280;
        }
        setTimeout(function () {
            cc.director.loadScene('ChooseLevel', function () {
                var getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('Level').getComponent('ChooseLevel');
                getIndex.setIndex(_this.index);
            });
        }, 3000);
    },
    start: function start() {},
    update: function update(dt) {
        this.goButton.node.angle += 200 * dt;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Home.js.map
        