class YoutubeVideo{
    private title : string;
    private channel : string;
    private description : string;
    private noOfLikes : number;
    private noOfDislikes : number;
    private noOfViews : number;

    constructor(title : string,channel : string, description : string){
        this.title = title;
        this.channel = channel;
        this.description = description;
    }

    getDetails = () =>{
        return "title : "+this.title+" channel : "+this.channel+" description : "+this.description;
    }
    getNoOfLikes = () =>{
        return this.noOfLikes;
    }

    setNoOfLikes = (noOfLikes : number) =>{
        this.noOfLikes = noOfLikes;
    }

    getNoOfDislikes = () =>{
        return this.noOfDislikes;
    }

    setNoOfDislikes = (noOfDislikes : number) =>{
        this.noOfDislikes = noOfDislikes;
    }

    getNoOfView = () =>{
        return this.noOfViews;
    }

    setNoOfView = (noOfViews : number) =>{
        this.noOfViews = noOfViews;
    }

    getPublishedDate = () =>{
        console.log("Published Date");
    }

    getRelatedVideos = () =>{
        console.log("List of Related videos");
    }

    getLatestComment =() =>{
        console.log("Latest Comment");
    }

    getCommentWithMostLikes = () =>{
        console.log("Comment with the most likes");
    }
}

let video = new YoutubeVideo("Imagine Dragons - Bad Liar","Imagine Dragons","Album: Origins");

console.log(video.getDetails());
video.setNoOfView(15000000);
console.log("No of views = " + video.getNoOfView());
video.setNoOfLikes(1000000);
console.log("No of Likes = " + video.getNoOfLikes());
video.setNoOfDislikes(5000);
console.log("No of dislikes = " + video.getNoOfDislikes());
