const Clientes = require("./controllers/cliente.controller");
const Productos = require("./controllers/producto.controller");
const Ventas = require("./controllers/venta.controller");

const Cliente1 = {
  cliente_identificacion: "13063664",
  cliente_nombre: "Luis",
  cliente_apellido: "Duran",
  cliente_sexo: 0,
  cliente_telefono: "3166891624",
  cliente_fecha_nacimiento: "1999-10-02",
};

const newCliente = Clientes.createCliente(Cliente1);