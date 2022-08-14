import { productosController } from "../controller/productos-controller.js"

// cargo los productos de la seccion start war
const cargarProductosStartwar = () => {

    productosController.renderStartWar();

}

// cargo los productos de la seccion consolas
const cargarProductosConsolas = () => {

    productosController.renderConsolas();
}

// cargo los productos de la seccion diversos
const cargarProductosDiversos = () => {

    productosController.renderDiversos();
}

//hago que se ejecute todo el tiempo, asi los cambios en la bd se actualizaran en linea
cargarProductosStartwar();
cargarProductosConsolas();
cargarProductosDiversos();

