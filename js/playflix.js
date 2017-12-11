angular.module('playflix', []).controller('calendar', function($scope, $http) {
    var proxy = 'https://cors.now.sh/';
    var endpoint = 'https://yts.ag/api/v2/';
    var days = 'list_movies.json';
    var hours = 'movie_details.json?movie_id=';
    var page = 1;
    var limit = '&limit=24';
    var aux = '?page=';  

    var urlCatalog = proxy+endpoint+days+limit+aux+page;

    // MOVIES      
    function catalog(page) {
        $http.get(urlCatalog).
            then(function(response) {
                $scope.days = response.data.data.movies;
            });   
    }  

    catalog();         

    // MOVIE  
    $scope.daySelector = function(daySelected) {  
        var urlMovie = proxy+endpoint+hours+daySelected;
        $http.get(urlMovie).
            then(function(response) {
                $scope.hours = response.data.data.movie;
                console.log("$scope.hours: "+$scope.hours);
            });          
    }

    // SCROLL
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            page = page + 1;
        }
        catalog(page);
    });     
   
});