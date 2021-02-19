import consts from '../etcs/consts';

export default class {
  constructor(jiki) {
    this.x = (jiki.x >> 8) - consts.SCREEN_W / 2;
    this.y = (jiki.y >> 8) - consts.SCREEN_H / 2;
  }

  update(jiki) {
    this.x = (jiki.x >> 8) / consts.FIELD_W * (consts.FIELD_W - consts.SCREEN_W);
    this.y = (jiki.y >> 8) / consts.FIELD_H * (consts.FIELD_H - consts.SCREEN_H);
  }
}