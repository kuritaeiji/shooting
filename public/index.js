/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/etcs/consts.js":
/*!*******************************!*\
  !*** ./src/js/etcs/consts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst consts1 = {\n  CANVAS_W: 600,\n  CANVAS_H: 600,\n  can: document.getElementById('can'),\n  vcan: document.createElement('canvas'),\n  GAME_SPEED: 1000 / 60,\n  DEBUG: true\n};\nconst consts2 = {\n  FIELD_W: consts1.CANVAS_W,\n  FIELD_H: consts1.CANVAS_H,\n  SCREEN_W: consts1.CANVAS_W / 2,\n  SCREEN_H: consts1.CANVAS_H / 2,\n  con: consts1.can.getContext('2d'),\n  vcon: consts1.vcan.getContext('2d')\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(consts1, consts2));\n\n//# sourceURL=webpack://shooting/./src/js/etcs/consts.js?");

/***/ }),

/***/ "./src/js/etcs/functions.js":
/*!**********************************!*\
  !*** ./src/js/etcs/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ \"./src/js/etcs/consts.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  rand: function (min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  },\n  killOuterField: function (char) {\n    if (char.x < 0 || char.x >> 8 > _consts__WEBPACK_IMPORTED_MODULE_0__.default.FIELD_W || char.y < 0 || char.y >> 8 > _consts__WEBPACK_IMPORTED_MODULE_0__.default.FIELD_H) {\n      char.kill = true;\n    }\n  }\n});\n\n//# sourceURL=webpack://shooting/./src/js/etcs/functions.js?");

/***/ }),

/***/ "./src/js/etcs/vars.js":
/*!*****************************!*\
  !*** ./src/js/etcs/vars.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/field */ \"./src/js/models/field.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  field: new _models_field__WEBPACK_IMPORTED_MODULE_0__.default(),\n  keys: {}\n});\n\n//# sourceURL=webpack://shooting/./src/js/etcs/vars.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _etcs_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etcs/consts */ \"./src/js/etcs/consts.js\");\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etcs/vars */ \"./src/js/etcs/vars.js\");\n/* harmony import */ var _models_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/field */ \"./src/js/models/field.js\");\n\n\n\n\n\nfunction gameInit() {\n  // フィールド新規作成、描画\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcon.clearRect(0, 0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_H);\n  _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field = new _models_field__WEBPACK_IMPORTED_MODULE_3__.default();\n  _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.draw(); // キャンバスに描画\n\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillStyle = 'black';\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillRect(0, 0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_H);\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.drawImage(_etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcan, _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.x, _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.y, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_H, 0, 0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_H);\n}\n\nfunction gameLoop() {\n  // アップデート\n  _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.update(); // 描画\n  // 全て消す\n\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcon.clearRect(0, 0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_H);\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.clearRect(0, 0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_H); // フィールドを描画\n\n  _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.draw(); // キャンバスを描画\n\n  _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki.damage ? _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillStyle = 'red' : _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillStyle = 'black'; // 自機がダメージを受けた時のみ、キャンバス全体を赤くする\n\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillRect(0, 0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_H);\n  _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.drawImage(_etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcan, _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.x, _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.y, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_H, 0, 0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_W, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_H); // consts.con.drawImage(consts.vcan, 0, 0, consts.FIELD_W, consts.FIELD_H, 0, 0, consts.CANVAS_W, consts.CANVAS_H);  // デバッグ用のフィールド全体をキャンバスに描画\n  // デバッグ情報をキャンバスに描画\n\n  if (_etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.DEBUG) {\n    _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.font = '20px \"Inpact\"';\n    _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillStyle = 'white';\n    _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillText('Enemy:' + _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.enemies.length, 20, 20);\n    _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillText('Bullet:' + _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki_bullets.length, 20, 40);\n    _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillText('EBullet:' + _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.enemyBullets.length, 20, 60);\n    _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.con.fillText('Life:' + _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki.life, 20, 80);\n  }\n} // キーが押されているかの判定をkeysプロパティーに代入\n\n\ndocument.addEventListener('keydown', e => {\n  _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys[e.code] = true;\n});\ndocument.addEventListener('keyup', e => {\n  _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys[e.code] = false;\n});\n_etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.can.width = _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_W;\n_etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.can.height = _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.CANVAS_H;\n_etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcan.width = _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_W;\n_etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcan.height = _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_H;\ngameInit();\nsetInterval(gameLoop, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.GAME_SPEED);\n\n//# sourceURL=webpack://shooting/./src/js/main.js?");

