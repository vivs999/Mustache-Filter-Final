noseX=0;
noseY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/vmQmfGMt/1-15421-mustache-printable-mustache-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.position(625,320);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
}

function modelLoaded(){
    console.log("Posenet is Active!XD");
    poseNet.on("pose", gotPose);
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video,0,0,500,400);
    image(mustache,noseX-60,noseY+10,120,25);
}

function snap(){
    save ('Mustache.png');
}