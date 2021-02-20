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
      if (functions.checkCollision(this, enemy, enemy.enemyType.spriteNum())) {
        this.kill = true;
        enemy.kill = true;
        vars.field.jiki.score += enemy.enemyType.score();
      }
    })
  }

  draw() {
    Sprite.Sprites[this.spriteNum].draw(this.x, this.y);
  }
}