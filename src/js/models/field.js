import Star from "./star";
import Camera from './camera';
import Jiki from './jiki';
import Enemy from './enemy';
import YellowEnemy from './strategy/yellow_enemy';
import functions from '../etcs/functions';
import consts from '../etcs/consts';
import PinkEnemy from "./strategy/pink_enemy";

export default class {
  constructor() {
    this.stars = [];
    for(let i = 0; i < 500; i++) { this.stars.push(new Star()); }
    this.jiki = new Jiki();
    this.camera = new Camera(this.jiki);
    this.jiki_bullets = [];

    this.enemies = [];
    this.enemyCounter = 0;
    this.enemyTime = 10; // 10フレームに1回敵出現

    this.enemyBullets = [];
  }

  update() {
    this.addEnemy();

    this.stars.forEach((star) => { star.update() });
    this.jiki.update();
    this.camera.update(this.jiki);
    this.enemies.forEach((enemy) => { enemy.update() });
    this.jiki_bullets.forEach((b) => { b.update() });
    this.enemyBullets.forEach((b) => { b.update() });
  }

  draw() {
    this.stars.forEach((star) => { star.draw() });
    this.jiki.draw();
    this.jiki_bullets.forEach((b) => { b.draw() });
    this.arrayInstanceVariableUpdate('jiki_bullets');
    this.arrayInstanceVariableUpdate('enemies');
    this.arrayInstanceVariableUpdate('enemyBullets');
  }

  // private
  arrayInstanceVariableUpdate(name) {
    for (let i = this[name].length - 1; 0 <= i; i--) {
      let element = this[name][i];
      if (element.kill) { this[name].splice(i, 1); }
      else { element.draw(); }
    }
  }

  addEnemy() {
    if (this.enemyCounter === this.enemyTime) {
      let x = functions.rand(0, consts.FIELD_W) << 8;
      let vy = functions.rand(300, 500);
      let enemyType = functions.rand(0, 1) ? new YellowEnemy() : new PinkEnemy();
      this.enemies.push(new Enemy(x, vy, enemyType))

      this.enemyCounter = 0;
    }
    this.enemyCounter++;
  }
}