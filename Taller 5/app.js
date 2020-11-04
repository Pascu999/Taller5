const Clientes = require("./controllers/cliente.controller");
const Productos = require("./controllers/producto.controller");
const Ventas = require("./controllers/venta.controller");

const arrayClientes = [
  {
    cliente_identificacion: "13063664",
    cliente_nombre: "Luis",
    cliente_apellido: "Duran",
    cliente_sexo: 0,
    cliente_telefono: "3166891624",
    cliente_fecha_nacimiento: "1999-10-02",
  },
  {
    cliente_identificacion: "59650873",
    cliente_nombre: "Luis",
    cliente_apellido: "Rodriguez",
    cliente_sexo: 0,
    cliente_telefono: "3166891625",
    cliente_fecha_nacimiento: "1999-10-02",
  },
  {
    cliente_identificacion: "123456",
    cliente_nombre: "Luis",
    cliente_apellido: "Jimenez",
    cliente_sexo: 0,
    cliente_telefono: "3166891625",
    cliente_fecha_nacimiento: "1999-10-02",
  },
];

const arrayProductos = [
  {
    producto_nombre: "Talco",
    producto_descripcion: "Talco para pies",
    precio_unitario: 5000,
  },
  {
    producto_nombre: "Shampoo",
    producto_descripcion: "Shampoo para piojos",
    precio_unitario: 4000,
  },
  {
    producto_nombre: "Jabon",
    producto_descripcion: "Jabon corporal",
    precio_unitario: 2000,
  },
];

try {
  arrayClientes.forEach((cliente) => {
    Clientes.createCliente(cliente);
  });
  arrayProductos.forEach((producto) => {
    Productos.createProducto(producto);
  });
} catch (error) {
  console.error();
}
