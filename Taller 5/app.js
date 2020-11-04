const { log } = require("console");
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
    cliente_nombre: "Melany",
    cliente_apellido: "Jimenez",
    cliente_sexo: 1,
    cliente_telefono: "3166891629",
    cliente_fecha_nacimiento: "1999-10-02",
  },
];

const arrayProductos = [
  {
    producto_nombre: "Talco",
    producto_descripcion: "Talco para pies",
    producto_precio_unitario: 5000,
  },
  {
    producto_nombre: "Shampoo",
    producto_descripcion: "Shampoo para piojos",
    producto_precio_unitario: 4000,
  },
  {
    producto_nombre: "Jabon",
    producto_descripcion: "Jabon corporal",
    producto_precio_unitario: 2000,
  },
];

const arrayVentas = [{
    producto_id : 1,
    cliente_id :  1,
    venta_total :  5000
},{
    producto_id :  1,
    cliente_id :  1,
    venta_total : 5000
},
{
    producto_id :  1,
    cliente_id :  1,
    venta_total : 5000
},
{
    producto_id :  2,
    cliente_id :  2,
    venta_total :  4000
},
{
    producto_id :  2,
    cliente_id :  3,
    venta_total :  4000
},
{
    producto_id :  1,
    cliente_id :  3,
    venta_total :  5000
}]

function insertarRegistros(){
try {
  arrayClientes.forEach((cliente) => {
    Clientes.createCliente(cliente);
  });
  arrayProductos.forEach((producto) => {
    Productos.createProducto(producto);
  });
  arrayVentas.forEach((venta)=>{
    Ventas.createVenta(venta)
  })
} catch (error) {
  console.log(error);
}

}
async function obtenerClientes (){
    const listClientes = await Clientes.getClientes()

    console.log('LISTADO DE CLIENTES: ');

    listClientes.forEach(clientes=>{
        console.log(clientes.cliente_nombre + ' ' + clientes.cliente_apellido);
    })
}

async function obtenerVentasProducto(producto){
    const ventasProducto = await Ventas.getVentasProducto(producto);

    console.log('LISTADO DE VENTAS DEL PRODUCTO CON ID 1: ');

    ventasProducto.forEach(venta=>{
        console.log('Producto_id : ' + venta.producto_id + ', comprado por el cliente: ' + venta.cliente_id);
    })
}

async function obtenerMujeres(){
    const Mujeres = await Clientes.getMujeres();

    console.log('Listado de clientes de sexo femenino:')
    Mujeres.forEach(Mujer=>{
        console.log(Mujer.cliente_nombre + ' ' + Mujer.cliente_apellido);
    })
}

async function desactivarCliente(cliente){
    const desactivar = await Clientes.stateCliente(cliente);
    console.log(desactivar);
}
async function desactivarProducto(producto){
  const desactivar = await Productos.stateProducto(producto);
  console.log(desactivar);
}

//insertarRegistros()
//obtenerClientes()
//obtenerVentasProducto(1);
//obtenerMujeres();
//desactivarCliente(1)
//desactivarProducto(1)