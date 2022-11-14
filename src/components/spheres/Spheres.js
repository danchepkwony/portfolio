import React from 'react';
import Sketch from "react-p5";
import './Spheres.scss';

const Spheres = () => {

  function setup(p5, canvasParentRef) { 
    p5.createCanvas(p5.windowWidth/1.75, p5.windowWidth/1.75, p5.WEBGL).parent(canvasParentRef);
  } 
  
  function draw(p5) { 
    p5.background('rgba(255,255,255, 0)');

    var locX = p5.mouseX - p5.height / 2;
    var locY = p5.mouseY - p5.width / 2;

    p5.ambientLight(50);
    p5.directionalLight(185, 255, 173, 0.25, 0.25, 0);
    p5.pointLight(217, 217, 217, locX, locY, 250);

    p5.stroke(217, 217, 217);
    p5.noStroke();
    p5.push();

    p5.rotateX(
      (window.innerHeight/2 - p5.mouseY) / (window.innerHeight/2) );
    p5.rotateY(
      - (window.innerWidth/2 - p5.mouseX) / (window.innerWidth/2) );
    p5.push();
    
    p5.rotateY(p5.millis() / 1000);
    p5.specularMaterial(250);
    p5.sphere(p5.width/15);
    
    p5.pop();
    p5.push();
  
    p5.rotateY(-p5.millis() / 1000);
    p5.specularMaterial(250);
    p5.shininess(50);
    p5.torus(p5.width/5); 
    
    p5.pop();
    p5.push();
    
    p5.rotateX(-p5.millis() / 500);
    p5.specularMaterial(250);
    p5.shininess(50);
    p5.torus(p5.width/3); 
  }

  function windowResized(p5) {
    p5.resizeCanvas(p5.windowWidth/1.75, p5.windowWidth/1.75);
  }

	return <Sketch className="canvas" setup={setup} draw={draw} windowResized={windowResized}/>;
};

export default Spheres;