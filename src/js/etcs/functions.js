import consts from './consts';

export default {
  rand: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  killOuterField: function (char) {
    if (char.x < 0 || char.x >> 8 > consts.FIELD_W || char.y < 0 || char.y >> 8 > consts.FIELD_H) { char.kill = true; }
  }
}