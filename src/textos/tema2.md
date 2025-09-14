# Tema 2: 2. Pruebas unitarias

<!-- 
RUTA DE ASSETS: @/assets/curso/tema2/
DISEÑO DE REFERENCIA: tema2.png

INSTRUCCIONES:
- Numerar assets secuencialmente: 1.png, 2.svg, 3.png, etc.
- Usar **texto** para negritas (se renderiza como #[strong texto])
- Respetar orden exacto de marcadores //texto, //color, //assets
- Especificar distribución de columnas cuando sea necesario: 5:7, 4:8, 6:6

.bg-color
  &-1
    background-color: #CDD9F7
  &-2
    background-color: #FCEEB5
  &-3
    background-color: #5C2C88
  &-4
    background-color:**** #B6FBF3
  &-5
    background-color: #062678
  &-6
    background-color: #EDDBFD
-->

## BLOQUE: texto-imagen 8:4
//assets: 1.png

//texto
Una prueba unitaria es un tipo de prueba de software que se centra en verificar el comportamiento de una unidad individual de código, en aislamiento. En la mayoría de los lenguajes de programación orientados a objetos, una unidad representa una clase o uno de sus métodos. El objetivo principal es garantizar que dicha unidad realiza su función de forma correcta, predecible y sin efectos colaterales, sobre otros componentes del sistema.

Las pruebas unitarias permiten:

## BLOQUE: tarjetas-boton
//assets: 2.svg, 3.svg, 4.svg, 5.svg

Detectar errores en etapas tempranas del desarrollo.

---

Facilitar la refactorización y evolución del código.

---

Servir como documentación viva del comportamiento esperado.

---

Mejorar la calidad y confiabilidad general del sistema.




## BLOQUE: 

## Alcance de una prueba unitaria


## BLOQUE: img-bloque
//assets: 6.png


El alcance de una prueba unitaria es limitado, por definición. No debe verificar interacciones entre módulos ni acceso a recursos externos como bases de datos, archivos o servicios web. Una buena prueba unitaria debe ejecutarse de forma rápida y sin dependencia de factores externos. Cualquier dependencia debe ser simulada usando técnicas como mocking.

## BLOQUE: 

## Tipos de pruebas unitarias
Aunque las pruebas unitarias suelen clasificarse como un solo tipo dentro del conjunto de pruebas estructurales, se pueden identificar diferentes enfoques, según su objetivo:


## BLOQUE: slyderf-cards 8:4
//assets: 7.svg, 8.svg, 9.svg, 10.svg, 11.svg, 12.png


Pruebas de lógica de negocio
Validan funciones que contienen reglas, cálculos o decisiones.

---

Pruebas de validación de datos
Comprueban que los datos ingresados cumplan condiciones específicas (por ejemplo, formatos válidos o rangos permitidos).

---

Pruebas de excepciones
Evalúan cómo se comporta el código ante situaciones anómalas o errores esperados.

---

Pruebas con mocks.
Se centran en verificar cómo, la unidad bajo prueba, interactúa con otras dependencias simuladas.

---

Pruebas con parámetros múltiples
Evalúan el mismo método bajo distintas condiciones de entrada (por ejemplo, con anotaciones @ParameterizedTest en JUnit 5).


## BLOQUE: 

Las herramientas para pruebas unitarias en Java, son:



## BLOQUE: infografia
//assets: infografia1.svg

//puntos
0% 10%
JUnit 5 (Jupiter)
Biblioteca principal para la creación de pruebas. Ofrece anotaciones como @Test, @BeforeEach, @AfterEach, @Nested, @DisplayName, entre otras.

10% 20%
Mockito
Framework de mocking, ampliamente utilizado para simular objetos dependientes, ideal para mantener las pruebas unitarias aisladas.

20% 30%
AssertJ
Librería de aserciones que proporciona una sintaxis fluida y legible para comprobar resultados esperados.

30% 40%
Hamcrest
Otra biblioteca de matchers utilizada junto a JUnit, para validaciones más expresivas.

40% 50%
Spring Boot Test
Proporciona utilidades integradas para probar clases de Spring, como @MockBean, @WebMvcTest, y TestRestTemplate (aunque este último se usa más en pruebas de integración).

50% 60%
Jacoco
Herramienta de análisis de cobertura que permite visualizar qué partes del código han sido cubiertas por las pruebas.



## BLOQUE: imagen-texto-color
//assets: 13.png

//texto
Estas herramientas no son excluyentes y pueden usarse agrupadamente, para desarrollar un conjunto de pruebas robusto, claro y mantenible.

//color
**Las pruebas unitarias son la base del proceso de validación de calidad del software.**
Se centran en comprobar el funcionamiento correcto de la unidad más pequeña e independiente del código, como una función, método o clase. El objetivo de estas pruebas es garantizar que, en condiciones controladas, el fragmento de código retorne la salida esperada para una entrada específica, sin depender de componentes externos.


## BLOQUE: color-texto-imagen
//assets: 14.png

//color 2
Desde la perspectiva de las buenas prácticas en ingeniería de software, la implementación de pruebas unitarias permite detectar errores de lógica, asegurar el cumplimiento de contratos (interfaces), documentar el comportamiento esperado del sistema y facilitar los procesos de refactorización. Son especialmente útiles en entornos de desarrollo ágiles y de integración continua, dado que aseguran que los cambios realizados no rompen funcionalidades existentes (pruebas de regresión).

//texto
En Java, la herramienta más utilizada para pruebas unitarias es JUnit, especialmente en su versión 5 (también conocida como JUnit Jupiter), que ofrece anotaciones modernas, reglas de prueba personalizadas y mejor integración con herramientas de construcción como Maven y Gradle. Además, Mockito permite simular dependencias externas (mocking), lo cual es clave para probar unidades de código de forma aislada.

## BLOQUE: 

## Estructura de una prueba unitaria en JUnit
Una prueba unitaria, consta de tres fases principales:



## BLOQUE: iconos-color 4:4:4
//assets: 15.svg, 15.svg, 15.svg

**Paso 1**
Preparación (Arrange): se configuran los objetos de prueba y sus dependencias.

**Paso 2**
Ejecución (Act): se ejecuta el método que se quiere probar.

**Paso 3**
Verificación (Assert): se verifica que el resultado sea el esperado.




## BLOQUE: img-anexo
//assets: 16.png

## Ejemplos
Las pruebas unitarias representan una herramienta esencial para verificar el correcto funcionamiento de componentes individuales del software desde etapas tempranas del desarrollo. En el PDF Ejemplos, se presentan casos aplicados que ilustran cómo construir pruebas unitarias efectivas en Java, desde métodos sencillos hasta escenarios con lógica condicional y simulación de dependencias usando Mockito. Estos ejemplos permiten comprender la estructura, el propósito y los beneficios de implementar pruebas automatizadas en entornos reales de programación.

Anexo_1.pdf


## BLOQUE: 
## Buenas prácticas en pruebas unitarias



## BLOQUE: texto-color-imagen
//assets:

//texto
Este ejercicio permite implementar una solución funcional básica utilizando la plataforma Arduino, ideal para familiarizarse con el manejo de sensores y la lógica de alertas en entornos IoT.

//color 4
  //lista-flechas
  - Nombrar claramente las pruebas: testNombreMetodo_CasoEsperado_ResultadoEsperado.
  - Cada prueba debe validar una sola cosa.
  - Evitar usar lógica condicional dentro de las pruebas. 
  - Usar mocks para aislar las unidades probadas.
  - Asegurar una alta cobertura sin descuidar la calidad de las pruebas.
  - Automatizar la ejecución de pruebas con herramientas como Maven (mvn test) o Gradle (gradle test).


//texto
Las pruebas unitarias son esenciales para un desarrollo profesional y confiable, y constituyen la base sobre la cual se construyen las siguientes etapas de pruebas más complejas como la integración, el sistema y la aceptación.

## BLOQUE: bloque-material-complementario

Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511 

Programando en JAVA. (2022, 9 de junio). PRUEBAS UNITARIAS en JAVA (JUNIT 5) - Tutorial Completo Fácil [Video]. YouTube.  https://www.youtube.com/watch?v=74sClDEYSQ4 
