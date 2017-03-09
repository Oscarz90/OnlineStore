# Colecciones

Introducción
---

Esta aplicación usará como plataforma de almacenamiento de datos la versión mas reciente de MongoDB. Atenderemos pues al diseño de la solución mediante la generación de las colecciones necesarias de objetos según sea necesaria para la interacción entre los microservicios que estarán disponibles para la construcción del WebApp.

Colecciones
---

+ Tienda

Está coleccion servira para las diferentes tiendas. A continuación se describe los campos que contendra.

~~~javascript
{
	nombre:"Nike"
	, estatus:'Activa|Suspendida|Congelada|Inactiva'
	, visibilidad:'Publico|Privado'
	, secciones:[
		{
			nombre:"Oleo Sobre Tela"
			, estatus:"'Activa|Suspendida|Congelada|Inactiva'"
			, visibilidad:'Publico|Privado'
			, productos:[{idProducto}]
		}
		, ...
	]
	, categorias:[{idCategorias}]
	, etiquetas:[{idEtiqueta}]
}
~~~


+ Productos

Está coleccion servira para administrar los productos de la tienda. A continuación se describe los campos que contendra.

~~~javascript
	{
	  sku: "00e8da9b",
		idTienda:1234ASDF
	  titulo: "Afgano",
	  descripcion: "Oleo sobre tela.",
	  cantidad : 100,
		detalles: 'Detalles en formato markdown O WYSWYG',
		estatus:'Disponible|Agotado',
		visibilidad:'Publico|Privado',
		dimensiones:{
			alto: 120,
			ancho: 240,
			profundo: 10,
			peso:10
		},
	  envio: {
	    peso: 6,
	    dimensiones: {
				alto: 120,
				ancho: 240,
				profundo: 10
	    },
			costo:120,
			transportista:"estafeta"
	  },
	  precio: {
	    lista: 2200,
			mayoreo:1500,
			menudeo:2200,
			promociones:[
				{
					rebaja:1000
					, porcentajeRebaja:50
					, fechaInicioVigencia:"20150710"
					, fechaFinVigencia:"20150710"
				}
			]
	  },
		productosRelacionados:[
			sku:"ASDF987ASFD987"
			, ...
		]
		, comentarios:[
			{
				idUsuario:1234asdf
				, comentario:"Excelente Producto"
				, clasificacion:5
			}
		]
		, categorias:[
			idCategoria
			, ...
		]
		, etiquetas:[
			idEtiqueta
			, ...
		]
	}
~~~

####Entidad de Auditoria para las colecciones.

Está entidad pretende guardar metadatos para la posterior auditoria de los movimiento de un registro en una colección de datos. A continuación se describe los campos que contendra.

~~~javascript
{
	idTransaccion
	, fechaCreacion:"20150761"
	, usuarioCreacion:"WriteStoreUser"
	, modificaciones:[
		{
			idTransaccion:A6SDF4AS65DF4
			, fechaModificacion:"20150761"
			, usuarioModificacion:"20150761"
		}
	]
}
~~~javascript
