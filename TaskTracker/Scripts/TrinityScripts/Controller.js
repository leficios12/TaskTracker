app.controller("TaskTrackerController", function ($scope, TaskTrackerService) {
    $scope.userArray = [];
    $scope.index = 0;


    //Registration Page functions
    $scope.registrationFunc = function () {

        //validation for empty fields
        if ($scope.firstName == "" || $scope.lastName == "" || $scope.userName == ""
            || $scope.Email == "" || $scope.Password == "" || $scope.ConfirmPassword == "" ||

            $scope.firstName == undefined || $scope.lastName == undefined || $scope.userName == undefined
            || $scope.Email == undefined || $scope.Password == undefined || $scope.ConfirmPassword == undefined

        ) {
            $scope.SweetAlertError("Please fill in everything.");

        }


        //length validation 
        else if ($scope.userName.length < 3 || $scope.userName.length > 20 ||
            $scope.firstName.length < 3 || $scope.firstName.length > 28 ||
            $scope.lastName.length < 3 || $scope.lastName.length > 28)
        {
            $scope.SweetAlertError("Username must be 3-20 characters, and First/Last Name must be 3-28 characters.");
        }


        //password confirmation validation
        else if ($scope.Password != $scope.ConfirmPassword) {
            $scope.SweetAlertError("Passwords do not match.");
        } 

        //
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test($scope.Password)) {
            $scope.SweetAlertError("Please enter a strong password. (8_characters,uppercase,lowercase,number, and a special character)");
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

    //Button Functions

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

    
    // function to fetch data from backend using service
    $scope.getMessage = function () {
        var getData = TaskTrackerService.fetchMessageFunc();
        getData.then(function (returnedData) {
            $scope.message = returnedData.data;
    });
}


 
});

