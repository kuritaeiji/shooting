import vars from '../../etcs/vars';

export default class {
  constructor() {
    this.spriteNum = 12;
  }

  runAway(enemy) {
    if (enemy.x < vars.field.jiki.x && -300 < enemy.vx) { enemy.vx -= 30; }
    else if (vars.field.jiki.x < enemy.x && enemy.vx < 300) { enemy.vx += 30; }
    enemy.vy = -600;
  }
}