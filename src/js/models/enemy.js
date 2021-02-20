import Sprite from './sprite';
import consts from '../etcs/consts';
import vars from '../etcs/vars';

export default class {
  constructor(x, vy, enemyType) {
    this.x = x;
    this.y = 0;
    this.vx = 0;
    this.vy = vy;
    this.kill = false;
    this.enemyType = enemyType;
    this.isFire = false
  }

  update() {
    // 100px以内に近づいたら弾発射
    if (Math.abs(this.y - vars.field.jiki.y) >> 8 < 100) { this.fireBullet(); }

    if (this.isFire) {
      this.enemyType.runAway(this); // 敵の種類によって+y方向に逃げるか、-y方向に逃げるかを変える
    } else {
      if (this.x > vars.field.jiki.x && -300 < this.vx) { this.vx -= 30; }
      else if (this.x < vars.field.jiki.x && this.vx < 300) { this.vx += 30; }
    }

    if (this.x < 0 || this.x >> 8 > consts.FIELD_W || this.y < 0 || this.y >> 8 > consts.FIELD_H) { this.kill = true; }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    Sprite.Sprites[this.enemyType.spriteNum].draw(this.x, this.y);
  }

  fireBullet() {
    this.isFire = true;
  }
}