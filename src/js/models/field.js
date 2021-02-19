import Star from "./star";
import Camera from './camera';
import Jiki from './jiki';

export default class {
  constructor() {
    this.stars = [];
    for(let i = 0; i < 500; i++) { this.stars.push(new Star()); }
    this.jiki = new Jiki();
    this.camera = new Camera(this.jiki);
    this.jiki_bullets = [];
  }

  update() {
    this.stars.forEach((star) => { star.update() });
    this.jiki.update();
    this.camera.update(this.jiki);
    this.jiki_bullets.forEach((b) => { b.update() });
  }

  draw() {
    this.stars.forEach((star) => { star.draw() });
    this.jiki.draw();
    this.jiki_bullets.forEach((b) => { b.draw() });
    for (let i = this.jiki_bullets.length - 1; 0 <= i; i--) {
      let b = this.jiki_bullets[i];
      if (b.kill) { this.jiki_bullets.splice(i, 1); }
      else { b.draw(); }
    }
  }
}