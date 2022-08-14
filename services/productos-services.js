// funcion que permite leer la base de datos y listar todos productos, no requiere metodo ya que por defecto fetch trae el metodo "GET" que es para leer

const listarProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json());

// funcion para crear un producto, recibe los parametros del formulario y el id lo crea con la funcion uuid
const crearProducto = (ImageUrl,nombre,precio,categoria,descripcion) => {

    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify( {ImageUrl,nombre,precio,categoria,descripcion, id: uuid.v4() })
    }).then( respuesta => { // si la respuesta esta ok, envie la respuesta
        if(respuesta.ok){
            return respuesta.body
        }
        throw new Error("no fue posible crear un nuevo producto") // sino lance un error y genere este mensaje
    })
}

// aqui se usa (`) porque voy a insertar variables a la direccion, si no lo hago se usa ("")
// funcio para eliminar un producto, requiere el id para poder compararlo
const eliminarProducto = (id) => {

    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    }).then( respuesta => { // si la respuesta esta ok, envie la respuesta
        if(respuesta.ok){
            return respuesta.body
        }
        throw new Error("no fue posible eliminar el producto") // sino lance un error y genere este mensaje
    })
}

const detalleProducto = (id) => {

    return fetch(`http://localhost:3000/productos/${id}`).then( (respuesta) => {
        if(respuesta.ok) {
           return respuesta.json()
        }throw new Error("no fue posible traer el producto") // sino lance un error y genere este mensaje
        })
}

const actualizarProducto = (id,ImageUrl,categoria,nombre,precio,descripcion) => {

    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ ImageUrl,categoria,nombre,precio,descripcion })
    
    }).then( (respuesta) => {
        if(respuesta.ok) {
           return respuesta.json()
        }throw new Error("no fue posible atualizar el producto") // sino lance un error y genere este mensaje
        })
};

export const productosServices = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,  

};