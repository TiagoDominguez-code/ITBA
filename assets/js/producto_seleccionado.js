const producto = JSON.parse(localStorage.getItem("producto_seleccionado"))

const divCard = document.getElementById("card")
const fragment = document.createDocumentFragment()
//Creacion de elementos del DOOM
const cardBody = document.createElement("div")
const tituloMueble = document.createElement("h3")
const imgMueble = document.createElement("img")
const descripcionMueble = document.createElement("p")
const materialesMueble = document.createElement("p")
const tamanioMueble = document.createElement("p")
const acabadoMueble = document.createElement("p")
const capacidadMueble = document.createElement("p")
const pesoMueble = document.createElement("p")
const precioMueble = document.createElement("p")
const botonCarrito = document.createElement("button")


cardBody.classList.add("card_body")

tituloMueble.textContent = producto.nombre
tituloMueble.classList.add("card_title")

imgMueble.src = producto.imagenUrl
imgMueble.classList.add("card_img")

precioMueble.innerHTML = `<b>Precio:</b> $ ${producto.precio}`
precioMueble.classList.add("card_text")

descripcionMueble.innerHTML = `<b>Descripción:</b> ${producto.detalle}`
descripcionMueble.classList.add("card_text")

materialesMueble.innerHTML = `<b>Materiales:</b> ${producto.materiales}`
materialesMueble.classList.add("card_text")

tamanioMueble.innerHTML = `<b>Medidas:</b> ${producto.medidas}`
tamanioMueble.classList.add("card_text")

acabadoMueble.innerHTML = `<b>Acabado:</b> ${producto.acabado}`
acabadoMueble.classList.add("card_text")

capacidadMueble.innerHTML = `<b>Capacidad:</b> ${producto.capacidad}`
capacidadMueble.classList.add("card_text")

pesoMueble.innerHTML = `<b>Peso:</b> ${producto.peso}`
pesoMueble.classList.add("card_text")

botonCarrito.textContent = "Añadir Carrito"
botonCarrito.classList.add("card_button")

// botonCarrito.addEventListener("click", ()=>{
    
// })

fragment.appendChild(imgMueble)
cardBody.appendChild(tituloMueble)
cardBody.appendChild(precioMueble)
cardBody.appendChild(descripcionMueble)
cardBody.appendChild(materialesMueble)
cardBody.appendChild(tamanioMueble)
cardBody.appendChild(acabadoMueble)
cardBody.appendChild(capacidadMueble)
cardBody.appendChild(pesoMueble)
cardBody.appendChild(botonCarrito)
fragment.appendChild(cardBody)
divCard.appendChild(fragment)

console.log(producto);
