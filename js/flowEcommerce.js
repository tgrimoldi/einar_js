// PASOS DEL CARRITO
//      INDEX (MOSTRAR PRODUCTOS EN DIV DE "NUESTRA SELECCION DE PRODUCTOS"
/* Lista de Productos*/
const listaProductos = document.getElementById('productos');
productos.forEach (prod => {
    let card = document.createElement('div')
    card.classList.add('col-lg-4')
    card.classList.add('col-md-6')
    card.classList.add('portfolio-item')
    card.classList.add(prod.filtro)
    card.innerHTML = `
    <div class="portfolio-wrap info-product">
        <div class="position-relative bg-light overflow-hidden item">
            <img class="img-fluid w-100" src="${prod.imagen}" alt="">
            <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
        </div>
        <div class="portfolio-links info-product">        
            <h2 class="d-block h5 mb-2">${prod.nombre}</h2>
            <h5 class="text-dark me-1" id="price">${prod.precio}</h5>
          
          <div class="d-flex border-top">
            <small class="w-50 text-center border-end py-2">
                <a class="text-body" id="prod-${prod.id}"><i class="fa fa-eye text-dark me-2"></i>View detail</a>
            </small>
            <button class="btn-add-cart">
            <small class="w-50 text-center py-2" id="prod-${prod.id}">
                <a class="text-body btn-add-cart" id="prod-${prod.id}"><i class="fa fa-shopping-bag text-primary me-2r btn-add-cart"></i> Add to cart</a>
            </small>
            </button>
        </div>
    </div>   
    `
    console.log (prod);
    listaProductos.appendChild(card);
  })
  // CART
  const btnCart = document.querySelector('.container-cart-icon');
  const containerCartProducts = document.querySelector('.container-cart-products');
  btnCart.addEventListener('click', () => {
      containerCartProducts.classList.toggle('hidden-cart');
  });
  
  /* ========================= */
  const cartInfo = document.querySelector('.cart-product');
  const rowProduct = document.querySelector('.row-product');
  
  // Lista de todos los contenedores de productos
  const productsList = document.querySelector('.container-items');
  
  // Variable de arreglos de Productos
  let allProducts = [];
  
  const valorTotal = document.querySelector('.total-pagar');
  
  const countProducts = document.querySelector('#contador-productos');
  
  const cartEmpty = document.querySelector('.cart-empty');
  const cartTotal = document.querySelector('.cart-total');
  
  //lista de productos para seleccionar para el carrito
  productsList.addEventListener('click', e => {
   /*  console.log(e.target.classList.contains('btn-add-cart')) */
    if (e.target.classList.contains('btn-add-cart')) {
        
        const product = e.target.closest('.info-product')


            const infoProduct = {

                quantity: 1,
                title: product.querySelector('h2').textContent,
                price: product.querySelector('h5').textContent,
            };
// para sumar las existencias
        const exits = allProducts.some(
              product => product.title === infoProduct.title
          );

          if (exits) {
              const products = allProducts.map(product => {
                  if (product.title === infoProduct.title) {
                      product.quantity++;
                      return product;
                  } else {
                      return product;
                  }
              });
              allProducts = [...products];
          } else {
              allProducts = [...allProducts, infoProduct];
          }
  
          showHTML();
      }
  });
  
  rowProduct.addEventListener('click', e => {
      if (e.target.classList.contains('icon-close')) {
          const product = e.target.parentElement;
          const title = product.querySelector('p').textContent;
  
          allProducts = allProducts.filter(
              product => product.title !== title
          );
  
          console.log(allProducts);
  
          showHTML();
      }
  });
  
  // Funcion para mostrar  HTML
  const showHTML = () => {
      if (!allProducts.length) {
          cartEmpty.classList.remove('hidden');
          rowProduct.classList.add('hidden');
          cartTotal.classList.add('hidden');
      } else {
          cartEmpty.classList.add('hidden');
          rowProduct.classList.remove('hidden');
          cartTotal.classList.remove('hidden');
      }
  
      // Limpiar HTML
      rowProduct.innerHTML = '';
  
      let total = 0;
      let totalOfProducts = 0;
  
      allProducts.forEach(product => {
          const containerProduct = document.createElement('div');
          containerProduct.classList.add('cart-product');
  
          containerProduct.innerHTML = `
              <div class="info-cart-product">
                  <span class="cantidad-producto-carrito"> ${product.quantity}</span>
                  <p class="titulo-producto-carrito">${product.title}</p>
                     <span class="precio-producto-carrito">${product.price}</span>
              </div>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon-close"
              >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                  />
              </svg>
          `;
  
          rowProduct.append(containerProduct);
  
          total =
              total + parseInt(product.quantity * product.price.slice(1));
          totalOfProducts = totalOfProducts + product.quantity;
      });
  
      valorTotal.innerText = `$${total}`;
      countProducts.innerText = totalOfProducts;
  };
  
