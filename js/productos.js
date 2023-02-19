// Productos del Ecommerce.

 /* 
 Cantidad si son servicios--> cantidad por día, un día = un stock
 */
let productos = [
    
    {
        id: 1,
        tipo:"servicio",
        nombre:"Chopera de Hielo. 100 lts por hora.",
        cantidad: 1, 
        precio: 49,
        imagen: "img/TIRADOR-NEGRO.jpg",
        filtro: ["filter-servicios", "filter-hielo"],
        litros: [0]
    },

    {
        id: 2,
        tipo:"servicio",
        nombre:"Chopera eléctica. Bajo consumo.",
        cantidad: 1, 
        precio: 79,
        imagen: "img/chopera-electrica.png",
        filtro: ["filter-servicios", "filter-electrica"],
        litros: [0]
    },

    {
        id: 3,
        tipo:"bien",
        nombre:"Cerveza Tyris IPA. Sixpack.",
        cantidad: 1, 
        precio: 8,
        imagen: "img/tyris-ipa.png",
        filtro: ["filter-bienes", "filter-barril","filter-hielo"],
        litros: [10, 15, 20, 25, 35]  
    },

    {
        id: 4,
        tipo:"bien",
        nombre:"Cerveza Brexit English IPA. Sixpack.",
        cantidad: 1, 
        precio: 8,
        imagen: "img/brexit english ipa.png",
        filtro: ["filter-bienes", "filter-barril"],
        litros: [10, 15, 20, 25, 35]  
    },
    {
        id: 5,
        tipo:"bien",
        nombre:"Cerveza Ballut Honey. Sixpack.",
        cantidad:1, 
        precio: 8,
        imagen: "img/ballut honey.png",
        filtro: ["filter-bienes", "filter-barril"],
        litros: [10, 15, 20, 25, 35]  
    },
    {
        id: 6,
        tipo:"bien",
        nombre:"Cerveza Eikois  NE IPA. Sixpack.",
        cantidad:1, 
        precio: 9,
        imagen: "img/Eikois neipa.png",
        filtro: ["filter-bienes", "filter-barril"],
        litros: [10, 15, 20, 25, 35]  
    },
]