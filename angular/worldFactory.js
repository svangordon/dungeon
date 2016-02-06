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

		var Dungeon = (function(){
			function DungeonConstructor (dungeonLevels) {
				this.dungeonLevels = dungeonLevels
			}

			return DungeonConstructor
		})()

		var Level =(function(){
			function LevelConstructor(contents) {
				this.contents = contents
			}
			return LevelConstructor
		})()

		var Room = (function(){
			function RoomConstructor(coordinates, connections) {
				this.coordinates = coordinates;
				this.connections = connections;
			}

			return RoomConstructor
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