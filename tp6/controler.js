var meteoControllers = angular.module('meteoControllers', []);

meteoControllers.controller('MainController', ['$scope', '$http',
	function($scope, $http) {
		$scope.recherche = function() {
			/* appel AJAX à l’API openweathermap */
			$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid=84b1ad7d5c74af6f4a273abe6e580333')
				.success(function(data) {
					/* on met dans l’objet ​ meteo les données retournées
					par openweathermap */
					$scope.meteo = data;
				}).error(function(data) {
					/* en cas d’erreur */
					$scope.errorMsg = "Hum. Error... please retry.";
				});
			}
/*
		$scope.gps = function() {

			// js geoloc




			$http.get('https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid=84b1ad7d5c74af6f4a273abe6e580333')
				.success(function(data) {
					
					$scope.meteo = data;
				}).error(function(data) {
					
					$scope.errorMsg = "Hum. Error... please retry.";
				});
			}*/
	}]);

/*
.controler('getCurrentPosition', function(deviceReady, $document, $window, $rootScope){
  return function(done) {
    deviceReady(function(){
      navigator.geolocation.getCurrentPosition(function(position){
        $rootScope.$apply(function(){
          done(position);
        });
      }, function(error){
        $rootScope.$apply(function(){
          throw new Error('Unable to retreive position');
        });
      });
    });
  };
});

*/





