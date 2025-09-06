/* 
"Queremos que los clientes puedan ver todos nuestros productos 
en un solo lugar, de forma ordenada y atractiva. La página debe ser una
grilla fácil de navegar visualmente."
*/
// Mostrar todos los productos disponibles en una grilla de tarjetas.
// La información de los productos se cargará desde un archivo JavaScript local.
//Cada producto debe ser un enlace a su página de detalle.
// Debe incluir un campo de búsqueda (la funcionalidad es un bonus, pero el elemento debe existir).

const productos = [
  {
    id: 1,
    nombre: "Sofá Patagonia",
    precio: 120000,
    imagenUrl: "/Imagenes/Sofá Patagonia.png"
  },
  {
    id: 2,
    nombre: "Sillón Copacabana",
    precio: 80000,
    imagenUrl: "/Imagenes/Sillón Copacabana.png"
  },
  {
    id: 3,
    nombre: "Aparador Uspallata",
    precio: 95000,
    imagenUrl: "/Imagenes/Aparador Uspallata.png"
  },
  {
    id: 4,
    nombre: "Biblioteca Recoleta",
    precio: 110000,
    imagenUrl: "/Imagenes/Biblioteca Recoleta.png"
  },
  {
    id: 5,
    nombre: "Butaca Mendoza",
    precio: 60000,
    imagenUrl: "/Imagenes/Butaca Mendoza.png"
  },
  {
    id: 6,
    nombre: "Escritorio Costa",
    precio: 105000,
    imagenUrl: "/Imagenes/Escritorio Costa.png"
  },
  {
    id: 7,
    nombre: "Mesa Comedor Pampa",
    precio: 150000,
    imagenUrl: "/Imagenes/Mesa Comedor Pampa.png"
  },
  {
    id: 8,
    nombre: "Mesa de Centro Araucaria",
    precio: 70000,
    imagenUrl: "/Imagenes/Mesa de Centro Araucaria.png"
  },
  {
    id: 9,
    nombre: "Mesa de Noche Aconcagua",
    precio: 55000,
    imagenUrl: "/Imagenes/Mesa de Noche Aconcagua.png"
  },
  {
    id: 10,
    nombre: "Silla de Trabajo Belgrano",
    precio: 65000,
    imagenUrl: "/Imagenes/Silla de Trabajo Belgrano.png"
  },
  {
    id: 11,
    nombre: "Sillas Córdoba",
    precio: 48000,
    imagenUrl: "/Imagenes/Sillas Córdoba.png"
  }
];


const grilla_producto = document.getElementById("productos")
grilla_producto.textContent = "Cargando"

function solicitarProducto() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 1000)
    })
}


async function obtenerProductos() {
    const datos = await solicitarProducto()
    grilla_producto.textContent = ""
    const fragment = document.createDocumentFragment()
    
    datos.forEach(producto => {
        const div = document.createElement("div")
    
        const imagen = document.createElement("img")
        imagen.src = producto.imagenUrl
    
        const h3 = document.createElement("h3")
        h3.textContent = producto.nombre
    
        const p = document.createElement("p")
        p.textContent = `$ ${producto.precio}`
    
        div.appendChild(imagen)
        div.appendChild(h3)
        div.appendChild(p)
    
        div.classList.add("producto")
        div.addEventListener("click", (e)=>{
            localStorage.setItem("producto_seleccionado", JSON.stringify(producto))
            window.location.href = "producto.html"
        })
        fragment.appendChild(div)
    })
    
    grilla_producto.appendChild(fragment)
}

obtenerProductos()