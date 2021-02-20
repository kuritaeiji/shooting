import Sprite from './sprite';
import functions from '../etcs/functions';
import vars from '../etcs/vars';

export default class {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.kill = false;
    this.spriteNum = 5;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    functions.killOuterField(this);

    // 当たり判定
    vars.field.enemies.forEach((enemy) => {
      if (this.checkCollision(enemy)) {
        this.kill = true;
        enemy.kill = true;
      }
    })
  }

  draw() {
    Sprite.Sprites[this.spriteNum].draw(this.x, this.y);
  }

  checkCollision(enemy) {
    let jr = Sprite.Sprites[this.spriteNum].r;
    let er = Sprite.Sprites[enemy.enemyType.spriteNum()].r;
    let dx = (this.x - enemy.x) >> 8;
    let dy = (this.y - enemy.y) >> 8;

    return Math.pow(jr, 2) + Math.pow(er, 2) > Math.pow(dx, 2) + Math.pow(dy, 2)
  }
}