function handleHeadingBox(){
    var element = document.getElementById("headingBox");
    var element2 = document.getElementById("textBox");
    var element3 = document.getElementById("buttonBox");
    document.getElementById("heading").style.borderColor = "black";
    document.getElementById("text").style.borderColor = "white";
    document.getElementById("addButton").style.borderColor = "white";

    element.style.visibility = "visible";
    element2.style.visibility = "hidden";
    element3.style.visibility = "hidden";

}

function handleTextBox(){
    var element = document.getElementById("headingBox");
    var element2 = document.getElementById("textBox");
    var element3 = document.getElementById("buttonBox");
    document.getElementById("heading").style.borderColor = "white";
    document.getElementById("text").style.borderColor = "black";
    document.getElementById("addButton").style.borderColor = "white";

    element.style.visibility = "hidden";
    element2.style.visibility = "visible";
    element3.style.visibility = "hidden";
}

function handleButtonBox(){
    var element = document.getElementById("headingBox");
    var element2 = document.getElementById("textBox");
    var element3 = document.getElementById("buttonBox");
    document.getElementById("heading").style.borderColor = "white";
    document.getElementById("text").style.borderColor = "white";
    document.getElementById("addButton").style.borderColor = "black";

   element.style.visibility = "hidden";
    element2.style.visibility = "hidden";
    element3.style.visibility = "visible";
   
}

function handleAddHeading(){
    var title = document.getElementById("headingTitle").value;
    var isItalicized = document.getElementById("italicized").checked;
    var formDiv = document.getElementById("formArea");
    if (isItalicized){
        var newStuff = document.createElement("div");
        newStuff.innerHTML = "<h3><i>" + title + "</i></h3>";
        formDiv.appendChild(newStuff);
    }
    else {
        var newStuff = document.createElement("div");
        newStuff.innerHTML = "<h3>" + title + "</h3>";
        formDiv.appendChild(newStuff);
    }
    
}

function handleAddText(){
    var title = document.getElementById("textFieldTitle").value;
    var initialVal = document.getElementById("initialValue").value;
    var formDiv = document.getElementById("formArea");
    if (title != "" && initialVal != ""){
        var newStuff = document.createElement("div");
        newStuff.style.fontFamily = "Times";

        var newTextField = document.createElement("input");
        newTextField.value = initialVal;
        newStuff.innerHTML = title;
        
        newStuff.append(newTextField);
        formDiv.appendChild(newStuff);
    }
    else if(title != "" && initialVal == ""){
        var newStuff = document.createElement("div");
        newStuff.style.fontFamily = "Times";

        var newTextField = document.createElement("input");
        newStuff.innerHTML = title;
        
        newStuff.append(newTextField);
        formDiv.appendChild(newStuff);
    }
    else {
        var newStuff = document.createElement("div");
        newStuff.style.fontFamily = "Times";

        var newTextField = document.createElement("input");
        if (initialVal != ""){
            newTextField.value = initialVal;
        }
        
        newStuff.append(newTextField);
        formDiv.appendChild(newStuff);
    }
   
}

function handleAddButton(){
    var title = document.getElementById("buttonTitle").value;
    var newDiv = document.createElement("div");
    var formDiv = document.getElementById("formArea");

    newDiv.innerHTML = "<button>" + title + "</button>"
    formDiv.appendChild(newDiv);

}

function clear(){
    var formDiv = document.getElementById("formArea");
    formDiv.innerHTML = "";
}


document.getElementById("heading").addEventListener("click", handleHeadingBox, false)
document.getElementById("text").addEventListener("click", handleTextBox, false);
document.getElementById("addButton").addEventListener("click", handleButtonBox, false);
document.getElementsByName("addHeadingButton")[0].addEventListener("click", handleAddHeading, false);
document.getElementsByName("addTextButton")[0].addEventListener("click", handleAddText, false);
document.getElementsByName("addButtonButton")[0].addEventListener("click", handleAddButton, false);
document.getElementsByName("clearAll")[0].addEventListener("click", clear, false);

