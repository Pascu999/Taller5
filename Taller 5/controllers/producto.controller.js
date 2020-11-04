const Producto = require("../models/Productos");



//obtener productos de una categoria

async function getProductosCategoria() {
  const { categoria_id } = req.params;
  const productos = await Producto.findAll({
    where: {
      categoria_id,
    },
  });
  if (productos.length > 0) {
    res.json(productos);
  } else {
    res.json({
      message: "No hay productos en esta categoria o no existe la categoria",
    });
  }
}

//Obtener productos
async function getProductos(req, res) {
  try {
    const Productos = await Producto.findAll();
    res.json({
      data: Productos,
    });
  } catch (error) {}
}

//Crear producto
async function createProducto(req, res) {
  const {
    producto_codigo,
    producto_nombre,
    producto_descripcion,
    producto_imagen,
    producto_existencias,
    producto_precio,
    producto_descuento,
    producto_iva,
    categoria_id,
  } = req.body;

  try {
    let newProducto = await Producto.create(
      {
        producto_codigo,
        producto_nombre,
        producto_descripcion,
        producto_imagen,
        producto_existencias,
        producto_precio,
        producto_descuento,
        producto_iva,
        categoria_id,
      },
      {
        fields: [
          "producto_codigo",
          "producto_nombre",
          "producto_descripcion",
          "producto_imagen",
          "producto_existencias",
          "producto_precio",
          "producto_descuento",
          "producto_iva",
          "categoria_id",
        ],
      }
    );

    if (newProducto) {
      res.json({
        meesage: "Producto agregado satisfactoriamente",
        data: newProducto,
      });
    }
  } catch (error) {
    res.status(500).json({
      meesage: "Error al ingresar el producto",
      data: { error },
    });
  }
}

//Cambiar estado producto
async function stateProducto(req, res) {
  const { producto_codigo } = req.params;
  const productos = await Producto.findAll({
    attributes: ["producto_codigo", "producto_estado"],
    where: {
      producto_codigo,
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

      return res.json({
        meesage: "Producto deshabilitado/habilitadoesatisfactoriamente",
        data: productos,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
// Editar producto
async function editProducto(req, res) {
  const { producto_codigo } = req.params;
  const {
    producto_nombre,
    producto_descripcion,
    producto_imagen,
    producto_existencias,
    producto_precio,
    producto_descuento,
    producto_iva,
    producto_estado,
    categoria_id,
  } = req.body;

  const productos = await Producto.findAll({
    attributes: [
      "producto_codigo",
      "producto_nombre",
      "producto_descripcion",
      "producto_imagen",
      "producto_existencias",
      "producto_precio",
      "producto_descuento",
      "producto_iva",
      "producto_estado",
      "categoria_id",
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
        producto_imagen,
        producto_existencias,
        producto_precio,
        producto_descuento,
        producto_iva,
        producto_estado,
        categoria_id,
      });
    });
  }
  return res.json({
    message: "Datos cambiados correctamente",
    data: productos,
  });
}

exports.createProducto = createProducto;
exports.getProductos = getProductos;
exports.stateProducto = stateProducto;
exports.editProducto = editProducto;
exports.getProductosCategoria = getProductosCategoria;
exports.getMenu = getMenu;
