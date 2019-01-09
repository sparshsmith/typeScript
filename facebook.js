var FaceBookProfile = /** @class */ (function () {
    function FaceBookProfile(firstName, lastName, profileId) {
        var _this = this;
        this.getFullName = function () {
            return _this.firstName + " " + _this.lastName;
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.setDob = function (dob) {
            _this.dob = dob;
        };
        this.getAge = function () {
            return "Age is (current date - " + _this.dob + ")";
        };
        this.getPhoneNumber = function () {
            return _this.phoneNumber;
        };
        this.setPhoneNumber = function (phoneNumber) {
            _this.phoneNumber = phoneNumber;
        };
        this.getNoOfFriends = function () {
            return _this.noOfFriends;
        };
        this.setNoOfFriends = function (noOfFriends) {
            _this.noOfFriends = noOfFriends;
        };
        this.getCurrentLocation = function () {
            return _this.currentLocation;
        };
        this.setCurrentLocation = function (currentLocation) {
            _this.currentLocation = currentLocation;
        };
        this.getAllPhotos = function () {
            console.warn("All photos");
        };
        this.getAllVideos = function () {
            console.warn("All videos");
        };
        this.getAllCheckins = function () {
            console.warn("All checkins");
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.profileId = profileId;
    }
    return FaceBookProfile;
}());
var profile = new FaceBookProfile("Sparsh", "Smith", "1234");
profile.setCurrentLocation("Hyderabad");
profile.setDob("02 Feb 1993");
profile.setNoOfFriends(600);
profile.setPhoneNumber(9876543210);
console.log("Full Name : " + profile.getFullName());
console.log(profile.getAge());
console.log("Contact no : " + profile.getPhoneNumber());
