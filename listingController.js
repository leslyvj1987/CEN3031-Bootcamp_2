angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.input="";
    $scope.showme = "false";
    $scope.showAddBtn="true";


    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      console.log("In addListing");

      $scope.showme = "false";

      if($scope.input !== "") {
        Listings.push($scope.input);
        $scope.input="";
      }
     
    };
    $scope.deleteListing = function(index) {
      console.log("In delete function");
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      console.log("In showDetails");
      $scope.showCode="true";
      $scope.detailedInfo = $scope.listings[index];
    };
    $scope.clearDetailedInfo = function(){
       $scope.detailedInfo = undefined;
    };

  }
]);