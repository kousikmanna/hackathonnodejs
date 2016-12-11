
var app = angular.module("newApp", []);

app.controller("newAppCtrl", function($scope, $http) {
        $http({url: '/profiles',		
		    method : 'GET',
		}).success(function(data, status, headers, config) {
			$scope.users = data
			// console.log('data', data);
		}).error(function(data, status, headers, config) {
			alert(status)
		})


		$scope.getRelatedProfile = function(user){
			 $http({
	        	url: '/related/profiles_detail',		
			    method : 'POST',
			    data: user,
			}).success(function(data, status, headers, config) {
				
			}).error(function(data, status, headers, config) {
				alert(status)
			})
		}
});