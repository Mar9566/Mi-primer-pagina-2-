function muestra_oculta(id) {
    let div = document.getElementById(id);

     if(div.style.display == "none"){
    div.style.display = "fex";
    }
    else{
        div.style.display = "none"; 
    }   
 }