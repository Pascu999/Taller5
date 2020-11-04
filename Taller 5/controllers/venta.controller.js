const Venta = require("../models/Ventas");

async function getVentasProducto(producto){
  const ventas = await Venta.findAll({
  })
  return ventas;
}

async function getVentas() {
  const Ventas = await Venta.findAll({
  });
  return Ventas;
}

async function createVenta(venta) {

  
  const { venta_total, cliente_id, producto_id } = venta;
  try {
    let newVenta = await Venta.create(
      {
        venta_total,
        cliente_id,
        producto_id,
      },
      {
        fields: ["venta_total", "cliente_id", "producto_id"],
      }
    );
    console.log(newVenta);
  } catch (error) {
    console.log(error);
  }
  
}

async function stateVenta(venta_id) {
  const venta_id = venta_id;
  const ventas = await Venta.findAll({
    attributes: ["venta_id"],
    where: {
      venta_id,
    },
  });
  try {
    if (ventas.length > 0) {
      ventas.forEach(async (venta) => {
        nuevoestado = venta.venta_estado == 0 ? 1 : 0;
        await venta.update({
          venta_estado: nuevoestado,
        });
      });

      console.log({
        meesage: "Venta deshabilitado/habilitadoesatisfactoriamente",
        data: ventas,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function editVenta(venta) {
  const { venta_id } = venta;
  const { cliente_id, producto_id, venta_total } = venta;

  const ventas = await Venta.findAll({
    attributes: ["cliente_id", "producto_id", "venta_total"],

    where: {
      venta_id,
    },
  });

  if (ventas.length > 0) {
    ventas.forEach(async (venta) => {
      await venta.update({
        cliente_id,
        producto_id,
        venta_total,
      });
    });
  }
  console.log({
    message: "Datos cambiados correctamente",
    data: ventas,
  });
}

exports.createVenta = createVenta;
exports.getVentas = getVentas;
exports.stateVenta = stateVenta;
exports.editVenta = editVenta;
exports.getVentasProducto = getVentasProducto;
