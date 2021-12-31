

function changePhoto() {
  
    var eleColorList = document.getElementById("colors");
    var selectedColor = eleColorList.options[eleColorList.selectedIndex].value + ".jpg";
    var eleCarPhoto = document.getElementById("photo");
    eleCarPhoto.src = selectedColor;
 }
 function setTotal(){
    var totalPrice = calTotal();
    var eTotalPrice = document.getElementById("pricebox");
   
    eTotalPrice.innerText = "";
    eTotalPrice.innerHTML = "$" + totalPrice + ".00";
    
    
    
 
 }

 
 function calTotal(){
    var totalPrice = 0;
 
    var eInputList = document.getElementsByTagName('input');
    for (var i=0; i<eInputList.length; i++){
       var curEleInput = eInputList[i];
       if ((curEleInput.type === 'radio' || curEleInput.type === 'checkbox') && curEleInput.checked){
 
          var curPrice = parseInt(curEleInput.value);
          totalPrice = totalPrice + curPrice;
           
       }
    }
    return totalPrice;
 
 }

