// PASOS DEL CARRITO
//      INDEX (MOSTRAR PRODUCTOS EN DIV DE "NUESTRA SELECCION DE PRODUCTOS"
const listaProductos = document.getElementById('productos');
let carrito = [];
let numeroCompras = [];


localStorage.clear("carrito");

function agregarItem(objeto){
    carrito.push(objeto);
    console.log(carrito);

}

/* Lista de Productos*/

productos.forEach (prod => {
    let card = document.createElement('div')
    card.classList.add('col-lg-4')
    card.classList.add('col-md-6')
    card.classList.add('portfolio-item')
    card.classList.add(prod.filtro)
    card.innerHTML = `
    <div class="portfolio-wrap ">
        <div class="position-relative bg-light overflow-hidden">
            <img class="img-fluid w-100" src="${prod.imagen}" alt="">
            <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
        </div>
        <div class="portfolio-links">
          <a href=${prod.imagen} data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
          <div class="text-center p-4">
          <a class="d-block h5 mb-2" href="">${prod.nombre}</a>
          <span>$</span> <span class="text-dark me-1">${prod.precio}</span>
          </div>
          <div class="d-flex border-top">
          <small class="w-50 text-center border-end py-2">
            <a class="text-body" id="prod-${prod.id}" href=""><i class="fa fa-eye text-dark me-2"></i>View detail</a>
          </small>
          <small class="w-50 text-center py-2 comprar" id="prod-${prod.id}">
            <a class="text-body comprar btn-add-cart" id="prod-${prod.id}"><i class="fa fa-shopping-bag text-primary me-2r"></i> Add to cart</a>
          </small>
        </div>
    </div>
            
    `
    
    console.log (prod);
    listaProductos.appendChild(card);
    /* Boton agragar producto*/
  
    let botonAgregar = document.getElementById('prod-' + prod.id)
        botonAgregar.addEventListener("click", () =>{ 
            numeroCompras.push(+1)
            $("#bntCarrito").append(`<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> ${numeroCompras.length} </span>`)
           
            let idEncontrado = false;
        for (item of carrito){
            if (item.id == prod.id){
                console.log("existe id igual");
                item.cantidad = item.cantidad + 1;
                console.log(carrito);
                idEncontrado = true;

            }
        }
        if(idEncontrado == false){
            objetoAAgregar = productos [prod.id - 1];
            agregarItem(objetoAAgregar);

        }
        localStorage.setItem('carrito',JSON.stringify(carrito));
    })
  })

|/* Boton Mostrar Carrito*/

   $("#bntCarrito").click (function () { 


    carrito.forEach(produ => {
        $("#cuerpoTabla").append(`
        <tr id="itemTabla-${produ.id}">
        <td class="cart_product_img d-flex align-items-center">
        <a href="#"><img src="${produ.imagen}" alt="${produ.nombre}"></a>
        <h6>${produ.nombre}</h6>
        </td>
        <td id="cantidad-${produ.id}"><span id="spanCantidad-${produ.id}">${produ.cantidad}</span></td>
        <td class="price"><span>$</span><span id="price spanPrecio-${produ.id}">${produ.precio}</span></td>
        <td class="qty">
            <div class="quantity">
            <!-- res() en carrito.js multi de DOMPrecio y DOMCantidad -->
            <select id="qty" onchange="res()"> 
              <option type="Number" value="1">1</option>
              <option type="Number" value="2">2</option>
              <option type="Number" value="3">3</option>
            </select></div>
            </td>
            <td class="total_price"><span>$</span><span id="product_total_price"></span></td>
        </tr>
        `
        )
    });
});

    $("#terminar").click(function () {location.href='index.html'});

