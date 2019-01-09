class FaceBookProfile{
    private firstName : string;
    private lastName : string;
    private dob : string;
    private profileId : string;
    private phoneNumber : number;
    private noOfFriends : number;
    private currentLocation : string;

    constructor(firstName : string, lastName : string, profileId : string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.profileId = profileId;
    }

    getFullName = () =>{
        return this.firstName+" "+this.lastName;
    }

    getDob = () =>{
        return this.dob;
    }

    setDob = (dob : string) =>{
        this.dob = dob;
    }

    getAge = () =>{
        return "Age is (current date - " + this.dob+")";
    }

    getPhoneNumber = () =>{
        return this.phoneNumber;
    }

    setPhoneNumber = (phoneNumber : number) =>{
        this.phoneNumber = phoneNumber;
    }

    getNoOfFriends = () =>{
        return this.noOfFriends;
    }

    setNoOfFriends = (noOfFriends : number) =>{
        this.noOfFriends = noOfFriends;
    }

    getCurrentLocation = () =>{
        return this.currentLocation;
    }

    setCurrentLocation = (currentLocation : string) =>{
        this.currentLocation = currentLocation;
    }

    getAllPhotos = () =>{
        console.warn("All photos");
    }

    getAllVideos = () =>{
        console.warn("All videos");
    }

    getAllCheckins = () =>{
        console.warn("All checkins");
    }
}

let profile = new FaceBookProfile("Sparsh","Smith","1234");

profile.setCurrentLocation("Hyderabad");
profile.setDob("02 Feb 1993");
profile.setNoOfFriends(600);
profile.setPhoneNumber(9876543210);

console.log("Full Name : " + profile.getFullName());
console.log(profile.getAge());
console.log("Contact no : " + profile.getPhoneNumber());