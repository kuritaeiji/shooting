import vars from '../../etcs/vars';
import EnemyBullet from '../enemy_bullet';

class YellowEnemy {
  runAway(enemy) {
    if (enemy.x < vars.field.jiki.x && -300 < enemy.vx) { enemy.vx -= 30; }
    else if (vars.field.jiki.x < enemy.x && enemy.vx < 300) { enemy.vx += 30; }
    enemy.vy = -600;
  }

  fireBullet(enemy, vx, vy) {
    vars.field.enemyBullets.push(new EnemyBullet(enemy.x, enemy.y, vx, vy, 14)) // 敵の弾番号14
  }

  spriteNum() {
    return 12;
  }
}

export default YellowEnemy;