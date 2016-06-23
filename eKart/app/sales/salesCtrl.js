(
    function()
    {
        'use strict';
        angular.module("eKart.sales")
               .controller('salesCtrl',['$scope',
                                        'salesSvc',
                                        function($scope,salesSvc){
                                        function init()
                                            {
                                                salesSvc.getSalesData()
                                                        .then(function(response){
                                                            $scope.salesInfo=response.data.sales;
                                                })
                                                        .catch(function(response){
                                                            console.log("error message");    
                                                })
                                            }            
               }]);
    }
)();