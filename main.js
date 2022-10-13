 function preload()
{

}


function setup() 
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw() 
{
    
}


function modelLoaded() {
    console.log('PoseNet is Initialized');
}


function gotPoses(results)
{

    if (results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
    }
}

function take_snapshot() {
    save('myFilterImage.png');
}