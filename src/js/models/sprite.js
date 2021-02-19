import spriteImage from '../../images/sprite.png';
let image = new Image();
image.src = spriteImage;

import consts from '../etcs/consts';
import vars from '../etcs/vars';

class Sprite {
  constructor(x, y, w, h, r) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
  }

  draw(x, y) {
    // x, yはスプライトの中心を指し示すため、左上隅の座標を算出
    let px = (x >> 8) - this.w / 2;
    let py = (y >> 8) - this.h / 2;
    // スクリーン内のみ描写
    if (vars.field.camera.x - this.w < px && vars.field.camera.x + consts.SCREEN_W && vars.field.camera.y - this.h < py && py < vars.field.camera.y + consts.SCREEN_H) {
      consts.vcon.drawImage(image, this.x, this.y, this.w, this.h, px, py, this.w, this.h);
    }
  }

  static get Sprites() {
    return [
      new Sprite(0, 0, 22, 42, 16),     // 左 0
      new Sprite(23, 0, 33, 42, 18),    // 左 1
      new Sprite(57, 0, 43, 42, 21),    // 真ん中 2
      new Sprite(101, 0, 33, 42, 18),   // 右 3
      new Sprite(135, 0, 21, 42, 15),   // 右 4

      new Sprite(0, 50, 3, 7, 3),      // 弾 5
      new Sprite(4, 50, 5, 5, 3),      // 弾 6

      new Sprite(3, 42, 16, 5),     // 噴射 左 7
      new Sprite(29, 42, 21, 5),    // 噴射 左 8
      new Sprite(69, 42, 19, 5),    // 噴射 正面 9
      new Sprite(108, 42, 21, 5),   // 噴射 右 10
      new Sprite(138, 42, 16, 5),   // 噴射 右 11

      new Sprite(4, 62, 24, 27, 12),    // 敵 小 12
      new Sprite(206, 58, 69, 73, 36),  // 敵 大 13

      new Sprite(32, 49, 8, 8, 4),     // 敵弾 小 14
      new Sprite(42, 47, 12, 12, 6),   // 敵弾 大 15

      new Sprite(5, 352, 8, 8),     // ヒット 16
      new Sprite(21, 346, 19, 20),  // ヒット 17
      new Sprite(46, 343, 28, 27),  // ヒット 18
      new Sprite(81, 343, 31, 29),  // ヒット 19
      new Sprite(118, 341, 33, 32)  // ヒット 20
    ]
  }
}

export default Sprite;