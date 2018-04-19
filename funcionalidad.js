window.onload = function(){
    
    let contenedor = document.querySelector("#carga");
    let imagenCarga = document.querySelector("#cargaImg");
    let porcentaje = document.querySelector("#porcentaje");
    let cuadro = document.querySelector(".cuadro");
    let x = 0;
    let y = 0;
    let res = 85;
    let uno = setInterval(function(){
            porcentaje.innerHTML = (`${x}%`);
            x++;
           
        if(x >= 101){
        clearInterval(uno);
    }
        
    }, 100);
    let otraCarga = setInterval(function(){
            cuadro.style.height = (`${res}vh`);
            res = (85 - y)-10;
            y++;
        if(x >= 101){
        clearInterval(otracarga);
        }
    }, 100);
    
    	setTimeout(function(){
		imagenCarga.style.width = '6vw';
        imagenCarga.style.height = '20vh';
        imagenCarga.style.left = '13vw';
        imagenCarga.style.top = '-4vh';
        
	}, 10000);
    
    setTimeout(function() {
		contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';
	}, 11000);
}