/***/ }),

/***/ "./src/js/models/camera.js":
/*!*********************************!*\
  !*** ./src/js/models/camera.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _etcs_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etcs/consts */ \"./src/js/etcs/consts.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(jiki) {\n    this.x = (jiki.x >> 8) - _etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.SCREEN_W / 2;\n    this.y = (jiki.y >> 8) - _etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.SCREEN_H / 2;\n  }\n\n  update(jiki) {\n    this.x = (jiki.x >> 8) / _etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.FIELD_W * (_etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.FIELD_W - _etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.SCREEN_W);\n    this.y = (jiki.y >> 8) / _etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.FIELD_H * (_etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.FIELD_H - _etcs_consts__WEBPACK_IMPORTED_MODULE_0__.default.SCREEN_H);\n  }\n\n});\n\n//# sourceURL=webpack://shooting/./src/js/models/camera.js?");

/***/ }),

/***/ "./src/js/models/enemy.js":
/*!********************************!*\
  !*** ./src/js/models/enemy.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/js/models/sprite.js\");\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etcs/vars */ \"./src/js/etcs/vars.js\");\n/* harmony import */ var _etcs_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etcs/functions */ \"./src/js/etcs/functions.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(x, vy, enemyType) {\n    this.x = x;\n    this.y = 0;\n    this.vx = 0;\n    this.vy = vy;\n    this.kill = false;\n    this.enemyType = enemyType;\n    this.isFire = false;\n  }\n\n  update() {\n    // 100px以内に近づき、一度も弾発射していないなら弾発射\n    if (Math.abs(this.y - _etcs_vars__WEBPACK_IMPORTED_MODULE_1__.default.field.jiki.y) >> 8 < 100 && !this.isFire) {\n      this.fireBullet();\n    }\n\n    if (this.isFire) {\n      this.enemyType.runAway(this); // 弾発射後、敵の種類によって+y方向に逃げるか、-y方向に逃げるかを変える\n    } else {\n      if (this.x > _etcs_vars__WEBPACK_IMPORTED_MODULE_1__.default.field.jiki.x && -300 < this.vx) {\n        this.vx -= 30;\n      } else if (this.x < _etcs_vars__WEBPACK_IMPORTED_MODULE_1__.default.field.jiki.x && this.vx < 300) {\n        this.vx += 30;\n      }\n    }\n\n    _etcs_functions__WEBPACK_IMPORTED_MODULE_2__.default.killOuterField(this);\n    this.x += this.vx;\n    this.y += this.vy;\n  }\n\n  draw() {\n    _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.enemyType.spriteNum()].draw(this.x, this.y);\n  } // private\n\n\n  fireBullet() {\n    this.isFire = true;\n    let dx = _etcs_vars__WEBPACK_IMPORTED_MODULE_1__.default.field.jiki.x - this.x;\n    let dy = _etcs_vars__WEBPACK_IMPORTED_MODULE_1__.default.field.jiki.y - this.y;\n    let radian = Math.atan2(dy, dx);\n    let randRadian = _etcs_functions__WEBPACK_IMPORTED_MODULE_2__.default.rand(0, 10) / 180 * Math.PI + radian; // max10°前後射線をずらす\n\n    let vx = Math.cos(randRadian) * 1000;\n    let vy = Math.sin(randRadian) * 1000;\n    this.enemyType.fireBullet(this, vx, vy);\n  }\n\n});\n\n//# sourceURL=webpack://shooting/./src/js/models/enemy.js?");

