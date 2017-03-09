MicroServicios Store
===

Esta guía pretende listar el conjunto de APISRESTFul necesarias para el funcionamiento de la aplicacion "OnlineStore".

A continuación se muestra una recomendación acerca de la descomposición en micro servicios para la aplicación:

> + **Shopping Cart Service** – Number of items in the shopping cart
> + **Order Service** – Order history  
> + **Catalog Service** – Basic product information,such as productname,image and price  
> + **Review Service** – Customerreviews  
> + **Inventory Service** – Low inventory warning  
> + **Shipping Service** – Shipping options, deadlines, and costs, drawn separately from the shipping provider’s API  
> + **Recommendation Service** – Suggested items

Descomposicion a MicroServicios
---

A continuación se muestran las APISRESTFul que utilizará la aplicación organizadas en MicroServicios.

### TiendaAPI  
Administración de la tienda en linea online.

Base: **`/TiendaAPI/v1/`**

>Tienda

`GET` **/tiendas/{idTienda}**  
`POST` **/tiendas/**  
`PUT` **/tiendas/{idTienda}**  
`PATCH` **/tiendas/{idTienda}**  

>Secciones

`GET` **/tiendas/{idTienda}/secciones**  
`POST` **/tiendas/{idTienda}/secciones**  
`PUT` **/tiendas/{idTienda}/secciones/{idSeccion}**  
`PATCH` **/tiendas/{idTienda}/secciones/{idSeccion}**  

>Categorias

`GET` **/tiendas/{idTienda}/categorias**  
`POST` **/tiendas/{idTienda}/categorias**  
`PUT` **/tiendas/{idTienda}/categorias/{idCategorias}**  
`PATCH` **/tiendas/{idTienda}/categorias/{idCategorias}**  


>Etiquetas

`GET` **/tiendas/{idTienda}/etiquetas**  
`POST` **/tiendas/{idTienda}/etiquetas**  
`PUT` **/tiendas/{idTienda}/etiquetas/{idEtiqueta}**  
`PATCH` **/tiendas/{idTienda}/etiquetas/{idEtiqueta}**  

>Productos

`GET` **/tiendas/{idTienda}/secciones/{idSeccion}/productos/**    
`POST` **/tiendas/{idTienda}/secciones/{idSeccion}/productos/**  
`PUT` **/tiendas/{idTienda}/secciones/{idSeccion}/productos/{idProducto}**  
`PATCH` **/tiendas/{idTienda}/secciones/{idSeccion}/productos/{idProducto}**  

### UsuariosAPI  
Administración de los usuarios de la tienda (comprador y vendedor).

Base: **`/UsuariosAPI/v1/`**

>Usuarios

`GET` **/usuarios/{idUsuario}**  
`POST` **/usuarios/**  
`PUT` **/usuarios/{idUsuario}**  
`PATCH` **/usuarios/{idUsuario}**  

>Carrito Compras

`GET` **/usuarios/{idUsuario}/carritoCompras**  
`POST` **/usuarios/{idUsuario}/carritoCompras**  
`PUT` **/usuarios/{idUsuario}/carritoCompras**  
`PATCH` **/usuarios/{idUsuario}/carritoCompras**  

>Lista de Deseos

`GET` **/usuarios/{idUsuario}/listaDeseos/**  
`GET` **/usuarios/{idUsuario}/listaDeseos/{idListaDeseo}**  
`POST` **/usuarios/{idUsuario}/listaDeseos/**  
`PUT` **/usuarios/{idUsuario}/listaDeseos/{idListaDeseo}**  
`PATCH` **/usuarios/{idUsuario}/listaDeseos/{idListaDeseo}**  

>Login

`POST` **/usuarios/{idUsuario}/login**  

### OrdenesAPI  
Administración de las ordenes de compra del cliente.

Base: **`/OrdenesAPI/v1/`**

`GET` **/usuarios/{idUsuario}/ordenes**  
`POST` **/usuarios/{idUsuario}/ordenes**  
`GET` **/usuarios/{idUsuario}/ordenes/{idOrden}**  
`PUT` **/usuarios/{idUsuario}/ordenes/{idOrden}**  
`PATCH` **/usuarios/{idUsuario}/ordenes/{idOrden}**  


### PagosAPI  `Investigar Pago de PayPal`
Administración del pago de las ordenes de compra.

Base: **`/PagosAPI/v1/`**

`GET` **/usuarios/{idUsuario}/pagos**  
`GET` **/usuarios/{idUsuario}/ordenes/{idOrden}/pagos**

### InventarioAPI  
Administración del almacen y stock de los productos para la tienda.

Base: **`/InventarioAPI/v1/`**

`GET` **/tiendas/{idTienda}/productos/**  
`GET` **/tiendas/{idTienda}/productos/{idProductos}/**  
`POST` **/tiendas/{idTienda}/productos/**  
`PUT` **/tiendas/{idTienda}/productos/{idProducto}**  
`PATCH` **/tiendas/{idTienda}/productos/{idProducto}**  

### EnviosAPI
Administración del envío de las ordenes de compra al cliente.

`GET` **/usuarios/{idUsuario}/ordenes/envios**  
`POST` **/usuarios/{idUsuario}/ordenes/envios**  
`PUT` **/usuarios/{idUsuario}/ordenes/envios**  
`PATCH` **/usuarios/{idUsuario}/ordenes/envios**  

