(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/scrollingbg.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '76793HjZlBMjLS8M48zKtXS', 'scrollingbg', __filename);
// Script/scrollingbg.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bg1: cc.Node,
        bg2: cc.Node
    },

    onLoad: function onLoad() {},
    start: function start() {},
    update: function update(dt) {
        this.bg2.y -= 200 * dt;
        this.bg1.y -= 200 * dt;
        if (this.bg1.y <= -1280) {
            this.bg1.y = 1280;
        }
        if (this.bg2.y <= -1280) {
            this.bg2.y = 1280;
        }
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
        //# sourceMappingURL=scrollingbg.js.map
        