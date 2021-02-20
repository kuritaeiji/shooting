import Sprite from "./sprite";

import functions from '../etcs/functions';

export default class {
  constructor(x, y, vx, vy, spriteNum) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.spriteNum = spriteNum;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    functions.killOuterField(this);
  }

  draw() {
    Sprite.Sprites[this.spriteNum].draw(this.x, this.y);
  }
}