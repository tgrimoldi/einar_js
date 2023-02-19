//Cart 
// Carrito multiplicador de precio y cantidad
/* 
    var DOMCantidad = document.getElementById("qty");
    var DOMPrecio = document.getElementById("price");

    function res(){
    var multi = DOMCantidad.value * Number(DOMPrecio.innerText);
    document.getElementById("product_total_price").innerHTML = multi;  
    console.log(multi);
    }
    res(); */


    
    $(document).ready(function () {

        $(".carrito-container").hide(); 
    
        $("#mostrarCarrito").click(function () { 
        
            $(".carrito-container").show();
            
        });
    
        $("#salirCompra").click(function () { 
            
            $('#cuerpoTabla').detach();
            $(".carrito-container").hide();
            
            
        });
    });

    