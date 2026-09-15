app.service("TaskTrackerService", function ($http) {

    //service function to fetch data from backend
    this.fetchMessageFunc = function () {
        return $http.get("/Module/GetMessage");
    }
});