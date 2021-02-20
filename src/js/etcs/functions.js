import consts from './consts';
import Sprite from '../models/sprite';

export default {
  rand: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  killOuterField: function (char) {
    if (char.x < 0 || char.x >> 8 > consts.FIELD_W || char.y < 0 || char.y >> 8 > consts.FIELD_H) { char.kill = true; }
  },

  checkCollision: function (bullet, target, targetSpriteNum) {
    let br = Sprite.Sprites[bullet.spriteNum].r;
    let tr = Sprite.Sprites[targetSpriteNum].r;
    let dx = (bullet.x - target.x) >> 8;
    let dy = (bullet.y - target.y) >> 8;

    return Math.pow(br, 2) + Math.pow(tr, 2) > Math.pow(dx, 2) + Math.pow(dy, 2)
  }
}