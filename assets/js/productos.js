/* 
"Queremos que los clientes puedan ver todos nuestros productos 
en un solo lugar, de forma ordenada y atractiva. La página debe ser una
grilla fácil de navegar visualmente."
*/
// Mostrar todos los productos disponibles en una grilla de tarjetas.
// La información de los productos se cargará desde un archivo JavaScript local.
//Cada producto debe ser un enlace a su página de detalle.
// Debe incluir un campo de búsqueda (la funcionalidad es un bonus, pero el elemento debe existir).

const grilla_producto = document.getElementById("productos")
// Función que elimina el elemento seleccionado
grilla_producto.addEventListener("load", ()=>{
  localStorage.removeItem("producto_seleccionado")
})
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