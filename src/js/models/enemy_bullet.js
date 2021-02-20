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
    if (!jiki.invincible && this.checkCollision(jiki)) {
      jiki.receiveBullet()
      this.kill = true;
    }
  }

  draw() {
    Sprite.Sprites[this.spriteNum].draw(this.x, this.y);
  }

  checkCollision(jiki) {
    let br = Sprite.Sprites[this.spriteNum].r;
    let jr = Sprite.Sprites[jiki.spriteNum].r;
    let dx = (this.x - jiki.x) >> 8;
    let dy = (this.y - jiki.y) >> 8;
    return Math.pow(br, 2) + Math.pow(jr, 2) > Math.pow(dx, 2) + Math.pow(dy, 2);
  }
}