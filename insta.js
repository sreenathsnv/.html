const oplis = document.querySelector("#oplis");
const menu = document.querySelector("#menu");
const heart = document.querySelector("#heart");

function Menu_list(element){
    if(element.style.visibility != "visible"){
        element.style.visibility = "visible";
        
    }
    else if(element.style.visibility != "hidden"){
        element.style.visibility = "hidden";
    }
}

function Heart(element){
    if(element.style.color != "red"){
        element.style.color = "red";
        element.style.fontSize = "2.7vh";
        
    }
    else{
        element.style.fontSize = "2.5vh";
        element.style.color = "black";
    }
}