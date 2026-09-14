app.service("TaskTrackerService", function ($http) {
    this.fetchFunc = function () {
        return $http.get("/Module/GetUsername")
    }

});