/***/ }),

/***/ "./src/js/models/enemy_bullet.js":
/*!***************************************!*\
  !*** ./src/js/models/enemy_bullet.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/js/models/sprite.js\");\n/* harmony import */ var _etcs_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etcs/functions */ \"./src/js/etcs/functions.js\");\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etcs/vars */ \"./src/js/etcs/vars.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(x, y, vx, vy, spriteNum) {\n    this.x = x;\n    this.y = y;\n    this.vx = vx;\n    this.vy = vy;\n    this.spriteNum = spriteNum;\n    this.kill = false;\n  }\n\n  update() {\n    this.x += this.vx;\n    this.y += this.vy;\n    _etcs_functions__WEBPACK_IMPORTED_MODULE_1__.default.killOuterField(this); // 当たり判定\n\n    let jiki = _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki; // 当たっているかつ、無敵状態ではない\n\n    if (!jiki.invincible && this.checkCollision(jiki)) {\n      jiki.receiveBullet();\n      this.kill = true;\n    }\n  }\n\n  draw() {\n    _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.spriteNum].draw(this.x, this.y);\n  }\n\n  checkCollision(jiki) {\n    let br = _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.spriteNum].r;\n    let jr = _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[jiki.spriteNum].r;\n    let dx = this.x - jiki.x >> 8;\n    let dy = this.y - jiki.y >> 8;\n    return Math.pow(br, 2) + Math.pow(jr, 2) > Math.pow(dx, 2) + Math.pow(dy, 2);\n  }\n\n});\n\n//# sourceURL=webpack://shooting/./src/js/models/enemy_bullet.js?");

/***/ }),

/***/ "./src/js/models/field.js":
/*!********************************!*\
  !*** ./src/js/models/field.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star */ \"./src/js/models/star.js\");\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera */ \"./src/js/models/camera.js\");\n/* harmony import */ var _jiki__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jiki */ \"./src/js/models/jiki.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy */ \"./src/js/models/enemy.js\");\n/* harmony import */ var _strategy_yellow_enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strategy/yellow_enemy */ \"./src/js/models/strategy/yellow_enemy.js\");\n/* harmony import */ var _etcs_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etcs/functions */ \"./src/js/etcs/functions.js\");\n/* harmony import */ var _etcs_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../etcs/consts */ \"./src/js/etcs/consts.js\");\n/* harmony import */ var _strategy_pink_enemy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strategy/pink_enemy */ \"./src/js/models/strategy/pink_enemy.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    this.stars = [];\n\n    for (let i = 0; i < 500; i++) {\n      this.stars.push(new _star__WEBPACK_IMPORTED_MODULE_0__.default());\n    }\n\n    this.jiki = new _jiki__WEBPACK_IMPORTED_MODULE_2__.default();\n    this.camera = new _camera__WEBPACK_IMPORTED_MODULE_1__.default(this.jiki);\n    this.jiki_bullets = [];\n    this.enemies = [];\n    this.enemyCounter = 0;\n    this.enemyTime = 10; // 20フレームに1回敵出現\n\n    this.enemyBullets = [];\n  }\n\n  update() {\n    this.addEnemy();\n    this.stars.forEach(star => {\n      star.update();\n    });\n    this.jiki.update();\n    this.camera.update(this.jiki);\n    this.enemies.forEach(enemy => {\n      enemy.update();\n    });\n    this.jiki_bullets.forEach(b => {\n      b.update();\n    });\n    this.enemyBullets.forEach(b => {\n      b.update();\n    });\n  }\n\n  draw() {\n    this.stars.forEach(star => {\n      star.draw();\n    });\n    this.jiki.draw();\n    this.jiki_bullets.forEach(b => {\n      b.draw();\n    });\n    this.arrayInstanceVariableUpdate('jiki_bullets');\n    this.arrayInstanceVariableUpdate('enemies');\n    this.arrayInstanceVariableUpdate('enemyBullets');\n  } // private\n\n\n  arrayInstanceVariableUpdate(name) {\n    for (let i = this[name].length - 1; 0 <= i; i--) {\n      let element = this[name][i];\n\n      if (element.kill) {\n        this[name].splice(i, 1);\n      } else {\n        element.draw();\n      }\n    }\n  }\n\n  addEnemy() {\n    if (this.enemyCounter === this.enemyTime) {\n      let x = _etcs_functions__WEBPACK_IMPORTED_MODULE_5__.default.rand(0, _etcs_consts__WEBPACK_IMPORTED_MODULE_6__.default.FIELD_W) << 8;\n      let vy = _etcs_functions__WEBPACK_IMPORTED_MODULE_5__.default.rand(300, 500);\n      let enemyType = _etcs_functions__WEBPACK_IMPORTED_MODULE_5__.default.rand(0, 1) ? new _strategy_yellow_enemy__WEBPACK_IMPORTED_MODULE_4__.default() : new _strategy_pink_enemy__WEBPACK_IMPORTED_MODULE_7__.default();\n      this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_3__.default(x, vy, enemyType));\n      this.enemyCounter = 0;\n    }\n\n    this.enemyCounter++;\n  }\n\n});\n\n//# sourceURL=webpack://shooting/./src/js/models/field.js?");

