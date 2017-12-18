var app = angular.module('myApp', []);
app.controller('myCont',
    function ($scope, $http) {
        $scope.appendPassword = "td123";
        $scope.addCusip = "";
        $scope.addSymbol = "";
        var request = {
            method: 'get',
            url: 'data/info.json',
            dataType: 'json',
            contentType: "application/json"
        };

        $scope.stockList = [];

        $http(request)
            .success(function (jsonData) {
                $scope.stockList = jsonData;
                $scope.list = $scope.stockList;
            })
            .error(function () {

            });
//        $scope.addStock = function() {
//            $scope.updatedList = new Array();
//            $scope.updatedList = $scope.list;
//            $scope.updatedList.push({"cusip": $scope.addCusip,"symbol": $scope.addSymbol});
//
        //           $http.post('info.json', updatedList).success(
        //             $http(request).success(function (jsonData) {
//                    $scope.stockList = jsonData;
//                    $scope.list = $scope.stockList;
//                })
//                    .error(function () {
//
//                    })
//            )
//        };
    });

