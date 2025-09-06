const productosDestacados = [
    {
        imagen: "./imagenes/Aparador Uspallata.png",
        nombre: "Aparador Uspallata",
        detalle: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
        medidas: "180 x 45 x 75 cm",
        materiales: "Nogal macizo FSC®, herrajes de latón",
        acabado: "Aceite natural ecológico",
        peso: "68 Kg",
        capacidad: "6 compartimentos interiores",
    },
    {
        imagen: "./imagenes/Butaca Mendoza.png",
        nombre: "Butaca Mendoza",
        detalle: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
        medidas: "80 x 75 x 85 cm",
        materiales: "Guatambú macizo, tela bouclé",
        acabado: "Cera vegetal, tapizado premium",
        Tapizado: "Repelente al agua y manchas",
        confort: "Espuma Alta densidad",
    },
    {
        imagen: "./imagenes/Sillón Copacabana.png",
        nombre: "Sillon Copacabana",
        detalle: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
        medidas: "90 x 85 x 95 cm",
        materiales: "Cuero curtido vegetal, acero pintado",
        acabado: "Cuero anilina premium",
        rotacion: "360° silenciosa y suave",
        garantia: "10 años en estructura",
    },
]


//Probando carda dinamica PRODUCTO 1
const nombreProd1 = document.querySelector(".titulo_1")
nombreProd1.textContent = productosDestacados[0].nombre

const imagenProd1 = document.querySelector(".primerproducto")
imagenProd1.src = productosDestacados[0].imagen


const descripcionProd1 = document.querySelector(".descripcion1")
descripcionProd1.textContent = productosDestacados[0].detalle

const materialesProd1 = document.querySelector(".materiales1")
materialesProd1.textContent = (`Materiales: ${productosDestacados[0].materiales}`)

const tamañoProd1 = document.querySelector(".tamaño1")
tamañoProd1.textContent = (`Medidas: ${productosDestacados[0].medidas}`)
//FINAL PRODUCTO 1

//Probando carda dinamica PRODUCTO 2
const nombreProd2 = document.querySelector(".titulo_2")
nombreProd2.textContent = productosDestacados[1].nombre

const imagenProd2 = document.querySelector(".segundoproducto")
imagenProd2.src = productosDestacados[1].imagen


const descripcionProd2 = document.querySelector(".descripcion2")
descripcionProd2.textContent = productosDestacados[1].detalle

const materialesProd2 = document.querySelector(".materiales2")
materialesProd2.textContent = (`Materiales: ${productosDestacados[1].materiales}`)

const tamañoProd2 = document.querySelector(".tamaño2")
tamañoProd2.textContent = (`Medidas: ${productosDestacados[1].medidas}`)


//Probando carda dinamica PRODUCTO 3
const nombreProd3 = document.querySelector(".titulo_3")
nombreProd3.textContent = productosDestacados[2].nombre

const imagenProd3 = document.querySelector(".tercerproducto")
imagenProd3.src = productosDestacados[2].imagen


const descripcionProd3 = document.querySelector(".descripcion3")
descripcionProd3.textContent = productosDestacados[2].detalle

const materialesProd3 = document.querySelector(".materiales3")
materialesProd3.textContent = (`Materiales: ${productosDestacados[2].materiales}`)

const tamañoProd3 = document.querySelector(".tamaño3")
tamañoProd3.textContent = (`Medidas: ${productosDestacados[2].medidas}`)