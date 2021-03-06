import '../css/main.css';
import consts from './etcs/consts';
import vars from './etcs/vars';
import functions from './etcs/functions';
import Field from './models/field';

function gameInit() {
  // フィールド新規作成、描画
  consts.vcon.clearRect(0, 0, consts.FIELD_W, consts.FIELD_H);
  vars.field = new Field();
  vars.field.draw();

  // キャンバスに描画
  consts.con.fillStyle = 'black';
  consts.con.fillRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);
  consts.con.drawImage(consts.vcan, vars.field.camera.x, vars.field.camera.y, consts.SCREEN_W, consts.SCREEN_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);
}

function gameLoop() {
  // アップデート
    if (!vars.gameOver) { vars.field.update(); } // ゲームオーバーでない場合のみフィールドをアップデート
  // 描画
    // 全て消す
    consts.vcon.clearRect(0, 0, consts.FIELD_W, consts.FIELD_H);
    consts.con.clearRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);

    // フィールドを描画
    vars.field.draw();

    // キャンバスを描画
    vars.field.jiki.damage && !vars.gameOver ? consts.con.fillStyle = 'red' : consts.con.fillStyle = 'black' // 自機がダメージを受けた時のみ、キャンバス全体を赤くする
    consts.con.fillRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);
    consts.con.drawImage(consts.vcan, vars.field.camera.x, vars.field.camera.y, consts.SCREEN_W, consts.SCREEN_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);
    // consts.con.drawImage(consts.vcan, 0, 0, consts.FIELD_W, consts.FIELD_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);  // デバッグ用のフィールド全体をキャンバスに描画
    if (vars.gameOver) {
      functions.drawText('Game Over', -10);
      functions.drawText('Press R to Retry', 15);
    }

    // デバッグ情報をキャンバスに描画
    if (consts.DEBUG) {
      consts.con.font = '20px "Inpact"';
      consts.con.fillStyle = 'white';
      consts.con.fillText('Enemy:' + vars.field.enemies.length, 20, 20);
      consts.con.fillText('Bullet:' + vars.field.jiki_bullets.length, 20, 40);
      consts.con.fillText('EBullet:' + vars.field.enemyBullets.length, 20, 60);
      consts.con.fillText('Life:' + vars.field.jiki.life, 20, 80);
      consts.con.fillText('Score:' + vars.field.jiki.score, 20, 100);
    }
    
}

// キーが押されているかの判定をkeysプロパティーに代入
document.addEventListener('keydown', (e) => {
  vars.keys[e.code] = true;
  // ゲームオーバー時にRを押すと再開する
  if (vars.gameOver && e.code === 'KeyR') {
    vars.gameOver = false;
    gameInit();
  }
})

document.addEventListener('keyup', (e) => {
  vars.keys[e.code] = false;
})

consts.can.width = consts.CANVAS_W;
consts.can.height = consts.CANVAS_H;

consts.vcan.width = consts.FIELD_W;
consts.vcan.height = consts.FIELD_H;

gameInit();
setInterval(gameLoop, consts.GAME_SPEED)