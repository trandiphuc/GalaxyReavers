(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Menu/Intent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a70ecmAHFZOHKhNHw3tIz2f', 'Intent', __filename);
// Script/Intent.js

'use strict';

var mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button
    },

    onLoad: function onLoad() {
        this.homeButton.node.on('click', this.goToHome.bind(this));
    },
    goToHome: function goToHome() {
        mEmitter.instance.emit('changeScreen', 'home');
    },
    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=Intent.js.map
        