/***/ }),

/***/ "./src/js/models/jiki.js":
/*!*******************************!*\
  !*** ./src/js/models/jiki.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/js/models/sprite.js\");\n/* harmony import */ var _etcs_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etcs/consts */ \"./src/js/etcs/consts.js\");\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etcs/vars */ \"./src/js/etcs/vars.js\");\n/* harmony import */ var _jiki_bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jiki_bullet */ \"./src/js/models/jiki_bullet.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    this.x = _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_W / 2 << 8;\n    this.y = _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_H / 2 << 8;\n    this.standardSpriteNum = 2;\n    this.spriteNum = 2;\n    this.standardFlameSpriteNum = 9;\n    this.flameSpriteNum = 9;\n    this.speed = 1000;\n    this.animeCount = 0;\n    this.animePerComa = 5;\n    this.reloadCount = 0;\n    this.reloadTime = 20; // 20フレームに一発\n\n    this.life = 5;\n    this.damage = 0;\n    this.damageTime = 10; // 10フレームだけ画面を赤くする\n\n    this.invincible = 0;\n    this.invincibleTime = 60;\n  }\n\n  update() {\n    // 移動\n    let w = _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.standardSpriteNum].w;\n    let h = _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.standardSpriteNum].h;\n\n    if (_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys.ArrowUp && (this.y >> 8) - (this.speed >> 8) - h > 0) {\n      this.y -= this.speed;\n    }\n\n    if (_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys.ArrowDown && (this.y >> 8) + (this.speed >> 8) + h < _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_H) {\n      this.y += this.speed;\n    }\n\n    if (_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys.ArrowLeft && (this.x >> 8) - (this.speed >> 8) - w > 0) {\n      this.x -= this.speed;\n\n      if (1 - this.animePerComa * 3 < this.animeCount) {\n        this.animeCount--;\n      }\n    }\n\n    if (_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys.ArrowRight && (this.x >> 8) + (this.speed >> 8) + w < _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_W) {\n      this.x += this.speed;\n\n      if (this.animeCount < this.animePerComa * 3 - 1) {\n        this.animeCount++;\n      }\n    } // アニメーション\n\n\n    this.bringAnimeCountToZero();\n    this.calculateSpriteNum(); // 弾発射\n\n    this.fireBullet(); // カウント\n\n    this.count();\n  }\n\n  draw() {\n    let flameX = this.x;\n    let flameY = this.y + (23 << 8); // 無敵時に点滅表示\n\n    if (this.invincible % 2 === 0) {\n      _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.spriteNum].draw(this.x, this.y);\n      _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.flameSpriteNum].draw(flameX, flameY);\n    }\n  } // private\n\n\n  calculateSpriteNum() {\n    if (this.animeCount >= 0) {\n      let difference = Math.floor(this.animeCount / this.animePerComa);\n      this.spriteNum = this.standardSpriteNum + difference;\n      this.flameSpriteNum = this.standardFlameSpriteNum + difference;\n    } else {\n      let difference = Math.ceil(this.animeCount / this.animePerComa);\n      this.spriteNum = this.standardSpriteNum + difference;\n      this.flameSpriteNum = this.standardFlameSpriteNum + difference;\n    }\n  }\n\n  bringAnimeCountToZero() {\n    // 止まっている時、animeCountを0に近づける\n    if (!_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys.ArrowLeft && !_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys.ArrowRight) {\n      if (0 < this.animeCount) {\n        this.animeCount--;\n      }\n\n      if (this.animeCount < 0) {\n        this.animeCount++;\n      }\n    }\n  }\n\n  fireBullet() {\n    if (this.reloadCount > 0) {\n      this.reloadCount--;\n    }\n\n    if (_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.keys.Space && this.reloadCount === 0) {\n      _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki_bullets.push(new _jiki_bullet__WEBPACK_IMPORTED_MODULE_3__.default(this.x - (9 << 8), this.y, -100, -5 << 8));\n      _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki_bullets.push(new _jiki_bullet__WEBPACK_IMPORTED_MODULE_3__.default(this.x - (3 << 8), this.y, -30, -5 << 8));\n      _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki_bullets.push(new _jiki_bullet__WEBPACK_IMPORTED_MODULE_3__.default(this.x + (3 << 8), this.y, 30, -5 << 8));\n      _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.jiki_bullets.push(new _jiki_bullet__WEBPACK_IMPORTED_MODULE_3__.default(this.x + (9 << 8), this.y, 100, -5 << 8));\n      this.reloadCount = this.reloadTime;\n    }\n  }\n\n  receiveBullet() {\n    this.life--;\n    this.damage = this.damageTime;\n    this.invincible = this.invincibleTime;\n  }\n\n  count() {\n    if (this.invincible > 0) {\n      this.invincible--;\n    }\n\n    if (this.damage > 0) {\n      this.damage--;\n    }\n  }\n\n});\n\n//# sourceURL=webpack://shooting/./src/js/models/jiki.js?");

