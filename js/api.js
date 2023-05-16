let trabajosArray = []
function looping(trabajosDatos){
    

        for(let i =0; i < trabajosDatos.length; i++){
            if(trabajosDatos[i].Categoria === "Novias"){
            novias.innerHTML +=`
            <figure class="imagega fade"><img src="${trabajosDatos[i].imagen}" width="100%" height="auto"><figcaption>${trabajosDatos[i].Descripcion}</figcaption></figure>
              `
          }else if(trabajosDatos[i].Categoria === "Vestidos"){
            for(;i < trabajosDatos.length; i++){
                vestidos.innerHTML +=`
                <figure class="imagega fade"><img src="${trabajosDatos[i].imagen}" width="100%" height="auto"><figcaption>${trabajosDatos[i].Descripcion}</figcaption></figure>
                  `
              }
    }
    }
    
}

function traer(){
fetch('https://script.google.com/macros/s/AKfycbxYhEUhmFuKfR_j_zLSG6nMfC2-Ut6UEHodq-UFuQPzxOY4ldYAG703idpisdEnL5zpVA/exec')
  .then(response => response.json())
  .then(datos => {
  	console.log(datos.datos)
      trabajitosArray = [...datos.datos]
  	looping(datos.datos)
  })
  .catch(error => alert("sin resultados"));
  }

  traer();