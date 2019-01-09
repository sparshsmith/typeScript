var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, channel, description) {
        var _this = this;
        this.getDetails = function () {
            return "title : " + _this.title + " channel : " + _this.channel + " description : " + _this.description;
        };
        this.getNoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.setNoOfLikes = function (noOfLikes) {
            _this.noOfLikes = noOfLikes;
        };
        this.getNoOfDislikes = function () {
            return _this.noOfDislikes;
        };
        this.setNoOfDislikes = function (noOfDislikes) {
            _this.noOfDislikes = noOfDislikes;
        };
        this.getNoOfView = function () {
            return _this.noOfViews;
        };
        this.setNoOfView = function (noOfViews) {
            _this.noOfViews = noOfViews;
        };
        this.getPublishedDate = function () {
            console.log("Published Date");
        };
        this.getRelatedVideos = function () {
            console.log("List of Related videos");
        };
        this.getLatestComment = function () {
            console.log("Latest Comment");
        };
        this.getCommentWithMostLikes = function () {
            console.log("Comment with the most likes");
        };
        this.title = title;
        this.channel = channel;
        this.description = description;
    }
    return YoutubeVideo;
}());
var video = new YoutubeVideo("Imagine Dragons - Bad Liar", "Imagine Dragons", "Album: Origins");
console.log(video.getDetails());
video.setNoOfView(15000000);
console.log("No of views = " + video.getNoOfView());
video.setNoOfLikes(1000000);
console.log("No of Likes = " + video.getNoOfLikes());
video.setNoOfDislikes(5000);
console.log("No of dislikes = " + video.getNoOfDislikes());
