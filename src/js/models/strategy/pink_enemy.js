import vars from '../../etcs/vars';

export default class {
  constructor() {
    this.spriteNum = 13;
  }

  runAway(enemy) {
    if (enemy.x < vars.field.jiki.x && -600 < enemy.vx) { enemy.vx -= 600; }
    else if (vars.field.jiki.x < enemy.x && enemy.vx < 600) { enemy.vx += 600; }
    enemy.vy = 600;
  }
}