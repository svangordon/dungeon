angular.module('app')
	.factory('dungeonFactory', [function(){

		var Dungeon = (function(){
			function DungeonConstructor (map) {
				this.map = map
			}

			return DungeonConstructor
		})()

		var Room = (function(){
			function RoomConstructor(coordinates, connections) {
				this.coordinates = coordinates;
				this.doors = {}
			}

			return RoomConstructor
		})()

		var dungeon = new Dungeon([])

		for (var i = 0; i < 9; i++) {
			dungeon.map.push(new Room( i ))
		};

		return {
			dungeon : dungeon
		}

	}])