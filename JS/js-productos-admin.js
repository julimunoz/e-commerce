import { productosController } from "../controller/productos-controller.js";

// cargo los productos de la base de datos
const cargarProductosdb = () => {

    productosController.renderTodos();
}

cargarProductosdb();
