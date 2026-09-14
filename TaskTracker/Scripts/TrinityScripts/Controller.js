app.controller("TaskTrackerController", function ($scope, TaskTrackerService) {
    $scope.userArray = [];
    $scope.index = 0;

    //Registration function
    $scope.registrationFunc = function () {
        //validation for empty fields
        if ($scope.firstName == "" || $scope.lastName == "" || $scope.userName == ""
            || $scope.Email == "" || $scope.Password == "" || $scope.ConfirmPassword == "" ||

            $scope.firstName == undefined || $scope.lastName == undefined || $scope.userName == undefined
            || $scope.Email == undefined || $scope.Password == undefined || $scope.ConfirmPassword == undefined
            ) {
            $scope.SweetAlertError("Please fill in everything.");

        }

        //password confirmation validation
        else if ($scope.Password != $scope.ConfirmPassword) {
            $scope.SweetAlertError("Passwords do not match.");
        } 

        //email validation using regex

        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($scope.Email)) {
            $scope.SweetAlertError("Please enter a valid email address.");
        }

        //registration push array
        else {
            var userData = {
                id: $scope.index++,
                username: $scope.userName,
                firstname: $scope.firstName,
                lastname: $scope.lastName,
                email: $scope.Email,
                password: $scope.Password,
                confirmPassword: $scope.ConfirmPassword
                
            };
            //clear input fields after registration
            $scope.userArray.push(userData);
            $scope.SweetAlertSuccess("Successfuly Registered");

            $scope.userName = "";
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.Email = "";
            $scope.Password = "";
            $scope.ConfirmPassword = "";
        }
    }

    //SweetAlert messages

    //sweet alert error message
    $scope.SweetAlertError = function (message) {
        Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Okay'
        })
    }

    //Sweet alert success message
    $scope.SweetAlertSuccess = function (message) {
        Swal.fire({
            title: 'Success!',
            text: message,
            icon: 'success',
            confirmButtonText: 'Okay'
        })
    }


    //sweet alert confirmation
    $scope.SweetAlertQuestion = function (message, confirmMessage, denyMessage, onConfirm) {
        Swal.fire({
            title: message,
            showDenyButton: true,
            confirmButtonText: confirmMessage,
            denyButtonText: denyMessage
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm();
                Swal.fire("Saved!", "", "success");
            }
            else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };

    //Clear function
    $scope.clearFunc = function () {
        $scope.userName = "";
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.Email = "";  
        $scope.Password = "";
        $scope.ConfirmPassword = "";
        
    }

    //Edit function 
    $scope.editFunc = function (userid) {
        var userdata = $scope.userArray[userid];
        userdata.username = $scope.userName;
        userdata.firstname = $scope.firstName;
        userdata.lastname = $scope.lastName;
        userdata.email = $scope.Email;
        userdata.password = $scope.Password;
        userdata.confirmPassword = $scope.ConfirmPassword;
    }

    //Delete function
    $scope.deleteFunc = function (index) {
        $scope.SweetAlertQuestion(
            "Are you sure you want to delete this record?",
            "Yes, delete it!",
            "No, keep it",
            function () {
                $scope.userArray.splice(index, 1);
                $scope.$apply();
            }
        );
    }



    //Redirection functions

    $scope.redirectHomePage = function () {
        window.location.href = "/Module/HomePage";
    }

    $scope.redirectAboutPage = function () {
        window.location.href = "/Module/AboutPage";
    }

    $scope.redirectContactPage = function () {
        window.location.href = "/Module/ContactPage";
    }

    $scope.redirectLoginPage = function () {
        window.location.href = "/Module/LoginPage";
    }

    $scope.redirectRegistrationPage = function () {
        window.location.href = "/Module/RegistrationPage";
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