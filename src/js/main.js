import '../css/main.css';
import consts from './etcs/consts';
import vars from './etcs/vars';
import Field from './models/field';

function gameLoop() {
  // アップデート
    vars.field.update();
  // 描画
    // 全て消す
    consts.vcon.clearRect(0, 0, consts.FIELD_W, consts.FIELD_H);
    consts.con.clearRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);

    // フィールドを描画
    vars.field.draw();

    // キャンバスを描画
    consts.con.fillStyle = 'black';
    consts.con.fillRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);
    consts.con.drawImage(consts.vcan, vars.field.camera.x, vars.field.camera.y, consts.SCREEN_W, consts.SCREEN_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);
    // consts.con.drawImage(consts.vcan, 0, 0, consts.FIELD_W, consts.FIELD_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);  デバッグ用のフィールド全体をキャンバスに描画
}

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

consts.can.width = consts.CANVAS_W;
consts.can.height = consts.CANVAS_H;

consts.vcan.width = consts.FIELD_W;
consts.vcan.height = consts.FIELD_H;

gameInit();
setInterval(gameLoop, consts.GAME_SPEED)