const consts1 = {
  CANVAS_W: 600,
  CANVAS_H: 600,

  can: document.getElementById('can'),
  vcan: document.createElement('canvas'),

  GAME_SPEED: 1000 / 60
};

const consts2 = {
  FIELD_W: consts1.CANVAS_W,
  FIELD_H: consts1.CANVAS_H,

  SCREEN_W: consts1.CANVAS_W / 2,
  SCREEN_H: consts1.CANVAS_H / 2,

  con: consts1.can.getContext('2d'),
  vcon: consts1.vcan.getContext('2d')
};

export default Object.assign(consts1, consts2);