Verbos HTTP
---

GET: Para consultar y leer recursos  
POST: Para crear recursos  
PUT: Para editar recursos  
DELETE: Para eliminar recursos  
PATCH: Para editar partes concretas de un recurso  

Códigos HTTP
---

|Código HTTP | Descripción |
|:---:|:---:|
| 200 OK | Respuesta a un exitoso GET, PUT, PATCH o DELETE. Puede ser usado también para un POST que no resulta en una creación. |
| 201 Created | Respuesta a un POST que resulta en una creación. Debería ser combinado con un encabezado Location, apuntando a la ubicación del nuevo recurso. |
| 202 Accepted | La petición es aceptada pero procesada de manera asincrona (por ejemplo codificacion de video, redimensionamiento de imagen) |
| 204 No Content | Respuesta a una petición exitosa que no devuelve un body (como una petición DELETE) |
| 304 Not Modified | Usado cuando el cacheo de encabezados HTTP está activo. No había nuevos datos para retornar. |
| 400 Bad Request | La petición está malformada, como por ejemplo, si el contenido no fue bien parseado. |
| 401 Unauthorized | Cuando los detalles de autenticación son inválidos o no son otorgados. También útil para disparar un popup de autorización si la API es usada desde un navegador. |
| 403 Forbidden | Cuando la autenticación es exitosa pero el usuario no tiene permiso al recurso en cuestión. |
| 404 Not Found | Cuando un recurso no existente es solicitado. |
| 405 Method Not Allowed | Cuando un método HTTP que está siendo pedido no está permitido para el usuario autenticado. |
| 406 Not Acceptable | El servidor no es capaz de devolver los datos en ninguno de los formatos aceptados por el cliente, indicados por éste en la cabecera "Accept" de la petición. |
| 410 Gone | Indica que el recurso en ese endpoint ya no está disponible. Útil como una respuesta en blanco para viejas versiones de la API |
| 415 Unsupported Media Type | Si el tipo de contenido que solicita la petición es incorrecto |
| 418 I'm a teapot | Soy una tetera. |
| 422 Unprocessable Entity | Utilizada para errores de validación. La solicitud está bien formada pero fue imposible seguirla debido a errores semánticos. |
| 429 Too Many Requests | Cuando una petición es rechazada debido a la tasa límite . |
| 500 Internal Server Error | El servidor no soporta alguna funcionalidad necesaria para responder a la solicitud del navegador (como por ejemplo el método utilizado para la petición) |
| 501 Not Implemented | El servidor no soporta alguna funcionalidad necesaria para responder a la solicitud del navegador (como por ejemplo el método utilizado para la petición) |
| 502 Bad Gateway | API esta caida o esta siendo actualizada. El servidor está actuando de proxy o gateway y ha recibido una respuesta inválida del otro servidor, por lo que no puede responder adecuadamente a la petición del navegador.|
| 503 Service Unavailable| El API no esta disponible, intenta mas tarde. El servidor no puede responder a la petición del navegador porque está congestionado o está realizando tareas de mantenimiento.|
| 504 Gateway Timeout | El servidor está actuando de proxy o gateway y no ha recibido a tiempo una respuesta del otro servidor, por lo que no puede responder adecuadamente a la petición del navegador. |

Body de Petición y Respuesta
---

Request

~~~curl
GET /tiendas/1/categorias HTTP/1.1  
Host: onlinestore.com  
Content-Type: application/json  
~~~

Response

Style `Build API's you won't hate`
~~~
HTTP/1.1 200 OK
Server: nginx
Content-Type: application/json
Connection: close
X-Powered-By: PHP/5.5.5-1+debphp.org~quantal+2
Cache-Control: no-cache, private
Date: Fri, 22 Nov 2013 16:37:57 GMT
Transfer-Encoding: Identity

{
  meta:{
    id:"ASDF-123456789-QWER"
    , code:"ERR-01234"
    , status:404
    , type:"OAuthException"
    , message:"Failed for Authentication"
    , detail:"Session has expired at unix time 1234567890."
    , errors:[
      //Aqui los errores especificos.
    ]
  }
  , results:{
    tiendas:{
      data:[
        //Aqui la informacion...
      ]
    }
  }
}
~~~

Style `Foursquare`
~~~
HTTP/1.1 200 OK
Server: nginx
Content-Type: application/json
Connection: close
X-Powered-By: PHP/5.5.5-1+debphp.org~quantal+2
Cache-Control: no-cache, private
Date: Fri, 22 Nov 2013 16:37:57 GMT
Transfer-Encoding: Identity

{
  meta:{
    code:"200"
    , error:{
      errorType:{...}
      , errorDetail:{...}
    }
  }
  , notifications:{
    notifications:[...]
  }
  , response:{
    results:[
      {
        idTienda:1
        , nombreTienda:"TiendaPrueba"
      }
      , {
        idTienda:1
        , nombreTienda:"TiendaPrueba"
      }
    ]
  }


}
~~~

Referencias
---

> http://www.restpatterns.org/HTTP_Status_Codes/406_-_Not_Acceptable
> https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
> https://developer.foursquare.com/overview/responses
> https://dev.twitter.com/basics
> https://dev.twitter.com/overview/api/response-codes
