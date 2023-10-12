import * as Phaser from 'phaser';

export default class Ship extends Phaser.Physics.Arcade.Sprite
{

	cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	accelerationConstant: number = 200;

	constructor(scene: Phaser.Scene, x: number, y: number, cursors: Phaser.Types.Input.Keyboard.CursorKeys)
	{
		super(scene, x, y, null)
		this.cursors = cursors
	}

	preload()
	{
		this.scene.load.spritesheet('player', 'assets/spritesheets/ship.png', {frameWidth: 150, frameHeight: 130})
	}

	create()
	{
		this.setTexture('player')
		this.scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.setDrag(this.accelerationConstant, this.accelerationConstant)
	}

	update(gameTime: number, delta: number)
	{
		if (this.cursors.left.isDown)
		{
			this.setAccelerationX(-1 * this.accelerationConstant)
		}
		else if (this.cursors.right.isDown)
		{
			this.setAccelerationX(this.accelerationConstant)
		}
		else
		{
			this.setAccelerationX(0)
		}

		if (this.cursors.up.isDown)
		{
			this.setAccelerationY(-1 * this.accelerationConstant)
		}
		else if (this.cursors.down.isDown)
		{
			this.setAccelerationY(this.accelerationConstant)
		}
		else
		{
			this.setAccelerationY(0)
		}
	}

}
