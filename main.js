function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO); 
    video.size(350, 250);
    video.hide();
    video.center();
}

function draw(){
    image(video, 150, 100 , 350, 250);

  fill(173,223,179);
  stroke(173,223,179);
  circle(50, 50, 80);

  circle(50, 430, 80);

  circle(590, 50, 80);

  circle(590, 430, 80);

  fill(240,226,182);
  stroke(240,226,182);
  rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
    

}

function take_snapshot(){
    save('Frame.png')
}
