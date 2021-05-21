const Emitter = require('Emitter');
const mEmitter = require('../Emitter');
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
        },
    },

    onLoad() {
        Emitter.instance.registerEvent('enemy_destroy', this.countEnemyAlive.bind(this));
        cc.loader.loadRes('waveConfig.json', function (err, object) {
            if (err) {
                console.log(err);
                return;
            }
            this._content = object.json.level[this._levelIndex];
            this.createFirstLevel()
        }.bind(this));
    },
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },

    createFirstLevel() {
        this._waveIndex = 1;
        this.waveLabel.node.active = true;
        this.levelLabel.node.active = true;
        this.waveLabel.string = 'wave ' + this._waveIndex;
        this.levelLabel.string = 'level ' + this._levelIndex;
        this.scheduleOnce(this.createAWave, 3);
    },

    setLevelIndex(value) {
        this._levelIndex = value;
    },

    getLevelIndex() {
        return this._levelIndex;
    },

    createAWave() {

        this.levelLabel.node.active = false;
        this.waveLabel.node.active = false;
        let lv = this._content[this._waveIndex].content.map(x => x);
        let lv_col = this._content[this._waveIndex].col;
        for (let i = 0; i < lv.length; i++) {
            let col = i % lv_col;
            let row = Math.floor(i / lv_col);
            if (lv[i] == '1') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[0]);
                let timeInterval = this.getRandom(1, 20);
                newEnemy.getChildByName('weapon').getComponent('EnemyWeapon').interval = timeInterval;
                let newX = (col * 100) - (100) * lv_col / 2 + 50;
                let newY = 300 + (120 * row);
                newEnemy.setPosition(0, 1000);
                this.node.addChild(newEnemy);
                cc.tween(newEnemy)
                    .to(1, {x: newX, y: newY})
                    .start();
            } else if (lv[i] == '2') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[1]);
                let newX = (col * 100) - (100) * lv_col / 2 + 50;
                let newY = 300 + (120 * row);
                newEnemy.setPosition(0, 1000);
                this.node.addChild(newEnemy);
                cc.tween(newEnemy)
                .to(1, {x: newX, y: newY})
                .start();
            }
            else if (lv[i] == '3') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[2]);
                let newX = 0;
                let newY = 400;
                newEnemy.setPosition(0, 1000);
                this.node.addChild(newEnemy);
                cc.tween(newEnemy)
                .to(1, {x: newX, y: newY})
                .start();
            } else if (lv[i] == '4') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[3]);
                let newX = 0;
                let newY = 400;
                newEnemy.setPosition(0, 1000);
                this.node.addChild(newEnemy);
                cc.tween(newEnemy)
                .to(1, {x: newX, y: newY})
                .start();
            } else if (lv[i] == '5') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[4]);
                let newX = 0;
                let newY = 400;
                newEnemy.setPosition(0, 1000);
                this.node.addChild(newEnemy);
                cc.tween(newEnemy)
                .to(1, {x: newX, y: newY})
                .start();
            }
        }
    },
    countEnemyAlive() {
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
                    cc.tween(this.node)
                        .delay(3)
                        .call(()=>{
                            cc.director.loadScene('Menu', (()=>{
                                mEmitter.instance.emit('changeScreen', 'wingame');
                            }))
                        })
                        .start();
                } else {
                    this.waveLabel.node.active = false;
                    let finishedLevel = parseInt(cc.sys.localStorage.getItem("finishLevel") || 0)
                    if(this._levelIndex > finishedLevel){
                        cc.sys.localStorage.setItem("finishLevel", this._levelIndex);
                    }
                    cc.director.loadScene('ChooseLevel', (() => {
                        let getBlock = cc.director.getScene().getChildByName('Canvas').getChildByName('Level').getComponent('ChooseLevel');
                        getBlock.setIsBlock(this.isblock);
                    }));
                }
            };
        };
    },
    start() {

    },

    // update (dt) {},
});
