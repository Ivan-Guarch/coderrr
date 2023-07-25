class producto {
    constructor(nombre, precio, clase, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.clase = clase;
        this.cantidad = cantidad;
        this.disponible = true;
    }



    sumarIva() {
        return this.precio * 1.21;
    }

    vender() {
        this.disponible = false;
    }
}
var arrayProductos = [];
do {
    var comprobacion = prompt("Ingresar un nombre al producto o Fin para finalizar");
    if (comprobacion === "fin" || comprobacion === "Fin" || comprobacion === "FIN") {
        break;
    } else {
        var nombreP = comprobacion;
        var precioP = prompt("Ingrese un precio al producto")
        var cantidadP = prompt("Ingrese la cantidad comprada de producto")
        var claseP = prompt("Ingrese una clase al producto")
        arrayProductos.push(new producto(nombreP, precioP, claseP, cantidadP));
    }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin");

console.log(arrayProductos)

for (producto of arrayProductos) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + " </h3></li>");
    document.write("<li><h3>Clase: " + producto.clase + " </h3></li>");
    document.write("<li><h3>Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3>Cantidad: " + producto.cantidad + "</h3></li>");
    document.write("<li><h3>Precio con IVA: " + producto.sumarIva() + "</h3></li></ul>");
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(producto.clase);
    console.log(producto.sumarIva());
}

var registrado = prompt("Ingrese el Nombre del articulo que busca")
var pRegistrado = arrayProductos.filter(producto => producto.nombre.includes(registrado));
console.log(pRegistrado);
document.write("<h3> Resultado de la Busqueda: </h3>");

for (producto of pRegistrado) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<ul><li><h3>Clase: " + producto.clase + "</h3></li>");
    document.write("<ul><li><h3>Precio: " + producto.precio + "</h3></li></ul><br>");
}

//Alta CArrito
class carrito {
    constructor(precioTotal, listaProductos) {
        this.precioTotal = precioTotal;
        this.listaProductos = listaProductos;
    }
}

class lineaCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

var arrayProductosCarrito = []
do {
    var nombreProducto = prompt("Ingrese el articulo que desea o Fin para Finalizar");
    console.log(nombreProducto.toLowerCase)
    if (nombreProducto === "fin" ) {
        break;
    }
    else {
        var arrayBusquedaProducto = arrayProductos.filter(producto => producto.nombre.includes(nombreProducto));
        let productoBuscado = arrayBusquedaProducto[0];
        let cCantidad = parseInt(prompt("Ingrese la Cantidad que desea comprar"));
        console.log(productoBuscado)
        console.log(cCantidad)
        let lCarrito = new lineaCarrito(productoBuscado, cCantidad);
        console.log(lCarrito);
        arrayProductosCarrito.push(lCarrito);
    }

}

while (nombreProducto !== "fin");


var precioTotal = 0;

for (lineaCarrito of arrayProductosCarrito) {
    var precioProducto = lineaCarrito.cantidad * lineaCarrito.producto.precio;
    precioTotal = precioTotal + precioProducto;
    document.write("<ul><li><h2>Productos en el Carrito: <h2></li>");
    console.log(lineaCarrito.producto.nombre)
    document.write("<li><h3>Producto: " + lineaCarrito.producto.nombre + " <h3></li>");
    document.write("<li><h2>Cantidad: " + lineaCarrito.cantidad + " <h2></li>");
    document.write("<li><h2>Precio: " + precioProducto + " <h2></li>");
}

document.write("<h2>Precio Total a Pagar: " + precioTotal + " </h2>");