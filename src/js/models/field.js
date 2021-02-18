import Star from "./star";
import Camera from './camera';

export default class {
  constructor() {
    this.stars = [];
    for(let i = 0; i < 500; i++) { this.stars.push(new Star()); }
    this.camera = new Camera();
  }

  update() {
    this.stars.forEach((star) => { star.update() });
  }

  draw() {
    this.stars.forEach((star) => { star.draw() });
  }
}