import functions from '../etcs/functions';
import consts from '../etcs/consts';

export default class {
  constructor() {
    this.x  = functions.rand(0, consts.FIELD_W) << 8;
    this.y  = functions.rand(0, consts.FIELD_H) << 8;
    this.vy = functions.rand(200, 500);
    this.color = functions.rand(0, 1) ? '#66f' : '#aef';
    this.size = functions.rand(1, 2);
  }

  update() {
    if (this.y > consts.FIELD_H << 8) { this.y = 0; }
    this.y += this.vy;
    this.color = functions.rand(0, 1) ? '#66f' : '#aef';
  }

  draw() {
    consts.vcon.fillStyle = this.color;
    consts.vcon.fillRect(this.x >> 8, this.y >> 8, this.size, this.size);
  }
}