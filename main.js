nose_x=0;
nose_y=0;

function preload(){
 mush_img= loadImage("https://i.postimg.cc/9Mbgc1RW/mushy.png");
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
console.log("POSE NET LOADED");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log(results[0].pose.nose.x);
    console.log(results[0].pose.nose.y);
    nose_x= results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;

    
}
}

function draw(){
image(video, 0, 0, 300, 300);
image(mush_img, nose_x-26, nose_y-5, 60, 50);

}
 
function take_snapshot(){
    save('your_image.jpg');
}