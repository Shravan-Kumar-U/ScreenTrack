const div = document.querySelector(".container")
div.addEventListener("mousemove",(e)=>{
    let p = document.querySelector("#ch")
    p.innerText = `
    Screen X/Y :  ${e.screenX}, ${e.screenY}
    Client X/Y : ${e.clientX},${e.clientY}
    
    `
},false)