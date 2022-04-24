let alt = document.getElementById("altstyle");

function switchStyle(){
    alt.toggleAttribute("disabled");

    if(!alt.hasAttribute("disabled")){
        localStorage.setItem("alt","true");
    }
    else{
        localStorage.removeItem("alt")
    }
}

if(localStorage.getItem("alt") != null){
    if(alt.hasAttribute("disabled")) switchStyle();
}
else{
    if(!alt.hasAttribute("disabled")) switchStyle();
}