function HomeCtrl($scope, $http, $state) {

	$scope.modules = [
		{ id: 1, name: "Module 1", description: "Petite description maggle" },
		{ id: 2, name: "Module 2", description: "Module pourri lol", img: "img/ionic.png" },
		{ id: 3, name: "Module 3", description: "la aussi" },
		{ id: 4, name: "Module 4", description: "Nul", img: "img/ionic.png" },
		{ id: 5, name: "Module 5", description: "ca saoule ca tiens" },
		{ id: 6, name: "Module 6", description: "spas repetitif lol" },
		{ id: 7, name: "Module 7", description: "poual" },
		{ id: 8, name: "Module 8", description: "test" },
		{ id: 9, name: "Module 9", description: "Un ptit dernier ?" }
	]

	$scope.list = $scope.modules;
	$scope.search = [
		{str: ""}
	];

	$scope.goToModule = function (moduleId) {
		console.log(moduleId);
	}

	$scope.updateList = function() {
		$scope.list = [];
		console.log($scope.search);
		if ($scope.search.length == 0){
			$scope.list = $scope.modules;
			return ;
		}
		else
		{
			for (var i = 0; i <= $scope.modules.length - 1; i++) {
				if ($scope.modules[i].name.search($scope.search.str) >= 0 || $scope.modules[i].description.search($scope.search.str) >= 0)
					$scope.list.push($scope.modules[i]);
			}
		}
	}
}