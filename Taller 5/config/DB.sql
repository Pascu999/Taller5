DROP TABLE IF EXISTS Ventas;
DROP TABLE IF EXISTS Clientes;
DROP TABLE IF EXISTS Productos;

DROP SEQUENCE IF EXISTS secuencia_productos;
DROP SEQUENCE IF EXISTS secuencia_clientes;
DROP SEQUENCE IF EXISTS secuencia_ventas;


DROP TRIGGER IF EXISTS tr_codificar_producto ON Productos;
DROP TRIGGER IF EXISTS tr_codificar_cliente ON Clientes;
DROP TRIGGER IF EXISTS tr_codificar_venta ON Ventas;

DROP FUNCTION IF EXISTS codificar_cliente;
DROP FUNCTION IF EXISTS codificar_venta;
DROP FUNCTION IF EXISTS codificar_producto;



CREATE SEQUENCE secuencia_productos;
CREATE SEQUENCE secuencia_ventas;
CREATE SEQUENCE secuencia_clientes;




CREATE TABLE Clientes(
	cliente_id				   	   INT,
	cliente_identificacion  	   VARCHAR(20) UNIQUE,
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


-- ************************************************************************************




CREATE FUNCTION codificar_cliente() RETURNS TRIGGER AS $$
DECLARE
BEGIN
	NEW.cliente_id := NEXTVAL('secuencia_clientes');
	RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_codificar_cliente BEFORE INSERT 
ON Clientes FOR EACH ROW 
EXECUTE PROCEDURE codificar_cliente();

-- ************************************************************************************




CREATE FUNCTION codificar_producto() RETURNS TRIGGER AS $$
DECLARE
BEGIN
	NEW.producto_id := NEXTVAL('secuencia_productos');
	RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_codificar_producto BEFORE INSERT 
ON Productos FOR EACH ROW 
EXECUTE PROCEDURE codificar_producto();

-- ************************************************************************************
CREATE FUNCTION codificar_venta() RETURNS TRIGGER AS $$
DECLARE
BEGIN
	NEW.venta_id := NEXTVAL('secuencia_ventas');
	RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_codificar_venta BEFORE INSERT 
ON Ventas FOR EACH ROW 
EXECUTE PROCEDURE codificar_venta();
