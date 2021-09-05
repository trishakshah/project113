function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,700,500);
    rect(0,0,10,500);
    stroke("purple");
    fill("purple");
    rect(690,0,10,500);
    stroke("purple");
    fill("purple");
    rect(0,0,700,10);
    stroke("purple");
    fill("purple");
    rect(0,490,700,10);
    stroke("purple");
    fill("purple");
}

function takeSnapshot(){
    save("frame.png");
}