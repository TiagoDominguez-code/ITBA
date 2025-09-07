const carrito = document.getElementById("carrito")
const cantidadCarrito = localStorage.getItem("cantidad") ?? 0

const etiquetaCantidad = document.createElement("i")
etiquetaCantidad.textContent = cantidadCarrito
etiquetaCantidad.classList.add("cantidad_carrito")
carrito.appendChild(etiquetaCantidad)