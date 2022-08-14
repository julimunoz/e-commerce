import { productosServices } from "../services/productos-services.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    console.log(url,categoria,nombre,precio,descripcion);
    productosServices.crearProducto(url,categoria,nombre,precio,descripcion)
    .then( (respuesta) => {alert("registro exitoso")})
    .catch((error) => console.error())

});




