import * as Phaser from 'phaser';

export default class Intro extends Phaser.Scene
{
	constructor()
	{
		super('intro');
	}

	preload()
	{
		this.load.image('gameIntro', 'assets/images/intro.png');
	}

	create()
	{
		const image = this.add.image(0,0,'gameIntro')
			.setOrigin(0);
		image.setInteractive();
		image.on('pointerdown', () => {
			image.removeAllListeners();
			this.startGame();
		}, this);
	}

	startGame()
	{
		this.cameras.main.fadeOut();

		this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
			this.scene.start('stage');
		})
	}

}
