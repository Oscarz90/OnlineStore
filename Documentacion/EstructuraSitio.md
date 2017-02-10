# Documentación

Estructura
---------------------------------------


```
app/
**Ubicación de componentes compartidos a través de la aplicación.**
-- compartidos/					  
---- encabezado/  ** nombreBloque **				  
------ encabezadoVista.html 	**nombreBloque+Vista.html**     
---- pie/								
------- pieVista.html
**Ubicación donde residen los módulos específicos de la aplicación.**
-- componentes/					 
---- catalogo/ 	   ** nombreBloque **   
------- catalogoServicio.js **nombreBloque+Servicio.js**
------- catalogoControlador.js **nombreBloque+Controlador.html**
------- catalogoVista.html **nombreBloque+Vista.html**
---- carro/
------- carroServicio.js
------- carroControlador.js
------- carroVista.html
---- pago/
------- pagoServicio.js
------- pagoControlador.js
------- pagoVista.html
-- app.module.js
-- app.routes.js
**Úbicación donde residen los elementos que contendrá el sitio.**
activos/
-- img/
-- css/
---- catalogo/
---- pago/
---- carro/
-- js/
-- librerias/
index.html
```
