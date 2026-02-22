let select = document.getElementById("colorSelect");

let button = document.getElementById("removeButton")

button.addEventListener("click",function(){
    let index = select.selectedIndex;
    if(index!== -1){
        select.remove(index)
    }
})