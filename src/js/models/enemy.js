import Sprite from './sprite';
import vars from '../etcs/vars';
import functions from '../etcs/functions';

export default class {
  constructor(x, vy, enemyType) {
    this.x = x;
    this.y = 0;
    this.vx = 0;
    this.vy = vy;
    this.kill = false;
    this.enemyType = enemyType;
    this.isFire = false;
  }

  update() {
    // 100px以内に近づき、一度も弾発射していないなら弾発射
    if (Math.abs(this.y - vars.field.jiki.y) >> 8 < 100 && !this.isFire) { this.fireBullet(); }

    if (this.isFire) {
      this.enemyType.runAway(this); // 弾発射後、敵の種類によって+y方向に逃げるか、-y方向に逃げるかを変える
    } else {
      if (this.x > vars.field.jiki.x && -300 < this.vx) { this.vx -= 30; }
      else if (this.x < vars.field.jiki.x && this.vx < 300) { this.vx += 30; }
    }

    functions.killOuterField(this)

    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    Sprite.Sprites[this.enemyType.spriteNum()].draw(this.x, this.y);
  }

  // private
  fireBullet() {
    this.isFire = true;

    let dx = vars.field.jiki.x - this.x;
    let dy = vars.field.jiki.y - this.y;
    let radian = Math.atan2(dy, dx);
    let randRadian = functions.rand(0, 10) / 180 * Math.PI + radian;  // max10°前後射線をずらす
    let vx = Math.cos(randRadian) * 1000;
    let vy = Math.sin(randRadian) * 1000;

    this.enemyType.fireBullet(this, vx, vy);
  }
}