app.controller("TaskTrackerController", function ($scope, TaskTrackerService) {
    $scope.userArray = [];

    $scope.registrationFunc = function () {
        if ($scope.firstName == "" || $scope.lastName == "" || $scope.firstName == undefined || $scope.lastName == undefined) {
            alert("Please fill all the fields");
        }
        else {
            var userData = {
                firstname: $scope.firstName,
                lastname: $scope.lastName
            };
            $scope.userArray.push(userData);
        }
    }


    $scope.clearFunc = function () {
        $scope.firstName = "";
        $scope.lastName = "";
    }
 
});

/*
    //Normal Function
    $scope.nameofFunc = function () {
        alert("working")
    }
*/
/*
    //Function with params
    $scope.testFunc = function (parameterTest) {
        alert(parameterTest);
    }

    //access scope variable in frontend
     $scope.titleFunc = function () {
        $scope.title = "Title test";
    }
    <p ng-init="titleFunc()">{{title}}</p>

    
*/

/*
//take input functions
   $scope.registrationFunc = function () {
        alert($scope.firstName + " " + $scope.lastName);
 }
    $scope.clearFunc = function () {
        $scope.firstName = "";
        $scope.lastName = "";
    }

<p ng-init="titleFunc()"></p>
<input type="text" ng-model="firstName"/>
<input type="text" ng-model="lastName"/>
<button ng-click="registrationFunc()">Submit</button>
<button ng-click="clearFunc()">Clear</button>
    */