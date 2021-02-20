import Sprite from "./sprite";

import functions from '../etcs/functions';
import vars from "../etcs/vars";

export default class {
  constructor(x, y, vx, vy, spriteNum) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.spriteNum = spriteNum;
    this.kill = false
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    functions.killOuterField(this);

    // 当たり判定
    let jiki = vars.field.jiki;
    // 当たっているかつ、無敵状態ではない
    if (!jiki.invincible && functions.checkCollision(this, jiki, jiki.spriteNum)) {
      jiki.receiveBullet()
      this.kill = true;
    }
  }

  draw() {
    Sprite.Sprites[this.spriteNum].draw(this.x, this.y);
  }
}