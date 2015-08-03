(function(){
	angular.module('MainModule',[

		])
	.controller('ContentController',function($scope){


	})

	.controller('SectionController',['$scope', '$http', function($scope, $http){

		var dataObj = {
				identifier : 'aacevedo',
				password: '123456789'

		};

		var res = $http.post('http://myafar.co:9000/auth/app', dataObj);
		res.success(function(data, status, headers, config) {
			$scope.InfoObj = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});	

	}])


})();