# Tema 3: 3. Métodos de prueba de usabilidad


<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->

## BLOQUE: iconobloque-texto-color
//assets: 1.svg, 2.png

//iconobloque
Las pruebas de integración son un paso intermedio entre las pruebas unitarias y las pruebas de sistema. Se enfocan en validar que múltiples unidades de código, que ya han sido validadas individualmente, funcionen correctamente cuando se integran entre sí. La clave de este tipo de prueba es garantizar que los módulos colaboren de forma adecuada y que los contratos de interacción estén bien definidos y respetados.

//texto
En el contexto de una aplicación desarrollada con Spring Boot, las pruebas de integración son fundamentales para verificar que:

## BLOQUE: tarjetas-boton 3:3:3:3
//assets: 3.svg, 4.svg, 5.svg, 6.svg


Los repositorios interactúan correctamente con la base de datos.

Los servicios se comunican con sus dependencias como se espera.

Los controladores exponen correctamente las funcionalidades a través de endpoints REST.

La configuración del contexto de Spring es correcta y no genera errores.


## BLOQUE: imagen-texto-color 
//assets: 7.png

//texto
Estas pruebas permiten encontrar errores que no son detectables mediante pruebas unitarias, como:

//color
    //lista-flechas
    - Inyecciones incorrectas de dependencias.
    - Configuraciones erróneas en archivos application.yml o application.properties.
    - Problemas con mapeos de entidades o anotaciones JPA.
    - Fallos en la comunicación con otros microservicios o APIs REST externas.

//texto
En la siguiente tabla, se presenta la diferencia entre pruebas unitarias y pruebas de integración:


## BLOQUE: tabla


Tabla 1. Diferencia entre pruebas unitarias y pruebas de integración

Característica
Pruebas unitarias
Pruebas de integración

Alcance.
Método/clase aislada.
Módulos/capas en conjunto.

Acceso a base de datos.
No (se usan mocks).
Sí (real o en memoria como H2).

Velocidad.
Muy rápida.
Media.

Dependencias externas.
Simuladas con mocks.
Reales o configuradas específicamente.

Herramientas recomendadas.
JUnit, Mockito.
Spring Boot Test, TestRestTemplate.


## BLOQUE: 
## Crear un proyecto Spring Boot básico para pruebas de integración


## BLOQUE: color-imagen
//assets: 8.png

//color
    El primer paso es crear el proyecto desde Spring Initializr.

    Ir a: https://start.spring.io/

    **Configurar**:
    - Lenguaje: Java
    - Grupo: com.pruebas
    - Artefacto: integracion-demo

    **Dependencias**:
    - Spring Web
    - Spring Data JPA
    - H2 Database
    - Spring Boot DevTools
    - Spring Boot Test
  
    Descargar y descomprimir el proyecto, luego abrirlo en IntelliJ IDEA o Visual Studio Code.



## BLOQUE: 
## Estructura básica del proyecto generado

## BLOQUE: figura-completa
//assets: 9.png

Figura 1. Estructura del proyecto


## BLOQUE: texto
## Configuración para pruebas

En src/main/resources/application.properties añadir:

## BLOQUE: figura-completa
//assets: 11.png

Figura 2. Propiedades del proyecto


## BLOQUE: texto
Esta configuración permite que la base de datos se cree en memoria cada vez que se ejecutan las pruebas.

## BLOQUE: img-anexo
//assets: 12.png

### Caso práctico completo: prueba de integración entre capas
La validación del funcionamiento conjunto de distintos componentes en una aplicación es clave para garantizar su correcto desempeño en entornos reales. En el PDF Caso práctico completo, se desarrolla paso a paso un proyecto en Java con Spring Boot que permite evidenciar cómo interactúan modelo, repositorio, servicio y controlador. A través de una prueba de integración completa, se ilustra cómo verificar de manera automatizada la coherencia y funcionalidad de todo el sistema desde una perspectiva transversal.

Anexo_2.pdf

## BLOQUE: texto

## Buenas prácticas en pruebas de integración

## BLOQUE: color-imagen
//assets: 13.png

//color
    //lista-flechas
    - Usar perfiles específicos de pruebas (application-test.properties).
    - No sobrecargar pruebas de integración con lógica de negocio compleja.
    - Asegurar que la base de datos utilizada para pruebas esté limpia en cada ejecución.
    - Automatizar la ejecución en pipelines CI/CD.
    - Validar datos reales y de borde (por ejemplo, búsquedas vacías o usuarios duplicados).


## BLOQUE: 

## Tips para implementar pruebas de integración efectivas

## BLOQUE: slyderf-cards 4:8
//assets: 14.png, 15.svg, 16.svg, 17.svg, 18.svg, 19.svg

Mantener las pruebas lo más independientes posible.

Usar bases de datos en memoria para evitar efectos secundarios.

Evitar incluir lógica condicional en los tests.

Priorizar cobertura de flujos críticos del negocio.

Nombrar las pruebas de forma descriptiva del flujo que validan.




## BLOQUE: bg-full-icono-texto
//assets: 20.svg

Las pruebas de integración, bien diseñadas y automatizadas, permiten construir software robusto y detectar errores sutiles que no se manifiestan al probar componentes de forma aislada. Constituyen un puente vital entre la validación unitaria y la validación del sistema completo. 

## BLOQUE: bloque-material-complementario

Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389 

Miw-upm. (2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube. https://www.youtube.com/watch?v=Lnw1Ftp-x1g 


