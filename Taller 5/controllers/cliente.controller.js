const Cliente = require("../models/Clientes");

async function getClientes() {
    const Clientes = await Cliente.findAll(
      
    );
    return Clientes;
}
async function getMujeres(){
  const mujeres = await Cliente.findAll({
    where:{
      cliente_sexo : 1
    }
  })

  return mujeres;
}
async function createCliente(cliente) {
  const {
    cliente_identificacion,
    cliente_nombre,
    cliente_apellido,
    cliente_sexo,
    cliente_telefono,
    cliente_fecha_nacimiento,
  } = cliente;
  try {
    let newCliente = await Cliente.create(
      {
        cliente_identificacion,
        cliente_nombre,
        cliente_apellido,
        cliente_sexo,
        cliente_telefono,
        cliente_fecha_nacimiento,
      },
      {
        fields: [
          'cliente_identificacion',
          'cliente_nombre',
          'cliente_apellido',
          'cliente_sexo',
          'cliente_telefono',
          'cliente_fecha_nacimiento',
        ],
      }
    );
    console.log(true);

  } catch (error) {
    console.log(error);
  }
}

async function stateCliente(cliente_id) {
  const clientes = await Cliente.findAll({
    attributes: ["cliente_id"],
    where: {
      cliente_id,
    },
  });
  try {
    if (clientes.length > 0) {
      clientes.forEach(async (cliente) => {
        console.log(cliente.cliente_estado);
        nuevoestado = cliente.cliente_estado == 0 ? 1 : 0;
        await cliente.update({
          cliente_estado: nuevoestado,
        });
      });

      console.log({
        meesage: "Cliente deshabilitado/habilitadoesatisfactoriamente",
        data: clientes,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function editCliente(cliente) {
  const { cliente_id } = cliente;
  const {
    cliente_identificacion,
    cliente_nombre,
    cliente_apellido,
    cliente_sexo,
    cliente_telefono,
    cliente_fecha_nacimiento,
  } = cliente;

  const clientes = await Cliente.findAll({
    attributes: [
      'cliente_identificacion',
      'cliente_nombre',
      'cliente_apellido',
      'cliente_sexo',
      'cliente_telefono',
      'cliente_fecha_nacimiento',
    ],

    where: {
      cliente_id,
    },
  });

  if (clientes.length > 0) {
    clientes.forEach(async (cliente) => {
      await cliente.update({
        cliente_identificacion,
        cliente_nombre,
        cliente_apellido,
        cliente_sexo,
        cliente_telefono,
        cliente_fecha_nacimiento,
      });
    });
  }
  console.log({
    message: "Datos cambiados correctamente",
    data: clientes,
  });
}


exports.createCliente = createCliente;
exports.getClientes = getClientes;
exports.stateCliente = stateCliente;
exports.editCliente = editCliente;
exports.getMujeres = getMujeres;