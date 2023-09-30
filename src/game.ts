import * as Phaser from 'phaser';
import Intro from './scenes/intro';
import Stage from './scenes/stage';

const intro = new Intro();
const stage = new Stage();

const config = {
    type: Phaser.WEBGL,
    backgroundColor: '#000000',
	physics: {
          default: 'arcade',
          arcade: {
              gravity: { y: 800 },
              debug: false
          }
      },
    scene: [
		intro, stage
	],
	scale             : {
		mode            : Phaser.Scale.FIT,
		autoCenter      : Phaser.Scale.CENTER_BOTH,
		width           : 800,
		height          : 600,
	},
	input: {
		activePointers: 3,
	},
};

new Phaser.Game(config);
