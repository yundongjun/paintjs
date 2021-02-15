const canvas = document.getElementById("jsCanvers");

function onMouseMove(event){
    console.log(event);
}

if(canvas){
    canvas.addEventListener("mousemove",on, onMouseMove);
}
