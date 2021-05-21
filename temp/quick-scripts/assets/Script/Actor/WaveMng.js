(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Actor/WaveMng.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3cf24oT0/lMQIv3m6xHZVMH', 'WaveMng', __filename);
// Script/Actor/WaveMng.js

'use strict';

var Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        _levelIndex: 1,
        _content: null,
        _waveIndex: 1,
        _enemyCount: 0,
        enemy_prefab: {
            default: [],
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._levelIndex = 1;
        Emitter.instance.registerEvent('enemy_destroy', this.countEnemyAlive.bind(this));
        cc.loader.loadRes('waveConfig.json', function (err, object) {
            if (err) {
                console.log(err);
                return;
            }
            this._content = object.json.level[this._levelIndex];
            this.createFirstLevel();
        }.bind(this));
    },
    getRandom: function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },
    createFirstLevel: function createFirstLevel() {
        this._waveIndex = 1;
        this.createAWave();
    },
    createAWave: function createAWave() {
        var lv = this._content[this._waveIndex].content.map(function (x) {
            return x;
        });
        var lv_col = this._content[this._waveIndex].col;
        for (var i = 0; i < lv.length; i++) {
            var col = i % lv_col;
            var row = Math.floor(i / lv_col);
            if (lv[i] == '1') {
                this._enemyCount++;
                var newEnemy = cc.instantiate(this.enemy_prefab[0]);
                var timeInterval = this.getRandom(1, 20);
                newEnemy.getChildByName('weapon').getComponent('EnemyWeapon').interval = timeInterval;
                var newX = col * 50 - 50 * lv_col / 2 + 25;
                var newY = 200 + 50 * row;
                newEnemy.setPosition(newX, newY);
                this.node.addChild(newEnemy);
            } else if (lv[i] == '2') {
                this._enemyCount++;
                var _newEnemy = cc.instantiate(this.enemy_prefab[1]);
                var _newX = col * 50 - 50 * lv_col / 2 + 25;
                var _newY = 200 + 50 * row;
                _newEnemy.setPosition(_newX, _newY);
                this.node.addChild(_newEnemy);
            }
        }
        cc.log(this._enemyCount);
    },
    countEnemyAlive: function countEnemyAlive() {
        this._enemyCount--;
        if (this._enemyCount == 0) {
            this._waveIndex++;
            if (this._waveIndex <= this._content.num_wave) {
                this.scheduleOnce(this.createAWave, 3);
            } else cc.log('win oi');
        };
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
        //# sourceMappingURL=WaveMng.js.map
        