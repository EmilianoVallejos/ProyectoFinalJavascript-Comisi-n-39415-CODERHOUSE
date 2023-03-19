
//setTimeout + arrow function + Librería SweetAlert (, 4000)

setTimeout(() => {
Swal.fire({
    icon: "success",
    title: 'Oferta Limitada!',
    text: 'Sólo por hoy, 50% de descuento en la 2° unidad',
    imageUrl: "https://cdn.distribuidoralira.cl/wp-content/uploads/2019/11/imagen_2022-04-20_123054082.png?x32906",
    imageHeight: 300,
    imageWidth: 300,
    imageAlt: 'Dentastix-Pedigree',
    background: "#F6821F",
    color: "black",
    grow: "column",
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Buenísimo!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    })
}, 3500);

// setTimeout + arrow function + Librería SweetAlert (, 10000) BARRA LATERAL
setTimeout(() => {
Swal.fire({
    title: 'ENVÍOS GRATIS 👋',
    text: 'Por compras superiores a $20.000, dentro del Gran Resistencia',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Gran_Resistencia.svg",
    imageHeight: 250,
    imageWidth: 250,
    background: "#F6821F",
    color: "black",
    position: 'top-end',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInRight
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutRight
        animate__faster
      `
    },
    grow: 'column',
    height: 500,
    width: 300,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Buenísimo!',
    confirmButtonAriaLabel: 'Thumbs up, great!',

})
}, 7000);

let div_clima = document.getElementById("elclima_api");
function mostrar_posicion( posicion ){

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "bbf8893c6e8030e157bb633d11a66e17";


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then( response=> response.json() )
        .then( data =>{
                        div_clima.innerHTML =   `<p>${data.name}</p>
                                                <p>Temp:${data.main.temp}</p>
                                                <p>Clima:${data.weather[0].description}</p>`
        })
}
navigator.geolocation.getCurrentPosition( mostrar_posicion );




//SE CREA OBJETO: Producto//

class Producto {
    constructor ( id, nombre , precio , imagen , stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.stock = stock;
    }
}


//ARRAY - LISTA DE PRODUCTOS//

let lista_de_productos =[];

lista_de_productos.push(new Producto("Proplan18kg-balanceado-RM-",
                                    "Balanceado ProPlan 18kg -Raza Mediana-", 
                                    13400, 
                                    "./assets/imgs/productos-promociones/promociones1Edit.png", 
                                    1));

lista_de_productos.push(new Producto("Bravecto-collar-RM", 
                                    "Collar Antipulgas Bravecto -Raza Mediana",
                                    3600,
                                    "./assets/imgs/productos-promociones/promociones2Edit.png",
                                    1));

lista_de_productos.push(new Producto("RoyalCanin3kg-balanceado-RP",
                                    "Royal Canin 3kg -Raza Pequeña", 
                                    7500,
                                    "./assets/imgs/productos-promociones/promociones3Edit.png",
                                    1));

lista_de_productos.push(new Producto("Nexgard-antipulgas",
                                    "Nexgard -antipulgas y garrapatas-",
                                    1900,
                                    "./assets/imgs/productos-promociones/promociones4Edit.png",
                                    1));

lista_de_productos.push(new Producto("Dentastix-golosina-mascota",
                                    "Dentastix-Pedigree",
                                    950,
                                    "./assets/imgs/productos-promociones/promociones5Edit.png",
                                    1));

lista_de_productos.push(new Producto("Bravecto-collar-RG",
                                    "Collar Antipulgas Bravecto -Raza Grande",
                                    4800,
                                    "./assets/imgs/productos-promociones/promociones6Edit.png",
                                    1));

lista_de_productos.push(new Producto("Camitas",
                                    "Camitas-colchonetas para mascotas",
                                    7500,
                                    "./assets/imgs/productos-promociones/promociones7Edit.png",
                                    1));

lista_de_productos.push(new Producto("Agility-balanceado-RM",
                                    "Agility 20kg alimento balanceado -Raza Mediana-",
                                    6300,
                                    "./assets/imgs/productos-promociones/promociones8Edit.png", 
                                    1));


//ARRAY VACÍO PARA CARRITO DE COMPRAS//

let carrito_de_compras =[]


// RENDER PARA CARRITO //
let tabla = document.getElementById("tbody");

function carrito_render() {
    tabla.innerHTML = "";

    for(let producto of carrito_de_compras) {
        let fila = document.createElement("tr");
        fila.id = producto.id
        fila.innerHTML = `<td><img src="${producto.imagen}"></td>
            <td><p>${producto.nombre}</p></td>
            <td>${producto.stock}</td>
            <td>${producto.precio}</td>
            <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;
        
        tabla.append(fila);
    }
}

// FUNCIÓN DE AGREGAR PRODUCTO AL CARRITO
function agregarProductoAlCarrito(producto) {
    carrito_de_compras.push(producto);
    carrito_render();

    let btnEliminar= document.getElementsByClassName('borrar_elemento')
    console.log(btnEliminar);
    for(let botonEliminar of btnEliminar) {
        botonEliminar.addEventListener("click", function() {
            eliminarProductoDelCarrito(botonEliminar.parentElement.parentElement.id);
        
        });
}
}

//-----------------------------// Eliminar un producto del carrito
function eliminarProductoDelCarrito(producto) {
    console.log(producto);
    const index = carrito_de_compras.map(prod => prod.id).indexOf(producto);
    console.log(index);
    if (index !== -1) {
    carrito_de_compras.splice(index, 1);
}
carrito_render()

}


//llamando al elemento botón COMPRAR -por clase-
let btn = document.getElementsByClassName("buttonPromoFlex");



for(let boton of btn) {
    boton.addEventListener("click", function() {
        Toastify({
            text: "producto agregado",
            duration: 1200,
            position: "center",
            style:{
                fontSize: "25px",
                background: "green",
                fontFamily: "NanumPenScript",

            }
        }).showToast();
        
        // BUSCAR PRODUCTO SEGUN ID
        let producto = lista_de_productos.find(function(p) {
            return p.id === boton.parentElement.id; //asi se busca por el id del padre del boton
        });

        if(producto) {
            agregarProductoAlCarrito(producto);
        }
    });
}

let carrito_de_compras_JSON = JSON.stringify(carrito_de_compras);

///SESSION STORAGE - SET ITEM(key,value): almacenamiento de datos//
sessionStorage.setItem("carrito_de_compras","carrito_de_compras_JSON");

///SESSION STORAGE - GET ITEM : recuperación de datos//
let recuperando_carrito_de_compras = sessionStorage.getItem("carrito_de_compras");

//SE APLICA EL PARSE//
recuperando_carrito_de_compras = JSON.parse (recuperando_carrito_de_compras); 


