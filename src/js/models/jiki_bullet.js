import Sprite from './sprite';
import functions from '../etcs/functions';

export default class {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.kill = false;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    functions.killOuterField(this);
  }

  draw() {
    Sprite.Sprites[5].draw(this.x, this.y);
  }
}