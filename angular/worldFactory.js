angular.module('app')
	.factory('worldFactory', [function(){

		var World = (function () {
			function WorldConstructor (player, dungeon, monsters) {
				this.player = player;
				this.dungeon = dungeon;
				this.monsters = monsters;
			}

			return WorldConstructor
		})()

		
		var Level =(function(){
			function LevelConstructor(contents) {
				this.contents = contents
			}
			return LevelConstructor
		})()

		var Player = (function() {
			function PlayerConstructor(dLvl, xLvl) {
				this.dLvl = dLvl
				this.xLvl = xLvl
			}
			return PlayerConstructor
		})()

		var player = new Player(0,1)
		var world = new World()
		

		return {
			world : world
		}
	}])