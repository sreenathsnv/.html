let op = document.querySelector("#op");

function Menu_list(element){
    console.log("working")
    element.style.visibility = "visible"
}
function Menu_list_hide(element){
    if(element.style.visibility == "visible"){
        element.style.visibility = "hidden";
        console.log("working")
    }

}

