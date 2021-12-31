isDragging = false;
var left1 = 0;
var top1 = 0;
var preloadedImages = [];
var photoSources = ["map-s.gif" , "map-m.gif", "map-l.gif", "map-xl.gif"];
var photoWidths = [1283, 2047, 3063, 4084];
var photoHeights = [997, 1589, 2373, 3164];
var photoIndex = 1;

function handleMouseDown(evt) {
    isDragging = true;
    
    left1 = evt.clientX;
    top1 = evt.clientY;
    evt.preventDefault();
}

function handleMouseUp() {
	if (isDragging) {
		isDragging = false;		
    }
    document.body.style.cursor = "default";

}

function handleMouseMove(evt) {
	if (isDragging) {
		var map = document.getElementById("map");
        
        var leftStyle =  map.offsetLeft + (evt.clientX- left1) ;
        var topStyle =  map.offsetTop + (evt.clientY- top1) ;
        
        map.style.left = leftStyle + "px";
        
        map.style.top = topStyle + "px";

        left1 = evt.clientX;
        top1 = evt.clientY;
      
        evt.preventDefault();
        
   
    }
    if (isDragging){
       document.body.style.cursor = "move" ;
    }
    else{
        document.body.style.cursor = "default";
    }
}

function preload(){
   
	for (let i = 0; i < photoSources.length; i++){
		preloadedImages[i] = new Image();
		preloadedImages[i].src = photoSources[i];
	}
}

function resizeFrame(){
    var calculateSpace = (window.innerWidth * 0.85 - 40);
	document.getElementById("frame").style.width = calculateSpace + "px";

	calculateSpace = (window.innerHeight - 150);
	document.getElementById("frame").style.height = calculateSpace + "px";
}

function handleDblClick(evt){
   
     var xCoord = evt.clientX -70;
     var yCoord = evt.clientY -70;
     var height = document.getElementById("frame").style.height;
     var centerY = (parseFloat(height.substring(0, height.length -2 ))+20) / 2;
    
     var width = document.getElementById("frame").style.width;
     var centerX = (parseFloat(width.substring(0, width.length -2 ))+20) / 2;

     var style = map.offsetLeft + (centerX - xCoord);
     map.style.left = style + "px";

     style = map.offsetTop + (centerY - yCoord);

     map.style.top = style + "px";
}

function scrollUp(){
    var scrollHelper = (document.getElementById("frame").style.height);
    var toAdd = parseFloat(scrollHelper.substring(0, scrollHelper.length -2 ));

    var style = map.offsetTop + (toAdd/2);

    
    map.style.top = style + "px";
}

function scrollLeft(){
    var scrollHelper = (document.getElementById("frame").style.width);
    var toAdd = parseFloat(scrollHelper.substring(0, scrollHelper.length -2 ));

    var style = map.offsetLeft + (toAdd/2);

    
    map.style.left = style + "px";
    

}

function scrollRight(){
    var scrollHelper = (document.getElementById("frame").style.width);
    var toAdd = parseFloat(scrollHelper.substring(0, scrollHelper.length -2 ));
    var style = map.offsetLeft - (toAdd/2);

    
    map.style.left = style + "px";

}

function scrollDown(){
    var scrollHelper = (document.getElementById("frame").style.height);
    var toAdd = parseFloat(scrollHelper.substring(0, scrollHelper.length -2 ));

    var style = map.offsetTop - (toAdd/2);

    
    map.style.top = style + "px";

}

function zoomIn(){
    var map = document.getElementById("map");
  

    var leftOff = map.offsetLeft;
    console.log(leftOff);
    
    var topOff = map.offsetTop;
    console.log(topOff);
    
    var height = document.getElementById("frame").style.height;
    console.log(height);
    var width = document.getElementById("frame").style.width;
    console.log(width);

    var centerY = (parseFloat(height.substring(0, height.length -2 ))+20) / 2;
    console.log(centerY);
    var centerX = (parseFloat(width.substring(0, width.length -2 ))+20) / 2;
    console.log(centerX);
    var imgCx = centerX - leftOff;
    console.log(imgCx);
   
 
    var imgCy = centerY - topOff;
    console.log(imgCy);
   
    var imgPx = imgCx / photoWidths[photoIndex];
    console.log(imgPx + "IMGPX");
    var imgPy = imgCy / photoHeights[photoIndex];
    console.log(imgPy + "IMGPY");

    photoIndex = Math.min(3, photoIndex+1); //change
    map.src = photoSources[photoIndex];
   

    var style = ((imgPx * photoWidths[photoIndex]) - centerX)* -1;
    console.log(style);
    map.style.left = style + "px";

    style = ((imgPy * photoHeights[photoIndex]) - centerY)* -1;
    console.log(style);
    map.style.top = style + "px";


}

function zoomOut(){
    var map = document.getElementById("map");
  

    var leftOff = map.offsetLeft;
    
    var topOff = map.offsetTop;
    
    var height = document.getElementById("frame").style.height;
    var width = document.getElementById("frame").style.width;

    var centerY = (parseFloat(height.substring(0, height.length -2 ))+20) / 2;
    var centerX = (parseFloat(width.substring(0, width.length -2 ))+20) / 2;
    var imgCx = centerX - leftOff;
    var imgCy = centerY - topOff;
  
    var imgPx = imgCx / photoWidths[photoIndex];
    var imgPy = imgCy / photoHeights[photoIndex];

    photoIndex = Math.max(0, photoIndex-1); //change
    map.src = photoSources[photoIndex];
   

    var style = ((imgPx * photoWidths[photoIndex]) - centerX)* -1;
    map.style.left = style + "px";

    style = ((imgPy * photoHeights[photoIndex]) - centerY)* -1;
    map.style.top = style + "px";
}

document.getElementById("frame").addEventListener("mousemove", handleMouseMove);
document.getElementById("frame").addEventListener("mousedown", handleMouseDown);
document.getElementById("frame").addEventListener("mouseup", handleMouseUp);
document.getElementById("frame").addEventListener("dblclick", handleDblClick);

document.getElementsByName("goUp")[0].addEventListener("click", scrollUp);
document.getElementsByName("goLeft")[0].addEventListener("click", scrollLeft);
document.getElementsByName("goRight")[0].addEventListener("click", scrollRight);
document.getElementsByName("goDown")[0].addEventListener("click", scrollDown);

document.getElementsByName("zoomIn")[0].addEventListener("click", zoomIn);
document.getElementsByName("zoomOut")[0].addEventListener("click", zoomOut);



window.addEventListener("resize", resizeFrame, false);
window.addEventListener("load", resizeFrame);
window.addEventListener("load", preload);