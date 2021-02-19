import Star from "./star";
import Camera from './camera';
import Jiki from './jiki';

export default class {
  constructor() {
    this.stars = [];
    for(let i = 0; i < 500; i++) { this.stars.push(new Star()); }
    this.jiki = new Jiki();
    this.camera = new Camera(this.jiki);
  }

  update() {
    this.stars.forEach((star) => { star.update() });
    this.jiki.update();
    this.camera.update(this.jiki);
  }

  draw() {
    this.stars.forEach((star) => { star.draw() });
    this.jiki.draw();
  }
}