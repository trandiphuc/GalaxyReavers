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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
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
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },
    createFirstLevel(){
        this._waveIndex = 1;
        this.createAWave();
    },
    createAWave(){
        let lv = this._content[this._waveIndex].content.map(x => x);
        let lv_col = this._content[this._waveIndex].col;
        for(let i = 0; i < lv.length; i++) {
            let col = i % lv_col;
            let row = Math.floor(i / lv_col);
            if(lv[i] == '1'){
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[0]);
                let timeInterval = this.getRandom(1, 20);
                newEnemy.getChildByName('weapon').getComponent('EnemyWeapon').interval = timeInterval;
                let newX = (col * 50) - (50)*lv_col/2+25;
                let newY = 200 + (50 * row);
                newEnemy.setPosition(newX, newY);
                this.node.addChild(newEnemy);
            } else if(lv[i] == '2') {
                this._enemyCount++;
                let newEnemy = cc.instantiate(this.enemy_prefab[1]);
                let newX = (col * 50) - (50)*lv_col/2+25;
                let newY = 200 + (50 * row);
                newEnemy.setPosition(newX, newY);
                this.node.addChild(newEnemy);
            }
        }
        cc.log(this._enemyCount);
    },
    countEnemyAlive() {
        this._enemyCount--;
        if(this._enemyCount == 0) {
            this._waveIndex++;
            if(this._waveIndex <= this._content.num_wave)
            {
                this.scheduleOnce(this.createAWave, 3);
            } else cc.log('win oi');
        };
    },
    start () {
        
    },

    // update (dt) {},
});
