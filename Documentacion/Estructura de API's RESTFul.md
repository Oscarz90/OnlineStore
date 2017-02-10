Arquitectura de API RESTFul.
---

A continuación se lista la estructura de directorios con la que deberá contar las API RESTFul de la aplicación:

~~~
LICENSE
.gitignore
.ambiente
documentacion.md
index.js
package.json
node_modules/
app/
  configuracion/
    ambientes/ (desarrollo|qa|preproduccion|produccion)
      desarrollo.js*
      produccion.js*
      qa.js*
    constantes/
      constantes.js*
    inicializadores/
      baseDatos.js*
      servidor.js*
    autenticacion/
      autenticacion.js*
  middleware/
    log.js*
    bodyParser.js*
    cookieParser.js*
    session.js*
    router.js*
    auth.js*
  accesoDatos/ ([Entidad]AD)
    ProductosAD.js*
  entidades/([Entidad])
    Productos.js*
  controladores/ ([Entidad]Controlador)
    ProductosControlador.js*
  rutas/ ([Entidad]Rutas)
    ProductosRutas.js*
  utilidades/
  colecciones/ ([Entidad]Coleccion)
    ProductosColeccion.js*
lib/
public/
  documentacion.html*
test/
  pruebas.js*
~~~

\* Archivos de ejemplo e ilustración.

+ **LICENSE:** Archivo con la licencia de software de la API.
+ **.gitignore:** Archivo git con la lista de archivos a ignorar en el commit de los archivos.
+ **.ambiente:** Archivo con la configuración del ambiente en el que se encuentra la aplicación.
+ **documentacion.md:** Documento de markdown con el listado de operaciones de la API.
+ **index.js:** Punto inicial de la API.
+ **package.json:** Mantiene la configuración del proyecto.
+ **node_modules:** Todos los módulos descritos en el archivo package.json estarán ubicados en esta carpeta.
+ **app:** Carpeta base del codigo fuente de la API.
+ **app/configuracion:** Archivos de configuración de la API.
+ **app/configuracion/ambientes:** Archivos con la configuración para los diferentes ambientes durante el ciclo de vida del desarrollo del API.
+ **app/configuracion/constantes:** Definición de constantes del API.
+ **app/configuracion/inicializadores:** Inicialización de recursos necesarios para el API.
+ **app/configuracion/autenticacion:** Archivo de configuración de la autenticacion.
+ **app/middleware:** Ejecuta tareas durante la peticion/respuesta del API, tales como log, transformación de mensajes, sesiones, cookies, etc..
+ Contiene los modulos y archivos que intervienen con los diferentes ambientes de desarrollo.
+ **app/accesoDatos:** Contiene la obtención de datos por entidad.
+ **app/entidades:** Entidades que abstraen la base de datos del API.
+ **app/controladores:** Archivos controladores de las operaciones del API.
+ **app/rutas:** Archivos que implementan los controladores para administrar las peticiones entrates al API.
+ **app/utilidades:** Archivos con funciones reutilizables y de ayuda global para el API.
+ **app/colecciones:** Definición de las restricciones de las colecciones de base de datos (mongodb).
+ **lib:** Librerias o recursos externos necesarios para la aplicación tales como algoritmos de terceros o librerias no existentes en NPM.
+ **public:** Directorio con archivos publicos tales como documentacion del API.
+ **test:** Archivos de pruebas unitarias para el API.
