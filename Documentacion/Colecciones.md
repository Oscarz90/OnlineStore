# Colecciones

Introducción
---

Esta aplicación usará como plataforma de almacenamiento de datos la versión mas reciente de MongoDB. Atenderemos pues al diseño de la solución mediante la generación de las colecciones necesarias de objetos según sea necesaria para la interacción entre los microservicios que estarán disponibles para la construcción del WebApp.

Colecciones
---

- Producto

	La realización del esquema del producto se realizará en base a las recomendaciones que podemos encontrar en la documentación oficial de MongoDB, la cual consistirá en una colección conformada de la siguiente manera:

```javascript

	{
	  sku: "00e8da9b",
	  categoria: "Oleo sobre Tela",
	  titulo: "Afgano",
	  descripcion: "Oleo sobre tela.",
	  inventario : 100,
	  envio: {
	    peso: 6,
	    dimensiones: {
	      alto: 120,
	      ancho: 240,
	      profundo: 10
	    },
	  },
	  precio: {
	    lista: 2200,
	    rebaja: 0,
	  },
	  detalles: {
	    produtor : "",
	    linea : ["oleo","acuarela","couche","fresco"]
	    titulo: "A Love Supreme [Original Recording Reissued]",
	    descripcion: [ "Jazz", "General" ],
	  },
	}