/***/ }),

/***/ "./src/js/models/jiki_bullet.js":
/*!**************************************!*\
  !*** ./src/js/models/jiki_bullet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/js/models/sprite.js\");\n/* harmony import */ var _etcs_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etcs/functions */ \"./src/js/etcs/functions.js\");\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etcs/vars */ \"./src/js/etcs/vars.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(x, y, vx, vy) {\n    this.x = x;\n    this.y = y;\n    this.vx = vx;\n    this.vy = vy;\n    this.kill = false;\n    this.spriteNum = 5;\n  }\n\n  update() {\n    this.x += this.vx;\n    this.y += this.vy;\n    _etcs_functions__WEBPACK_IMPORTED_MODULE_1__.default.killOuterField(this); // 当たり判定\n\n    _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.enemies.forEach(enemy => {\n      if (this.checkCollision(enemy)) {\n        this.kill = true;\n        enemy.kill = true;\n      }\n    });\n  }\n\n  draw() {\n    _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.spriteNum].draw(this.x, this.y);\n  }\n\n  checkCollision(enemy) {\n    let jr = _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[this.spriteNum].r;\n    let er = _sprite__WEBPACK_IMPORTED_MODULE_0__.default.Sprites[enemy.enemyType.spriteNum()].r;\n    let dx = this.x - enemy.x >> 8;\n    let dy = this.y - enemy.y >> 8;\n    return Math.pow(jr, 2) + Math.pow(er, 2) > Math.pow(dx, 2) + Math.pow(dy, 2);\n  }\n\n});\n\n//# sourceURL=webpack://shooting/./src/js/models/jiki_bullet.js?");

