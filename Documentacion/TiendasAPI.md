### TiendasAPI  
Administración de la tienda en linea online.

Base: **`/TiendaAPI/v1/`**

`GET` **/tiendas/{idTienda}/categorias**

---
curl
`GET `

Request

~~~curl
GET /tiendas/1/categorias HTTP/1.1  
Host: onlinestore.com  
Content-Type: application/json  
~~~

Response
~~~curl
HTTP/1.1 200 OK
Server: nginx
Content-Type: application/json
Connection: close
X-Powered-By: PHP/5.5.5-1+debphp.org~quantal+2
Cache-Control: no-cache, private
Date: Fri, 22 Nov 2013 16:37:57 GMT
Transfer-Encoding: Identity

{
  datos:[
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
~~~
