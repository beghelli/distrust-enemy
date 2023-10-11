import * as Phaser from 'phaser';

export default class Ship extends Phaser.Physics.Arcade.Sprite
{

	cursors: Phaser.Types.Input.Keyboard.CursorKeys;

	constructor(scene: Phaser.Scene, x: number, y: number, cursors: Phaser.Types.Input.Keyboard.CursorKeys)
	{
		super(scene, x, y, null);
		this.cursors = cursors;
	}

	preload()
	{
		this.scene.load.spritesheet('playerShip', 'assets/spritesheets/ship.png', {frameWidth: 150, frameHeight: 130})
		this.setTexture('playerShip')
	}

	create()
	{
	}

	update(gameTime: number, delta: number)
	{

	}

}
