# Tema 4: 4.  Pruebas de sistema


<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->

## BLOQUE: iconobloque-texto-imagen
//assets: 1.svg, 2.png

//iconobloque
Las pruebas de sistema (System Testing), son aquellas que evalúan el sistema completo como una unidad, validando que todos los componentes trabajen de forma conjunta para cumplir con los requisitos funcionales y no funcionales establecidos. Son la última etapa antes de liberar un sistema hacia ambientes de aceptación o producción y simulan de manera realista el comportamiento del usuario final.

//texto
Estas pruebas no se enfocan en clases o módulos individuales, sino en el flujo completo de la aplicación: desde la recepción de una solicitud (por ejemplo, una petición HTTP) hasta la interacción con servicios internos, la base de datos y la respuesta generada. En este sentido, las pruebas de sistema abarcan desde la capa de presentación (si está disponible) hasta la capa de persistencia, validando entradas, procesos y salidas.

Su propósito es responder a la pregunta: ¿el sistema funciona como se espera desde la perspectiva del usuario?


## BLOQUE: imagen-texto-color
//assets: 3.png

//texto
Las características de las pruebas de sistema, son:

//color
    //lista-flechas
        - Se realizan en un entorno que replica la infraestructura de producción.
        - Involucran todas las capas del sistema: controladores, servicios, base de datos y dependencias externas.
        - No utilizan mocks ni simulaciones, sino componentes reales.
        - Evalúan tanto el comportamiento funcional como no funcional (rendimiento, seguridad, usabilidad, etc.).
        - Pueden automatizarse y ejecutarse dentro de pipelines CI/CD.
    
    **Herramientas recomendadas:**
    //lista-flechas
        - TestRestTemplate: para simular llamadas REST a endpoints desde pruebas automatizadas.
        - MockMvc: útil para simular peticiones HTTP sin iniciar el servidor real.
        - Postman/Newman: para diseñar pruebas automatizadas de API desde colecciones.
        - Rest Assured: librería de Java para pruebas funcionales sobre servicios REST.
        - Spring Boot Test: permite la configuración del entorno de pruebas completo.



## BLOQUE: anexo-img
//assets: 4.png

### Crear un proyecto básico para pruebas de sistema
La verificación del comportamiento integral de una aplicación desde la perspectiva del usuario final es esencial para garantizar su correcto funcionamiento antes de ser desplegada en producción. En el PDF Crear un proyecto básico para pruebas de sistema, se desarrolla un caso práctico que demuestra cómo implementar pruebas de sistema utilizando un enfoque de caja negra. A través de la simulación de peticiones reales en un entorno controlado, se valida el flujo completo de una API REST, desde la creación hasta la consulta de usuarios, asegurando así la consistencia funcional del sistema.

Anexo_3.pdf

## BLOQUE: 

## Buenas prácticas en pruebas de sistema


## BLOQUE: slyderf-cards
//assets: 5.png, 6.svg, 7.svg, 8.svg, 9.svg, 10.svg, 11.svg

Usar datos reales y casos de prueba representativos.

---

Preparar el entorno de datos antes de cada prueba o usar @Sql para cargar scripts.

---

Verificar tanto los códigos de estado HTTP como los datos retornados.

---

Evitar dependencias externas inestables; si existen, deben controlarse en un entorno aislado.

---

Incluir pruebas de errores esperados (por ejemplo, consultar un usuario inexistente).


## BLOQUE: bg-full-icono-texto
//assets: 12.png

Las pruebas de sistema ofrecen una visión realista de cómo se comporta la aplicación como un todo y son esenciales para validar la experiencia del usuario, detectar fallos de configuración y garantizar que el sistema esté listo para pasar a producción. 

## BLOQUE: material-complementario


Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389 

Miw-upm. (2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube. https://www.youtube.com/watch?v=Lnw1Ftp-x1g 
