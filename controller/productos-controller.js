import { productosServices } from "../services/productos-services.js";

const crearNuevoProducto = (ImageUrl,nombre,precio) => {

    const card = document.createElement("div");

    const contenido = `
    
    <div>

    <img src="${ImageUrl}">
        <h3>${nombre}</h3>
        <h2>${precio}</h2>
        <a href="">Ver producto</a>
    </div>
    
    `;

    card.innerHTML = contenido;
    card.classList.add("productos_destacados");

    return card;
};

const crearNuevoProductoAdmin = (ImageUrl,nombre,precio,categoria,id) => {

    const card = document.createElement("div");

    const contenido = `
    
    <div>

        <div class="productos_destacados_edit">
            <img src="${ImageUrl}" class="productos_destacados_edit_img">
            <input type="image" src="./IMG/vector_delete.png" class="productos_destacados_edit_borrar" id="${id}" data-btnBorrar>
            <a href="./editar_producto.html?id=${id}"><input type="image" src="./IMG/vector_edit.png" class="productos_destacados_edit_editar" data-btnEditar></a>
        </div>
        <h3>${nombre}</h3>
        <h2>${precio}</h2>
        <h4>${categoria}</h4>
    </div>
    
    `;

    card.innerHTML = contenido;
    card.classList.add("productos_destacados");
    const btnBorrar = card.querySelector("[data-btnBorrar]")
    btnBorrar.addEventListener("click", () => {
        const id = btnBorrar.id;
        //console.log("click en id: " + id)
        productosServices.eliminarProducto(id).then( respuesta => {
            console.log(respuesta)
        }).catch(err => alert("ocurrio un error"))
    });

    return card;
};


const renderTodos = async () => {

    //aqui uso la clase
    const producto = document.querySelector(".contenido_productos_productos");

    try {

        const listaProductos = await productosServices.listarProductos();
       
        listaProductos.forEach(elemento => {

            producto.appendChild(crearNuevoProductoAdmin(elemento.ImageUrl,elemento.nombre,elemento.precio,elemento.categoria,elemento.id))
            /* const prueba = crearNuevoProductoAdmin(elemento.ImageUrl,elemento.nombre,elemento.precio,elemento.categoria);
            console.log(producto); */
        });

    }catch(error) {

        console.log(error);

    }

}

const render = async () => {

    //aqui uso un data attribute
    const producto = document.querySelector("[datos-productos]");

    try {

        const listaProductos = await productosServices.listarProductos();
        for(var i= 0;i<6;i++) {
            producto.appendChild(crearNuevoProducto(listaProductos[i].ImageUrl,listaProductos[i].nombre,listaProductos[i].precio));
        };

    }catch(error) {

        console.log(error);

    }

}

// aqui creo una clase que permite generar un objeto de tipo prooducto y usarlo mas adelante para manipular los objetos de los arreglos

class Producto {
    constructor(ImageUrl, nombre, precio, categoria) {

        this.ImageUrl = ImageUrl;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;

    }
}


//funcion que genera un arreglo solo con los productos de la categoria Start_war

// es una funcion asyncrona
const renderStartWar = async () => {

// defino las cvarianles a usar, genero un objeto vacio y un arreglo vacio
    const producto = document.querySelector("[datos-productos-start_war]");
    var productoCategoriaStartwar = {};
    var arregloProductoSt = [];

// le digo trate de realizar
    try {

        // llamo listar productos que me devuelve un array con todos los productos
        const listaProductos = await productosServices.listarProductos();

        //recorro ese array, por cada elemento del array creo un producto
        listaProductos.forEach(element => {

            productoCategoriaStartwar = new Producto(element.ImageUrl,element.nombre,element.precio,element.categoria);

            // evaluo si la categoria de ese producto es Start_war
            if(productoCategoriaStartwar.categoria == "Start_war") {
            // si es la categoria agrego ese producto a un nuevo arreglo que contiene solo los objetos de esa categoria
                arregloProductoSt.push(productoCategoriaStartwar);
                
            }         
             
        })

        for(var i= 0;i<6;i++) {
            producto.appendChild(crearNuevoProducto(arregloProductoSt[i].ImageUrl,arregloProductoSt[i].nombre,arregloProductoSt[i].precio));
        };

        console.log(arregloProductoSt);

// manejo de errores
    }catch(error) {

        console.log(error);

    }

} 

//funcion que genera un arreglo solo con los productos de la categoria consolas

// es una funcion asyncrona
const renderConsolas = async () => {

    // defino las cvarianles a usar, genero un objeto vacio y un arreglo vacio
        const producto = document.querySelector("[datos-productos-consolas]");
        var productoCategoriaConsolas = {};
        var arregloProductoCons = [];
    
    // le digo trate de realizar
        try {
    
            // llamo listar productos que me devuelve un array con todos los productos
            const listaProductos = await productosServices.listarProductos();
    
            //recorro ese array, por cada elemento del array creo un producto
            listaProductos.forEach(element => {
    
                productoCategoriaConsolas = new Producto(element.ImageUrl,element.nombre,element.precio,element.categoria);
    
                // evaluo si la categoria de ese producto es consolas
                if(productoCategoriaConsolas.categoria == "Consolas") {
                // si es la categoria agrego ese producto a un nuevo arreglo que contiene solo los objetos de esa categoria
                    arregloProductoCons.push(productoCategoriaConsolas);
                    
                }         
                 
            })
    
            for(var i= 0;i<6;i++) {
                producto.appendChild(crearNuevoProducto(arregloProductoCons[i].ImageUrl,arregloProductoCons[i].nombre,arregloProductoCons[i].precio));
            };
    
            console.log(arregloProductoCons);
    
    // manejo de errores
        }catch(error) {
    
            console.log(error);
    
        }
    
} 

//funcion que genera un arreglo solo con los productos de la categoria consolas

// es una funcion asyncrona
const renderDiversos = async () => {

    // defino las cvarianles a usar, genero un objeto vacio y un arreglo vacio
        const producto = document.querySelector("[datos-productos-diversos]");
        var productoCategoriaDiversos = {};
        var arregloProductoDiver = [];
    
    // le digo trate de realizar
        try {
    
            // llamo listar productos que me devuelve un array con todos los productos
            const listaProductos = await productosServices.listarProductos();
    
            //recorro ese array, por cada elemento del array creo un producto
            listaProductos.forEach(element => {
    
                productoCategoriaDiversos = new Producto(element.ImageUrl,element.nombre,element.precio,element.categoria);
    
                // evaluo si la categoria de ese producto es consolas
                if(productoCategoriaDiversos.categoria == "Diversos") {
                // si es la categoria agrego ese producto a un nuevo arreglo que contiene solo los objetos de esa categoria
                arregloProductoDiver.push(productoCategoriaDiversos);
                    
                }         
                 
            })
    
            for(var i= 0;i<6;i++) {
                producto.appendChild(crearNuevoProducto(arregloProductoDiver[i].ImageUrl,arregloProductoDiver[i].nombre,arregloProductoDiver[i].precio));
            };
    
            console.log(arregloProductoDiver);
    
    // manejo de errores
        }catch(error) {
    
            console.log(error);
    
        }
    
} 

       

export const productosController = {
    render,
    renderTodos,
    renderStartWar,
    renderConsolas,
    renderDiversos,

};