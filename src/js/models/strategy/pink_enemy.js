import vars from '../../etcs/vars';
import EnemyBullet from '../enemy_bullet';

class PinkEnemy {
  runAway(enemy) {
    if (enemy.x < vars.field.jiki.x && -600 < enemy.vx) { enemy.vx -= 600; }
    else if (vars.field.jiki.x < enemy.x && enemy.vx < 600) { enemy.vx += 600; }
    enemy.vy = 600;
  }

  fireBullet(enemy, vx, vy) {
    vars.field.enemyBullets.push(new EnemyBullet(enemy.x, enemy.y, vx, vy, 15)) // 敵の弾番号15
  }

  spriteNum() {
    return 13;
  }

  score() {
    return 150;
  }
}

export default PinkEnemy;