/***/ }),

/***/ "./src/js/models/sprite.js":
/*!*********************************!*\
  !*** ./src/js/models/sprite.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_sprite_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/sprite.png */ \"./src/images/sprite.png\");\n/* harmony import */ var _etcs_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etcs/consts */ \"./src/js/etcs/consts.js\");\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etcs/vars */ \"./src/js/etcs/vars.js\");\n\nlet image = new Image();\nimage.src = _images_sprite_png__WEBPACK_IMPORTED_MODULE_0__.default;\n\n\n\nclass Sprite {\n  constructor(x, y, w, h, r) {\n    this.x = x;\n    this.y = y;\n    this.w = w;\n    this.h = h;\n    this.r = r;\n  }\n\n  draw(x, y) {\n    // x, yはスプライトの中心を指し示すため、左上隅の座標を算出\n    let px = (x >> 8) - this.w / 2;\n    let py = (y >> 8) - this.h / 2; // スクリーン内のみ描写\n\n    if (_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.x - this.w < px && _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.x + _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_W && _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.y - this.h < py && py < _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.y + _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_H) {\n      _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcon.drawImage(image, this.x, this.y, this.w, this.h, px, py, this.w, this.h);\n    }\n  }\n\n  static get Sprites() {\n    return [new Sprite(0, 0, 22, 42, 16), // 左 0\n    new Sprite(23, 0, 33, 42, 18), // 左 1\n    new Sprite(57, 0, 43, 42, 21), // 真ん中 2\n    new Sprite(101, 0, 33, 42, 18), // 右 3\n    new Sprite(135, 0, 21, 42, 15), // 右 4\n    new Sprite(0, 50, 3, 7, 3), // 弾 5\n    new Sprite(4, 50, 5, 5, 3), // 弾 6\n    new Sprite(3, 42, 16, 5), // 噴射 左 7\n    new Sprite(29, 42, 21, 5), // 噴射 左 8\n    new Sprite(69, 42, 19, 5), // 噴射 正面 9\n    new Sprite(108, 42, 21, 5), // 噴射 右 10\n    new Sprite(138, 42, 16, 5), // 噴射 右 11\n    new Sprite(4, 62, 24, 27, 12), // 敵 黄色 12\n    new Sprite(4, 95, 24, 26, 12), // 敵 ピンク 13\n    new Sprite(32, 49, 8, 8, 4), // 敵弾 小 14\n    new Sprite(42, 47, 12, 12, 6), // 敵弾 大 15\n    new Sprite(5, 352, 8, 8), // ヒット 16\n    new Sprite(21, 346, 19, 20), // ヒット 17\n    new Sprite(46, 343, 28, 27), // ヒット 18\n    new Sprite(81, 343, 31, 29), // ヒット 19\n    new Sprite(118, 341, 33, 32) // ヒット 20\n    ];\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n//# sourceURL=webpack://shooting/./src/js/models/sprite.js?");

/***/ }),

/***/ "./src/js/models/star.js":
/*!*******************************!*\
  !*** ./src/js/models/star.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _etcs_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etcs/functions */ \"./src/js/etcs/functions.js\");\n/* harmony import */ var _etcs_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etcs/consts */ \"./src/js/etcs/consts.js\");\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etcs/vars */ \"./src/js/etcs/vars.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor() {\n    this.x = _etcs_functions__WEBPACK_IMPORTED_MODULE_0__.default.rand(0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_W) << 8;\n    this.y = _etcs_functions__WEBPACK_IMPORTED_MODULE_0__.default.rand(0, _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_H) << 8;\n    this.vy = _etcs_functions__WEBPACK_IMPORTED_MODULE_0__.default.rand(200, 500);\n    this.color = _etcs_functions__WEBPACK_IMPORTED_MODULE_0__.default.rand(0, 1) ? '#66f' : '#aef';\n    this.size = _etcs_functions__WEBPACK_IMPORTED_MODULE_0__.default.rand(1, 2);\n  }\n\n  update() {\n    if (this.y > _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.FIELD_H << 8) {\n      this.y = 0;\n    }\n\n    this.y += this.vy;\n    this.color = _etcs_functions__WEBPACK_IMPORTED_MODULE_0__.default.rand(0, 1) ? '#66f' : '#aef';\n  }\n\n  draw() {\n    let px = this.x >> 8;\n    let py = this.y >> 8; // スクリーン内の時のみ描画\n\n    if (_etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.x < px && px < _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.x + _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_W && _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.y < py && py < _etcs_vars__WEBPACK_IMPORTED_MODULE_2__.default.field.camera.y + _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.SCREEN_H) {\n      _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcon.fillStyle = this.color;\n      _etcs_consts__WEBPACK_IMPORTED_MODULE_1__.default.vcon.fillRect(px, py, this.size, this.size);\n    }\n  }\n\n});\n\n//# sourceURL=webpack://shooting/./src/js/models/star.js?");

