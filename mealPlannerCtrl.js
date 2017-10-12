app.controller("mealPlannerCtrl", function($scope, $http) {
	$scope.recipe = {};
	$scope.recipe.ingredients = [""];
	$scope.recipe.name = "";
	$scope.recipe.instructions = "";

	$scope.addIngredient = function() {
		if ($scope.recipe.ingredients.length > 0 && $scope.recipe.ingredients[$scope.recipe.ingredients.length - 1].trim() != "")
			$scope.recipe.ingredients.push("");
	};
	
	$scope.addRecipe = function() {
		// If any of the fields are empty, don't add the recipe
		if (!$scope.recipe.name || !$scope.recipe.instructions || $scope.recipe.ingredients == [""])
			return;

		$http({
			url: "http://127.0.0.1:8000/recipe",
			method: "POST",
			data: $.param($scope.recipe),
			headers: { "Content-Type": "application/x-www-form-urlencoded"}})
		.then(function successCallback(response) {
			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response.statusText);
		});

	};

	$scope.removeIngredient = function(id) {
		$scope.recipe.ingredients.splice(id,1);
	}

	$scope.resetForm = function() {
		$scope.recipe.name = "";
		$scope.recipe.ingredients = [""];
		$scope.recipe.instructions = "";
	}
});
