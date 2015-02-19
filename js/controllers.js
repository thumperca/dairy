//	Controllers - myCtrl
app.controller('myCtrl', ['$scope', '$document', '$rootScope', 'Days', '$route', '$location', function($scope, $document, $rootScope, Days, $route, $location) {
	
	//	Regular Data
	$scope.times = ['Morning','Evening'];		//	Shifts
	$scope.days = Days;							//	Days
	$scope.offset = 0;							//	Offset for higher rates on Doraha
	$scope.rateClass = 'Normal';				//	Normal Rates are default
	$scope.notRateClass = 'Doraha';				//	higher rates are optional

	// 	Conditional based on current route
	if ( window.top.location.href.indexOf('#/buffalo') > 0 ) {
		$scope.milkType = 'buffalo';
		$rootScope.milkType = $scope.milkType;
		$scope.notMilkType = 'cow';
	} else if ( window.top.location.href.indexOf('#/cow') > 0 ) {
		$scope.milkType = 'cow';
		$rootScope.milkType = $scope.milkType;
		$scope.notMilkType = 'buffalo';
	}


	//	Functions
	$scope.e = function(num) {
		if ( num % 2 == 0 ) return 'e';
	};
	$scope.class = function(current, required) {
		if ( current == required ) return 'total'; 
	};
	$scope.switch = function(type){
		var temp;
		if ( type == 'milk' ) {
			temp = $scope.milkType;
			$scope.milkType = $scope.notMilkType;
			$scope.notMilkType = temp;
		} else if ( type == 'rate' ) {
			temp = $scope.rateClass;
			$scope.rateClass = $scope.notRateClass;
			$scope.notRateClass = temp;
		} else if ( type == 'days' ) {
			if ( Days.length == 10 ) {
				Days.push(11);
			} else if ( Days.length == 11 ) {
				Days.pop(11);
			}
		}
		//	Update offset for change in rates
		if ( $scope.rateClass == 'Normal' ) {
			$scope.offset = 0;
		} else if ( $scope.rateClass == 'Doraha' ) {
			if ( $scope.milkType == 'cow' ) {
				$scope.offset = 1;
			} else if ( $scope.milkType == 'buffalo' ) {
				$scope.offset = 3;
			}
		}
	};


	//	Keyboard Events
	$document.on('keydown', function(event){
		// Pressing x
		if ( event.which == 88 ) {
			$route.reload();
		}
		// Pressing z
		if ( event.which == 90 ) {
			$location.path($scope.notMilkType);
		}
	});


	//	Auto-Focus on first input element
	angular.element(document).ready(function () {
        document.getElementsByTagName('input')[0].focus();
    });

	//	Current market rates for BM & CM
	$scope.bmrate = 52 / 10;
	$scope.cmrate = {
		2.0 : 18,
		2.5 : 21,
		3.0 : 21.89,
		3.1 : 22.16,
		3.2 : 22.42,
		3.3 : 22.69, 
		3.4 : 22.95,
		3.5 : 23.22,
		3.6 : 23.48,
		3.7 : 23.75,
		3.8 : 24.01,
		3.9 : 24.28,
		4.0 : 24.54,
		4.1 : 24.81,
		4.2 : 25.07,
		4.3 : 25.34,
		4.4 : 25.6,
		4.5 : 25.87,
		5.0 : 26,
	};
}]);
