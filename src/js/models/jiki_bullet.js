import Sprite from './sprite';
import consts from '../etcs/consts';

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
    if (this.y < 0 || this.x < 0 || (this.x >> 8) > consts.FIELD_W) { this.kill = true; } 
  }

  draw() {
    Sprite.Sprites[5].draw(this.x, this.y);
  }
}