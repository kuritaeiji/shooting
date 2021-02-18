import '../css/main.css';
import consts from './etcs/consts';
import Star from './models/Star';

consts.can.width = consts.CANVAS_W;
consts.can.height = consts.CANVAS_H;

consts.vcan.width = consts.FIELD_W;
consts.vcan.height = consts.FIELD_H;

function gameLoop() {
  // アップデート
    stars.forEach((star) => { star.update() });
  // 描画
    // 全て消す
    consts.vcon.clearRect(0, 0, consts.FIELD_W, consts.FIELD_H);
    consts.con.clearRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);

    // フィールドを描画
    stars.forEach((star) => { star.draw() });

    // キャンバスを描画
    consts.con.fillStyle = 'black';
    consts.con.fillRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);
    consts.con.drawImage(consts.vcan, 0, 0, consts.SCREEN_W, consts.SCREEN_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);
}

// 初期描画
let stars = [];
for (let i = 0; i < 500; i++) { stars.push(new Star()); }
stars.forEach((star) => { star.draw() });

consts.con.fillStyle = 'black';
consts.con.fillRect(0, 0, consts.CANVAS_W, consts.CANVAS_H);
consts.con.drawImage(consts.vcan, 0, 0, consts.SCREEN_W, consts.SCREEN_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);

// ゲームループ
setInterval(gameLoop, consts.GAME_SPEED)