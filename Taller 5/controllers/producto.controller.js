const Producto = require("../models/Productos");



//Obtener productos
async function getProductos() {
    const Productos = await Producto.findAll({
    });
    
    return productos
}

//Crear producto
async function createProducto(producto ) {
  const {
    producto_nombre,
    producto_descripcion,
    producto_precio_unitario
  } = producto;

  try {
    let newProducto = await Producto.create(
      {
        producto_nombre,
        producto_descripcion,
        producto_precio_unitario
      },
      {
        fields: [
          "producto_nombre",
          "producto_descripcion",
          "producto_precio_unitario"
        ],
      }
    );

    if (newProducto) {
      console.log({
        meesage: "Producto agregado satisfactoriamente",
        data: newProducto,
      });
    }
  } catch (error) {
    console.log({
      meesage: "Error al ingresar el producto",
      data: { error },
    });
  }
}

//Cambiar estado producto
async function stateProducto(producto_id) {
  const productos = await Producto.findAll({
    attributes: ["producto_id", "producto_estado"],
    where: {
      producto_id,
    },
  });
  try {
    if (productos.length > 0) {
      productos.forEach(async (producto) => {
        console.log(producto.producto_estado);
        nuevoestado = producto.producto_estado == 0 ? 1 : 0;
        await producto.update({
          producto_estado: nuevoestado,
        });
      });

      console.log({
        meesage: "Producto deshabilitado/habilitadoesatisfactoriamente",
        data: productos,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
// Editar producto
async function editProducto (producto) {
  const {producto_codigo} = producto;
  const {
    producto_nombre,
    producto_descripcion,
    producto_precio_unitario
  } = producto;

  const productos = await Producto.findAll({
    attributes: [
      'producto_nombre',
      'producto_descripcion',
      'producto_precio_unitario'
    ],

    where: {
      producto_codigo,
    },
  });

  if (productos.length > 0) {
    productos.forEach(async (producto) => {
      await producto.update({
        producto_nombre,
        producto_descripcion,
        producto_precio_unitario
      });
    });
  }
  console.log({
    message: "Datos cambiados correctamente",
    data: productos,
  });
}

exports.createProducto = createProducto;
exports.getProductos = getProductos;
exports.stateProducto = stateProducto;
exports.editProducto = editProducto;
