var app = angular.module('track', []);
app.controller('details', function ($scope, $http, $filter) {
    $http.get("info.json")
        .then(function (response) {
            $scope.names = response.data.parcels;
            $scope.date = $scope.names[0].date;
            $scope.name = $scope.names[0].name;
            $scope.type = $scope.names[0].type;
            $scope.image = $scope.names[0].image;
            $scope.weight = $scope.names[0].weight;
            $scope.phone = $scope.names[0].phone;
            $scope.price = $scope.names[0].price;
            $scope.quantity = $scope.names[0].quantity;
            $scope.lat = $scope.names[0].live_location.latitude;
            $scope.lon = $scope.names[0].live_location.longitude;

            $scope.details = function (index) {
                var a = index;
                $scope.date = $scope.names[index].date;
                $scope.name = $scope.names[index].name;
                $scope.type = $scope.names[index].type;
                $scope.image = $scope.names[index].image;
                $scope.weight = $scope.names[index].weight;
                $scope.phone = $scope.names[index].phone;
                $scope.price = $scope.names[index].price;
                $scope.quantity = $scope.names[index].quantity;
                $scope.color = $scope.names[index].color;
                $scope.lat = $scope.names[index].live_location.latitude;
                $scope.lon = $scope.names[index].live_location.longitude;

            };
        });

});