/***/ }),

/***/ "./src/js/models/strategy/pink_enemy.js":
/*!**********************************************!*\
  !*** ./src/js/models/strategy/pink_enemy.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../etcs/vars */ \"./src/js/etcs/vars.js\");\n/* harmony import */ var _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enemy_bullet */ \"./src/js/models/enemy_bullet.js\");\n\n\n\nclass PinkEnemy {\n  runAway(enemy) {\n    if (enemy.x < _etcs_vars__WEBPACK_IMPORTED_MODULE_0__.default.field.jiki.x && -600 < enemy.vx) {\n      enemy.vx -= 600;\n    } else if (_etcs_vars__WEBPACK_IMPORTED_MODULE_0__.default.field.jiki.x < enemy.x && enemy.vx < 600) {\n      enemy.vx += 600;\n    }\n\n    enemy.vy = 600;\n  }\n\n  fireBullet(enemy, vx, vy) {\n    _etcs_vars__WEBPACK_IMPORTED_MODULE_0__.default.field.enemyBullets.push(new _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__.default(enemy.x, enemy.y, vx, vy, 15)); // 敵の弾番号15\n  }\n\n  spriteNum() {\n    return 13;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PinkEnemy);\n\n//# sourceURL=webpack://shooting/./src/js/models/strategy/pink_enemy.js?");

/***/ }),

/***/ "./src/js/models/strategy/yellow_enemy.js":
/*!************************************************!*\
  !*** ./src/js/models/strategy/yellow_enemy.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _etcs_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../etcs/vars */ \"./src/js/etcs/vars.js\");\n/* harmony import */ var _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enemy_bullet */ \"./src/js/models/enemy_bullet.js\");\n\n\n\nclass YellowEnemy {\n  runAway(enemy) {\n    if (enemy.x < _etcs_vars__WEBPACK_IMPORTED_MODULE_0__.default.field.jiki.x && -300 < enemy.vx) {\n      enemy.vx -= 30;\n    } else if (_etcs_vars__WEBPACK_IMPORTED_MODULE_0__.default.field.jiki.x < enemy.x && enemy.vx < 300) {\n      enemy.vx += 30;\n    }\n\n    enemy.vy = -600;\n  }\n\n  fireBullet(enemy, vx, vy) {\n    _etcs_vars__WEBPACK_IMPORTED_MODULE_0__.default.field.enemyBullets.push(new _enemy_bullet__WEBPACK_IMPORTED_MODULE_1__.default(enemy.x, enemy.y, vx, vy, 14)); // 敵の弾番号14\n  }\n\n  spriteNum() {\n    return 12;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YellowEnemy);\n\n//# sourceURL=webpack://shooting/./src/js/models/strategy/yellow_enemy.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* html {\\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n} */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shooting/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://shooting/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/images/sprite.png":
/*!*******************************!*\
  !*** ./src/images/sprite.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sprite.png\");\n\n//# sourceURL=webpack://shooting/./src/images/sprite.png?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://shooting/./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shooting/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;