lipsX=0;
lipsY=0;

function preload() {
    lipstick = loadImage('https://i.postimg.cc/mrmh3YBF/lipstick.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    lipsX = results[0].pose.nose.x-25;
    lipsY = results[0].pose.nose.y+15;
    console.log("lips x = " + lipsX);
    console.log("lips y = " + lipsY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(lipstick, lipsX, lipsY, 20);
}

function take_snapshot() {
    save('myFilterImage.png');
}
