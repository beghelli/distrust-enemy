import * as Phaser from 'phaser';

export default class Ship extends Phaser.Physics.Arcade.Sprite
{

	cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	accelerationConstant: number = 50
	absoluteVelocity: number = 0
	movingAngle: number = 0

	constructor(scene: Phaser.Scene, x: number, y: number, cursors: Phaser.Types.Input.Keyboard.CursorKeys)
	{
		super(scene, x, y, null)
		this.cursors = cursors
	}

	preload()
	{
		this.scene.load.spritesheet('player', 'assets/spritesheets/ship.png', {frameWidth: 65, frameHeight: 75})
	}

	create()
	{
		this.setTexture('player')
		this.scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.setOrigin(0.5, 0.5)
		this.body.setSize(65, 75, true)
	}

	update(gameTime: number, delta: number)
	{
		if (this.cursors.left.isDown)
		{
			this.setAngularAcceleration(-1 * this.accelerationConstant)
		}
		else if (this.cursors.right.isDown)
		{
			this.setAngularAcceleration(this.accelerationConstant)
		}
		else
		{
			this.setAngularAcceleration(0)
		}

		if (this.cursors.up.isDown)
		{
			// @ts-ignore
			this.scene.physics.velocityFromAngle(this.angle, this.accelerationConstant, this.body.acceleration)
		}
		else
		{
			this.setAcceleration(0);
		}
	}

}
