angular.module('app')
	.controller('dungeonController', ['$scope', 'dungeonFactory', function(scope, dungeon){
		scope.dungeon = dungeon.dungeon;
		console.log(scope.dungeon.map)
	}])