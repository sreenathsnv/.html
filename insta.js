let op = document.querySelector("#oplis");

function Menu_list(element){
    console.log("working")
    if(element.style.visibility != "visible"){
        element.style.visibility = "visible"
    }
    else{
        element.style.visibility = "hidden"
    }
}
function Menu_list_hide(element){
    if(element.style.visibility == "visible"){
        element.style.visibility = "hidden";
        console.log("working")
    }

}

