


let key = document.querySelectorAll(".key")


document.querySelector("textarea").onkeydown =(e)=>{
    for(let i=0;i<key.length;i++){
        if(e.keyCode ==key[i].getAttribute("data")){
            key[i].style.backgroundColor= "slategrey";
            setTimeout(()=>{
                key[i].style.backgroundColor= "wheat"
            },200)
        }
        
        
        // alert(element[i].getAttribute("data"))
    }
}