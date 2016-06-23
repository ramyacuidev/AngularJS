(
    function(){
        'use strict';
        angular.module('eKart')
               .controller('mainCtrl',['$scope',function($scope){
                   $scope.content = "I am the content";
                   $scope.brandname = "e-Kart";
                   $scope.loadcontent=function(type)
                   {
                       if(type=='login')
                           {   
                            $scope.contentUrl="/app/login/login.tpl.html";
                           }
                        if(type=='register')
                            {
                            $scope.contentUrl="/app/register/register.tpl.html";
                                console.log($scope.contentUrl);
                            }
                   }
               }]);
    }
)();
