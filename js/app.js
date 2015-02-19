// Init angular app
var app = angular.module('diaryApp', ['ngRoute']);

//	Routes Configuration
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/buffalo', {templateUrl: 'partials/bm.html', controller: 'myCtrl'}).
		when('/cow', {templateUrl: 'partials/cm.html', controller: 'myCtrl'}).
		otherwise({redirectTo: '/buffalo'});
}]);

//	Days Factory
app.factory("Days",function(){
        return [1,2,3,4,5,6,7,8,9,10,];
});
