app.controller("mealPlannerCtrl", function($scope) {
	$scope.recipelist = {};
	$scope.ingredients = [""];

	$scope.addIngredient = function() {
		$scope.ingredients.push("");
	};
	
	$scope.addRecipe = function() {
		// If any of the fields are empty, don't add the recipe
		if (!$scope.name || !$scope.instructions)
			return;

		// Create ID for recipe
		var today = new Date();
		var id = today.getTime();

		// Create recipe object
		var recipe = {};
		recipe['name'] = $scope.name;
		recipe['ingredients'] = [];
		console.log($scope.ingredients);
		for (var i = 0; i < $scope.ingredients.length; i++)
		{
			console.log($scope.ingredients[i]);
			recipe['ingredients'].push($scope.ingredients[i]);
		}
		recipe['instructions'] = $scope.instructions;
		$scope.recipelist[id] = recipe;
	};
});
