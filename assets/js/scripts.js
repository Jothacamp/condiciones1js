function cambiarBorde(imagen) { //nombre evento onClick
    if (imagen.style.border === "2px solid red") { 
      imagen.style.border = "";
    } else {
      imagen.style.border = "2px solid red";
    }
}
