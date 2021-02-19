import Sprite from './sprite';
import consts from '../etcs/consts';
import vars from '../etcs/vars';

export default class {
  constructor() {
    this.x = consts.FIELD_W / 2 << 8;
    this.y = consts.FIELD_H / 2 << 8;

    this.standardSpriteNum = 2;
    this.spriteNum = 2;
    this.standardFlameSpriteNum = 9;
    this.flameSpriteNum = 9;
    this.speed = 1000;
    this.animeCount = 0;
    this.animePerComa = 10;

  }

  update() {
    // 移動
    let w = Sprite.Sprites[this.standardSpriteNum].w;
    let h = Sprite.Sprites[this.standardSpriteNum].h; 
    if (vars.keys.ArrowUp && (this.y >> 8) - (this.speed >> 8) - h > 0) { this.y -= this.speed }
    if (vars.keys.ArrowDown && (this.y >> 8) + (this.speed >> 8) + h < consts.FIELD_H) { this.y += this.speed }
    if (vars.keys.ArrowLeft && (this.x >> 8) - (this.speed >> 8) - w > 0) { 
      this.x -= this.speed;
      if (1 - this.animePerComa * 3 < this.animeCount) { this.animeCount--; }
    }
    if (vars.keys.ArrowRight && (this.x >> 8) + (this.speed >> 8) + w < consts.FIELD_W) { 
      this.x += this.speed;
      if (this.animeCount < this.animePerComa * 3 - 1) { this.animeCount++; }
    }

    // アニメーション
    this.bringAnimeCountToZero();
    this.calculateSpriteNum();
  }

  draw() {
    Sprite.Sprites[this.spriteNum].draw(this.x, this.y);
    let flameX = this.x;
    let flameY = this.y + (23 << 8);
    Sprite.Sprites[this.flameSpriteNum].draw(flameX, flameY);
  }

  // private
  calculateSpriteNum() {
    if (this.animeCount >= 0) {
      let difference = Math.floor(this.animeCount / this.animePerComa);
      this.spriteNum = this.standardSpriteNum + difference;
      this.flameSpriteNum = this.standardFlameSpriteNum + difference;
    } else { 
      let difference = Math.ceil(this.animeCount / this.animePerComa);
      this.spriteNum = this.standardSpriteNum + difference;
      this.flameSpriteNum = this.standardFlameSpriteNum + difference;
    }
  }

  bringAnimeCountToZero() {
    // 止まっている時、animeCountを0に近づける
    if (!vars.keys.ArrowLeft && !vars.keys.ArrowRight) {
      if (0 < this.animeCount) { this.animeCount--; }
      if (this.animeCount < 0) { this.animeCount++; }
    }
  }
}