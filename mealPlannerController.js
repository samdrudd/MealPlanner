app.controller("mealPlannerCtrl", function($scope) {
	$scope.recipelist = {};
	
	$scope.addRecipe = function() {
		// If any of the fields are empty, don't add the recipe
		if (!$scope.name || !$scope.ingredient1 || !$scope.instructions)
			return;

		// Create ID for recipe
		var today = new Date();
		var id = today.getTime();

		// Create recipe object
		var recipe = {};
		recipe['name'] = $scope.name;
		recipe['ingredients'] = [];
		recipe['ingredients'].push($scope.ingredient1);
		recipe['instructions'] = $scope.instructions;
		$scope.recipelist[id] = recipe;
	}
});
