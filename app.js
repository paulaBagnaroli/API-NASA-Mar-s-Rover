let pagina =1
const btnAnterior= document.querySelector("#anterior")
const btnSiguiente= document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",(e)=>{
    pagina= pagina +1
    cargarDatos();    
})
btnAnterior.addEventListener("click",(e)=>{
    pagina= pagina -1;
    cargarDatos();
})

const fechaInput=document.querySelector("#fecha");
console.log(fechaInput)
let fecha = 2023-04;

console.log(fecha);

fechaInput.addEventListener("change",(e)=>{
fecha = fechaInput.value
console.log("la fecha es"+ fecha);
cargarDatos(fecha)}
)

const cargarDatos= async() =>{ 
    contenedor.innerHTML=null;
    try{//Usamos fetch para acceder al contenido de la url. Al usar fetch nos devuelve una PROMESA, que va a ser almacenada en la varibale respuesta en este caso. Como es una promesa, le pones await, para que se ejecute cuando ya esté la respuesta. Await solo puede usarse en funciones asíncronas, por eso arriba a la función cargarDatos tenes que ponerle async. Además, cuando trabajas con funciones asíncronas tenes que usar try y catch.
     const respuesta= await fetch (`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${fecha}3&page=${pagina}&api_key=nTSFEdegLBKcBA7biDMbYnLaRjkO2xdreLD4CUh3
     `)
     console.log(pagina)
     if (respuesta.status ===200){
         const datos=await respuesta.json()
         console.log(datos);
         let fotos = datos.photos;
         console.log(fotos);
         fotos.forEach(element => {
            let astro=document.createElement(`div`)
            astro.className="astros"
            astro.innerHTML=`<h1 class="titulo">Nombre de la cámara:<br>${element.camera.full_name}</h1>
            <img class="poster" src="${element.img_src}"/>
            <h3> Fecha terrestre:${element.earth_date}</h3>
            `
            contenedor.appendChild(astro)
    });

     }
     else if (respuesta.status=401){
         console.log("No has escrito bien")
     }
     else if(respuesta===404){
         console.log("")
     }
     else {console.log("Error inesperado")}

 }
         catch(error){
         console.log("error")};

    
 }
cargarDatos();
let subtitulo = document.querySelector("h2")
let datosRover=document.createElement(`p`)
datosRover.textContent=`Nombre del Rover: Curiosity - Estado: activo`
subtitulo.appendChild(datosRover)




/*const planetas = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5eb079029msh2a76d51d0577c18p12d548jsn406ed5cae748',
		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
};

fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', planetas)
 	.then(response => response.json())
 	.then(response =>{ 
         console.log(response)
         const astros= Array.from(response);
         console.log(astros)
         astros.forEach(element => {
             let astro=document.createElement(`div`)
             astro.className="astros"
             astro.innerHTML=`<h1 class="titulo">${element.name}</h1>
             <img class="poster" src="${element.imgSrc.img}"/>
             <h3> Description:${element.description}</h3>
             `
             contenedor.appendChild(astro)
            
         });

       })
 	.catch(err => console.error(err));
*/


 