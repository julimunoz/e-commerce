import { productosServices } from "../services/productos-services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {

    // esta es una clase que ya trae JS, se llama URL y lo que hace es traer un objeto que incluye la direccion de la pagina que se cargo.
    const url = new URL(window.location);

    //dentro de los datos que trae esa clase se encuentran parametros
    const id = url.searchParams.get("id");

    if(id==null){
        alert("el id no existe");
    }

    const urlImagen = document.querySelector("[data-url]");

    //elemento seleccionado por su id, ya que el select con data-attributes no me funciono
    const categoria = document.getElementById("select_categoria");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    
    // se ejecuta una promesa y si devuelve una respuesta ejecuta el codigo
    productosServices.detalleProducto(id).then((producto) => {

        urlImagen.value = producto.ImageUrl;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion;
        console.log(producto.precio);

       // 

        if(producto.categoria == "Start_war"){

            //de esta forma se carga el valor en el select
            categoria.options.item(0).selected = "selected";
           
        }
        if 
            (producto.categoria == "Consolas"){

                categoria.options.item(1).selected = "selected";
        }
        if 
            (producto.categoria == "Diversos"){

                categoria.options.item(2).selected = "selected";
        } 
    });
}

obtenerInformacion();

formulario.addEventListener("submit", async(evento) => {

    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const ImageUrl = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(ImageUrl,categoria,nombre, precio,descripcion);

    try {

        const prueba = await productosServices.actualizarProducto(id,ImageUrl,categoria,nombre,precio,descripcion);
        if(prueba){

            window.location.href = "../productos_admin.html";
        } 
    }catch(err) {

        alert("ocurrio un error");
    }
    


})