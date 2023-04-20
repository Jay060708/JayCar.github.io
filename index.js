function Video(title, uploader){
	this.title = title;
	this.uploader = uploader;
	this.seconds = 60;
}
// A method on the object 
Video.prototype.watch = function() {
	this.seconds = this.seconds;
	console.log("You watched all" + this.seconds + " seconds of Otters Holding Hands!");
}

var video = new Video ("Robot Dreames", "Isaac Asimov");
video.watch();
var video2 = new Video ("adfkjh", "lakhjdf");

var videos = [
    {title: "Harry Potter 1", author: "JK", seconds: 6},
    {title: "Harry Potter 2", author: "JK So", seconds: 7},
    {title: "Harry Potter 3", author: "JK SOCC", seconds: 8},
    {title: "Harry Potter 4", author: "JK SOCCER", seconds: 9}
];

for (var i = 0; i< videos.length; i++){
    var videossssss = new Video(videos[i].title, videos[i].author, videos[i].seconds)
    videossssss.watch();
}
function MusicVideo(title, uploader, cover ){
    Video.call(this, title, uploader)
    this.cover = cover;
}
MusicVideo.prototype = Object.create(Video.prototype);
MusicVideo.prototype.watch = function(){
    console.log( "You rocked out to La Bamba by Ritchie Valens!.");
    this.seconds = 0;
}
var video11 = new MusicVideo("jakjfld;", "kajldsf;", 098);
function Video (config){
    this.title = config.title || "Untitiled";
    this.uploader = config.uploader || "jkafd;";
    this.seconds = config.seconds || 60; 

}
video11.watch()