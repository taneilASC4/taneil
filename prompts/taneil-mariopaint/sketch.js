function setup() {
  createCanvas(1000, 1000);
  background(153);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, random(10,50), random(10,50));
  // prevent default
  fill('red', 'blue', 'green');
  return false;
}


