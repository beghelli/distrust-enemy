import * as Phaser from 'phaser';
import Ship from '../entities/ship';

export default class Stage extends Phaser.Scene
{
	private player: Ship

	constructor()
	{
		super('stage');
	}

	preload()
	{
		const cursors = this.input.keyboard.createCursorKeys();
		this.player = new Ship(this, 50, 50, cursors)
		this.player.preload()
	}

	create()
	{
		this.player.create()
		this.add.existing(this.player)
	}

}
