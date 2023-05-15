let trabajosArray = []
function looping(trabajosDatos){
    

        for(let i =0; i < trabajosDatos.length; i++){
            if(trabajosDatos[i].Categoria === "Novias"){
            novias.innerHTML +=`
              <img src="${trabajosDatos[i].imagen}" width="10%" height="auto">
              `
          }else if(trabajosDatos[i].Categoria === "Vestidos"){
            for(;i < trabajosDatos.length; i++){
                vestidos.innerHTML +=`
                  <img src="${trabajosDatos[i].imagen}" width="10%" height="auto">
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