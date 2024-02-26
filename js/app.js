let plantas =[
    {
        nombre: "Misionero XL",
        precio: 3600,
        imagen: "../imgs/car1.jpg",
        link: "../plantas/misioneroxl.html"
    },
    {
        nombre: "Gomero variegado",
        precio: 5600,
        imagen: "../imgs/car2.jpg"
    },
    {
        nombre: "Nácar disciplinado",
        precio: 880,
        imagen: "../imgs/car3.jpg"
    },
    {
        nombre: "Peperomia magnolifolia",
        precio: 1100,
        imagen: "../imgs/car4.jpg"
    },
    {
        nombre: "Peruviano",
        precio: 1100,
        imagen: "../imgs/peruviano.jpg"
    },
    {
        nombre: "Pandurata XL",
        precio: 1100,
        imagen: "../imgs/pandurataxl.jpg"
    },
]



const formulario = document.querySelector('#buscador')
const resultado = document.querySelector('#resultado')

const filtrar = () => { 
    resultado.innerHTML = ''

    const texto = formulario.value.toLowerCase()
    for(producto of plantas){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            
            resultado.innerHTML += `
            
                <div class="card-cat">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div>
                        <h3>${producto.nombre}</h3>
                        <p>Precio: $${producto.precio}</p>
                        <a href="${producto.link}"><button class="btn-catalogo">mas info</button></a>
                    </div>
                </div>  
            
      
            `
            
        }
        
    }
    
    if(resultado.innerHTML === '')
    {
        resultado.innerHTML += `
        <p style="margin-bottom: 2rem;"> Producto no encontrado... </p>
        `
    
    }

}

//boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar()