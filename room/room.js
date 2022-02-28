var isDragging = false;
var startX = 0;
var startY = 0;
var dragItem = new Image();

var originalLocations = [];
var allNames = [];
function placeItems(){
    var textHeight = 0;
    var imgHeight = 50;
    var items = document.getElementById("items");
    
    for (let i = 0; i < furnitureArray.length; i++){
        var newDiv = document.createElement("div");
        var newText = document.createElement('h5');
        newText.innerHTML = furnitureArray[i].name;
        allNames[i] = furnitureArray[i].name;
    
        newText.style.left = 310+"px";
      
    
        newText.style.top = textHeight + "px";
        textHeight = textHeight + furnitureArray[i].dimensions.height + 35;
       
    

        newDiv.appendChild(newText);
        
        var image = document.createElement("img");
        image.alt = furnitureArray[i].name;
        image.src = furnitureArray[i].image;

        image.style.left = 310 + "px";
        image.style.top = imgHeight + "px";
        originalLocations[i] = imgHeight;
        imgHeight = imgHeight + furnitureArray[i].dimensions.height + 35;
     
//
//        image.addEventListener("mousemove", handleMouseMove);
//        image.addEventListener("mousedown", handleMouseDown);
//        image.addEventListener("mouseup", handleMouseUp);
          
        newDiv.style.marginBottom = "10px";
        newDiv.appendChild(image);
   
        items.appendChild(newDiv);
    }
}



function handleMouseDown(event) {
    var images = document.querySelectorAll('img');



    for (let i = 0; i<images.length; i++){
            var left2 = images[i].style.left;
            var leftOfImage2 = parseFloat(left2.substring(0, left2.length -2));
            var rightOfImage2 = leftOfImage2 + furnitureArray[i].dimensions.width;

            var top2= images[i].style.top;
            var topOfImage2 = parseFloat(top2.substring(0, top2.length -2));
            var bottomOfImage2 = topOfImage2 + furnitureArray[i].dimensions.height;
            if ((leftOfImage2 <= event.clientX && rightOfImage2 >= event.clientX && topOfImage2 <= event.clientY
                && bottomOfImage2 >= event.clientY )){
                    dragItem = images[i];
                    images[i].style.zIndex = "2";
                    isDragging = true;

                }


        }
    
    startX = event.clientX;
    startY = event.clientY;
    event.preventDefault();


}

function isOnTop(){
    var targ = dragItem;
    var index = 0;
    for (let i = 0; i<allNames.length; i++){
        if (targ.alt == allNames[i]){
            index = i;
     
        }
    }
    
    var left1 = targ.style.left;
    var leftOfImage = parseFloat(left1.substring(0, left1.length -2));
    var rightOfImage = leftOfImage + furnitureArray[index].dimensions.width;

    var top1 = targ.style.top;
    var topOfImage = parseFloat(top1.substring(0, top1.length -2));
    var bottomOfImage = topOfImage + furnitureArray[index].dimensions.height;

   
    var images = document.querySelectorAll('img');
    for (let i = 0; i< images.length; i++){
        if (i != index){
      
            var left2 = images[i].style.left;
            var leftOfImage2 = parseFloat(left2.substring(0, left2.length -2));
            var rightOfImage2 = leftOfImage2 + furnitureArray[i].dimensions.width;
            
            var top2= images[i].style.top;
            var topOfImage2 = parseFloat(top2.substring(0, top2.length -2));
       
            var bottomOfImage2 = topOfImage2 + furnitureArray[i].dimensions.height;

            
            if (leftOfImage >= leftOfImage2 && leftOfImage <= rightOfImage2 && topOfImage >= topOfImage2 && topOfImage <= bottomOfImage2){
                return true;
            }
            else if (rightOfImage >= leftOfImage2 && rightOfImage <= rightOfImage2 && topOfImage >= topOfImage2 && topOfImage <= bottomOfImage2){
                return true;
            }
            else if(leftOfImage >= leftOfImage2 && leftOfImage <= rightOfImage2 && bottomOfImage >= topOfImage2 && bottomOfImage <= bottomOfImage2){
                return true;
            }
            else if(leftOfImage <= leftOfImage2 && rightOfImage >= leftOfImage2 && bottomOfImage <= bottomOfImage2 && bottomOfImage >= topOfImage2 ){
                return true;
            }
            else if(leftOfImage <= leftOfImage2 && rightOfImage >= rightOfImage2 && topOfImage <= bottomOfImage2 && topOfImage >= topOfImage2){
                return true;
            }
          
    
            
        }
        
    }


    return false;
}

function resetPosition(){
    var targ = dragItem;
    var index = 0;
    targ.style.left = "310px";
    for (let i = 0; i<allNames.length; i++){
        if (targ.alt == allNames[i]){
            index = i;

        }
    }
    targ.style.top = originalLocations[index] + "px";

}
function handleMouseUp() {
	if (isDragging) {
		isDragging = false;		
    }
    var reset = isOnTop();
    if (reset == true){
        resetPosition();
        console.log("resetting");
    }

    dragItem.style.zIndex = "1";
    document.body.style.cursor = "default";

}

function handleMouseMove(evt) {
     
	if (isDragging) {
		var map = dragItem;
        
        var leftStyle =  map.offsetLeft + (evt.clientX- startX) ;
        var topStyle =  map.offsetTop + (evt.clientY- startY) ;
        
        map.style.left = leftStyle + "px";
        
        map.style.top = topStyle + "px";

        startX = evt.clientX;
        startY = evt.clientY;
    
        evt.preventDefault();
        
   
    }
    if (isDragging){
       document.body.style.cursor = "move" ;
    }
    else{
        document.body.style.cursor = "default";
    }
}

function restart(){
    var myDiv = document.getElementById("items");
    myDiv.innerHTML = "";
    placeItems();
    isDragging = false;
    startX = 0;
    startY = 0;


    var images = document.querySelectorAll('img');
    for (let i = 0; i<images.length ;i++){
        images[i].style.zIndex = "1";
    }

}

function moveOneImg(image, index){
    image.style.left = "310px";
    image.style.top = originalLocations[index] + "px";
}

function cleanUp(){
    var images = document.querySelectorAll('img');
    var borderTop = 25;
    var borderBottom = 25+200;
    var borderLeft = 25;
    var borderRight = 25+200;

    for (let i = 0; i<images.length; i++){
        var left2 = images[i].style.left;
        var leftOfImage2 = parseFloat(left2.substring(0, left2.length -2));
        var rightOfImage2 = leftOfImage2 + furnitureArray[i].dimensions.width;
        
        var top2= images[i].style.top;
        var topOfImage2 = parseFloat(top2.substring(0, top2.length -2));
        var bottomOfImage2 = topOfImage2 + furnitureArray[i].dimensions.height;
        if (!(leftOfImage2 >= borderLeft && leftOfImage2 <= borderRight && rightOfImage2 >= borderLeft && rightOfImage2 <= borderRight && topOfImage2 >= borderTop 
            && topOfImage2 <= borderBottom && bottomOfImage2 >= borderTop && bottomOfImage2 <= borderBottom)){
                moveOneImg(images[i], i);
            }


    }
}



window.addEventListener("load", placeItems, false);
document.getElementsByName("cleanupButton")[0].addEventListener("click", cleanUp, false);
document.getElementsByName("restartButton")[0].addEventListener("click", restart, false);

 document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
