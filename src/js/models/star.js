import functions from '../etcs/functions';
import consts from '../etcs/consts';
import vars from '../etcs/vars';

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
    let px = this.x >> 8;
    let py = this.y >> 8;
    // スクリーン内の時のみ描画
    if (vars.field.camera.x < px && px < vars.field.camera.x + consts.SCREEN_W && vars.field.camera.y < py && py < vars.field.camera.y + consts.SCREEN_H) {
      consts.vcon.fillStyle = this.color;
      consts.vcon.fillRect(px, py, this.size, this.size);
    }
  }
}