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
        _waveIndex: 0,
        _enemyCount: 0,
        waveLabel: cc.Label,
        levelLabel: cc.Label,
        enemy_prefab: {
            default: [],
            type: cc.Prefab
        }
    },

    onLoad: function onLoad() {
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
        this.waveLabel.node.active = true;
        this.levelLabel.node.active = true;
        this.waveLabel.string = 'wave ' + this._waveIndex;
        this.levelLabel.string = 'level ' + this._levelIndex;
        this.scheduleOnce(this.createAWave, 3);
    },
    setLevelIndex: function setLevelIndex(value) {
        this._levelIndex = value;
    },
    getLevelIndex: function getLevelIndex() {
        return this._levelIndex;
    },
    createAWave: function createAWave() {

        this.levelLabel.node.active = false;
        this.waveLabel.node.active = false;
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
                var newX = col * 100 - 100 * lv_col / 2 + 50;
                var newY = 300 + 120 * row;
                newEnemy.setPosition(0, 1000);
                this.node.addChild(newEnemy);
                cc.tween(newEnemy).to(1, { x: newX, y: newY }).start();
            } else if (lv[i] == '2') {
                this._enemyCount++;
                var _newEnemy = cc.instantiate(this.enemy_prefab[1]);
                var _newX = col * 100 - 100 * lv_col / 2 + 50;
                var _newY = 300 + 120 * row;
                _newEnemy.setPosition(0, 1000);
                this.node.addChild(_newEnemy);
                cc.tween(_newEnemy).to(1, { x: _newX, y: _newY }).start();
            } else if (lv[i] == '3') {
                this._enemyCount++;
                var _newEnemy2 = cc.instantiate(this.enemy_prefab[2]);
                var _newX2 = 0;
                var _newY2 = 400;
                _newEnemy2.setPosition(0, 1000);
                this.node.addChild(_newEnemy2);
                cc.tween(_newEnemy2).to(1, { x: _newX2, y: _newY2 }).start();
            } else if (lv[i] == '4') {
                this._enemyCount++;
                var _newEnemy3 = cc.instantiate(this.enemy_prefab[3]);
                var _newX3 = 0;
                var _newY3 = 400;
                _newEnemy3.setPosition(0, 1000);
                this.node.addChild(_newEnemy3);
                cc.tween(_newEnemy3).to(1, { x: _newX3, y: _newY3 }).start();
            } else if (lv[i] == '5') {
                this._enemyCount++;
                var _newEnemy4 = cc.instantiate(this.enemy_prefab[4]);
                var _newX4 = 0;
                var _newY4 = 400;
                _newEnemy4.setPosition(0, 1000);
                this.node.addChild(_newEnemy4);
                cc.tween(_newEnemy4).to(1, { x: _newX4, y: _newY4 }).start();
            }
        }
    },
    countEnemyAlive: function countEnemyAlive() {
        var _this = this;

        this._enemyCount--;
        if (this._enemyCount == 0) {
            this._waveIndex++;
            this.waveLabel.node.active = true;
            this.waveLabel.string = "wave " + this._waveIndex;
            if (this._waveIndex <= this._content.num_wave) {
                this.scheduleOnce(this.createAWave, 3);
            } else {
                if (this._levelIndex === 3) {
                    this.waveLabel.node.active = false;
                } else {
                    this.waveLabel.node.active = false;
                    var finishedLevel = parseInt(cc.sys.localStorage.getItem("finishLevel") || 0);
                    if (this._levelIndex > finishedLevel) {
                        cc.sys.localStorage.setItem("finishLevel", this._levelIndex);
                    }
                    cc.director.loadScene('ChooseLevel', function () {
                        var getBlock = cc.director.getScene().getChildByName('Canvas').getChildByName('Level').getComponent('ChooseLevel');
                        getBlock.setIsBlock(_this.isblock);
                    });
                }
            };
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
        