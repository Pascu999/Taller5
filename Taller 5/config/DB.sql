DROP TABLE IF EXISTS Clientes;
DROP TABLE IF EXISTS Ventas;
DROP TABLE IF EXISTS Productos;

CREATE TABLE Clientes(
	cliente_id				   	   INT,
	cliente_identificacion  	   VARCHAR(20) ,
	cliente_nombre  	           VARCHAR(20) ,
	cliente_apellido			   VARCHAR(20) ,
	cliente_sexo                   INT,
    cliente_telefono               VARCHAR(20) ,
    cliente_fecha_nacimiento	   DATE,
    cliente_estado                 INT DEFAULT 1,
    
	
	CONSTRAINT pk_cliente PRIMARY KEY(cliente_id)
);


CREATE TABLE Productos(
	producto_id				   	   INT,
	producto_nombre  	           VARCHAR(20) ,
	producto_descripcion		   VARCHAR(20) ,
	producto_precio_unitario       INT,
    producto_estado                INT DEFAULT 1,

    
	
	CONSTRAINT pk_producto PRIMARY KEY(producto_id)
);

CREATE TABLE Ventas(
	venta_id				   	   INT,
	cliente_id 	                   INT ,
	producto_id		               INT ,
	venta_total                    INT,
    venta_estado                   INT DEFAULT 1,

    
	
	CONSTRAINT pk_venta PRIMARY KEY(venta_id),
    	CONSTRAINT fk_venta_cliente FOREIGN KEY(cliente_id)
		REFERENCES Clientes(cliente_id) ON UPDATE CASCADE ON DELETE SET NULL ,
        CONSTRAINT fk_venta_producto FOREIGN KEY(producto_id)
		REFERENCES Productos(producto_id) ON UPDATE CASCADE ON DELETE SET NULL 
);