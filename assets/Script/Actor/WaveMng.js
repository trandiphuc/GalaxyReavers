const Emitter = require('Emitter');
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
        },
        isblock: true,
    },

    onLoad() {
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
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },

    createFirstLevel() {
        this._waveIndex = 1;
        this.createAWave();
    },

    setLevelIndex(value) {
        this._levelIndex = value;
    },

    getLevelIndex() {
        return this._levelIndex;
    },

    createAWave() {
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
                newEnemy.setPosition(newX, newY);
                this.node.addChild(newEnemy);
            } else if (lv[i] == '2') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[1]);
                let newX = (col * 100) - (100) * lv_col / 2 + 50;
                let newY = 300 + (120 * row);
                newEnemy.setPosition(newX, newY);
                this.node.addChild(newEnemy);
            }
            else if (lv[i] == '3') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[2]);
                let newX = 0;
                let newY = 400;
                newEnemy.setPosition(newX, newY);
                this.node.addChild(newEnemy);
            }
        }
    },
    countEnemyAlive() {
        this._enemyCount--;
        if (this._enemyCount == 0) {
            this._waveIndex++;
            if (this._waveIndex <= this._content.num_wave) {
                this.scheduleOnce(this.createAWave, 3);
            } else {
                if (this._levelIndex === 3) {
                    //To do TRanform Screen Win
                } else {
                    this.isblock = false;
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
