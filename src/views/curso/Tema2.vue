<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Pruebas unitarias'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/16: texto-imagen 8:4
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Una prueba unitaria es un tipo de prueba de software que se centra en verificar el comportamiento de una unidad individual de código, en aislamiento. En la mayoría de los lenguajes de programación orientados a objetos, una unidad representa una clase o uno de sus métodos. El objetivo principal es garantizar que dicha unidad realiza su función de forma correcta, predecible y sin efectos colaterales, sobre otros componentes del sistema.
        p(data-aos="fade-left") Las pruebas unitarias permiten:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")

    .bg-full-width.bg-gradiente-3
      .px-4.px-md-5.pb-md-3
        // Bloque 2/16: tarjetas-boton
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/2.svg" style="width: 90px")
              h5.mb-2.text-center Detectar errores en etapas tempranas del desarrollo.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" style="width: 90px")
              h5.mb-2.text-center Facilitar la refactorización y evolución del código.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" style="width: 90px")
              h5.mb-2.text-center Servir como documentación viva del comportamiento esperado.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" style="width: 90px")
              h5.mb-2.text-center Mejorar la calidad y confiabilidad general del sistema.

        // Bloque 3/16: párrafo normal (título)
        .row.justify-content-center
          .col-12
            h2.mb-4(data-aos="fade-left") Alcance de una prueba unitaria

    // Bloque 4/16: img-bloque
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p(data-aos="fade-up") El alcance de una prueba unitaria es limitado, por definición. No debe verificar interacciones entre módulos ni acceso a recursos externos como bases de datos, archivos o servicios web. Una buena prueba unitaria debe ejecutarse de forma rápida y sin dependencia de factores externos. Cualquier dependencia debe ser simulada usando técnicas como mocking.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')

    // Bloque 5/16: párrafo normal (título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Tipos de pruebas unitarias
        p(data-aos="fade-left") Aunque las pruebas unitarias suelen clasificarse como un solo tipo dentro del conjunto de pruebas estructurales, se pueden identificar diferentes enfoques, según su objetivo:

    .bg-full-width.bg-gradiente-3
      .px-4.px-md-5.pb-md-3

        // Bloque 6/16: slyderf-cards 8:4
        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8

                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Pruebas de lógica de negocio
                    p.text-center Validan funciones que contienen reglas, cálculos o decisiones.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Pruebas de validación de datos
                    p.text-center Comprueban que los datos ingresados cumplan condiciones específicas (por ejemplo, formatos válidos o rangos permitidos).
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Pruebas de excepciones
                    p.text-center Evalúan cómo se comporta el código ante situaciones anómalas o errores esperados.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Pruebas con mocks
                    p.text-center Se centran en verificar cómo, la unidad bajo prueba, interactúa con otras dependencias simuladas.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Pruebas con parámetros múltiples
                    p.text-center Evalúan el mismo método bajo distintas condiciones de entrada (por ejemplo, con anotaciones @ParameterizedTest en JUnit 5).

              .col-lg-4
                figure
                  img(src='@/assets/curso/tema2/12.png', alt='')

    // Bloque 7/16: párrafo normal
    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") Las herramientas para pruebas unitarias en Java, son:

    // Bloque 8/16: infografia
    .bg-full-width.bg-color-info.mb-5
      .px-4.px-md-5.pt-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 1106px;").mx-auto
              .tarjeta.color-primario.p-3(x="73%" y="27%" numero="+")
                h5 JUnit 5 (Jupiter)
                p.mb-0 Biblioteca principal para la creación de pruebas. Ofrece anotaciones como @Test, @BeforeEach, @AfterEach, @Nested, @DisplayName, entre otras.
              .tarjeta.color-primario.p-3(x="60%" y="52%" numero="+")
                h5 Mockito
                p.mb-0 Framework de mocking, ampliamente utilizado para simular objetos dependientes, ideal para mantener las pruebas unitarias aisladas.
              .tarjeta.color-primario.p-3(x="64%" y="6%" numero="+")
                h5 AssertJ
                p.mb-0 Librería de aserciones que proporciona una sintaxis fluida y legible para comprobar resultados esperados.
              .tarjeta.color-primario.p-3(x="38%" y="68%" numero="+")
                h5 Hamcrest
                p.mb-0 Otra biblioteca de matchers utilizada junto a JUnit, para validaciones más expresivas.
              .tarjeta.color-primario.p-3(x="75%" y="65%" numero="+")
                h5 Spring Boot Test
                p.mb-0 Proporciona utilidades integradas para probar clases de Spring, como @MockBean, @WebMvcTest, y TestRestTemplate (aunque este último se usa más en pruebas de integración).
              .tarjeta.color-primario.p-3(x="24%" y="41%" numero="+")
                h5 Jacoco
                p.mb-0 Herramienta de análisis de cobertura que permite visualizar qué partes del código han sido cubiertas por las pruebas.

    // Bloque 9/16: imagen-texto-color
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 Estas herramientas no son excluyentes y pueden usarse agrupadamente, para desarrollar un conjunto de pruebas robusto, claro y mantenible.
        .bg-color-11.p-4.py-lg-5(data-aos="fade-left")
          p.mb-4 #[strong Las pruebas unitarias son la base del proceso de validación de calidad del software.] 
          p.mb-0 Se centran en comprobar el funcionamiento correcto de la unidad más pequeña e independiente del código, como una función, método o clase. El objetivo de estas pruebas es garantizar que, en condiciones controladas, el fragmento de código retorne la salida esperada para una entrada específica, sin depender de componentes externos.

    // Bloque 10/16: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 Desde la perspectiva de las buenas prácticas en ingeniería de software, la implementación de pruebas unitarias permite detectar errores de lógica, asegurar el cumplimiento de contratos (interfaces), documentar el comportamiento esperado del sistema y facilitar los procesos de refactorización. Son especialmente útiles en entornos de desarrollo ágiles y de integración continua, dado que aseguran que los cambios realizados no rompen funcionalidades existentes (pruebas de regresión).
        p(data-aos="fade-left") En Java, la herramienta más utilizada para pruebas unitarias es JUnit, especialmente en su versión 5 (también conocida como JUnit Jupiter), que ofrece anotaciones modernas, reglas de prueba personalizadas y mejor integración con herramientas de construcción como Maven y Gradle. Además, Mockito permite simular dependencias externas (mocking), lo cual es clave para probar unidades de código de forma aislada.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")

    // Bloque 11/16: párrafo normal (título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Estructura de una prueba unitaria en JUnit
        p(data-aos="fade-left") Una prueba unitaria, consta de tres fases principales:

    // Bloque 12/16: iconos-color 4:4:4
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-16.p-4(data-aos="fade-left").h-100.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Paso 1]
              p.mb-0 Preparación (Arrange): se configuran los objetos de prueba y sus dependencias.
      .col-lg-4
        .bg-color-16.p-4(data-aos="fade-left").h-100.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Paso 2]
              p.mb-0 Ejecución (Act): se ejecuta el método que se quiere probar.
      .col-lg-4
        .bg-color-16.p-4(data-aos="fade-left").h-100.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Paso 3]
              p.mb-0 Verificación (Assert): se verifica que el resultado sea el esperado.

    // Bloque 13/16: img-anexo
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Ejemplos
            p.mb-4(data-aos="fade-right") Las pruebas unitarias representan una herramienta esencial para verificar el correcto funcionamiento de componentes individuales del software desde etapas tempranas del desarrollo. En el PDF Ejemplos, se presentan casos aplicados que ilustran cómo construir pruebas unitarias efectivas en Java, desde métodos sencillos hasta escenarios con lógica condicional y simulación de dependencias usando Mockito. Estos ejemplos permiten comprender la estructura, el propósito y los beneficios de implementar pruebas automatizadas en entornos reales de programación.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplos
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/16.png', alt='')

    // Bloque 14/16: párrafo normal (título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Buenas prácticas en pruebas unitarias

    // Bloque 15/16: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Este ejercicio permite implementar una solución funcional básica utilizando la plataforma Arduino, ideal para familiarizarse con el manejo de sensores y la lógica de alertas en entornos IoT.
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Nombrar claramente las pruebas: testNombreMetodo_CasoEsperado_ResultadoEsperado.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Cada prueba debe validar una sola cosa.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Evitar usar lógica condicional dentro de las pruebas.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Usar mocks para aislar las unidades probadas.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Asegurar una alta cobertura sin descuidar la calidad de las pruebas.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Automatizar la ejecución de pruebas con herramientas como Maven (mvn test) o Gradle (gradle test).
        p(data-aos="fade-left") Las pruebas unitarias son esenciales para un desarrollo profesional y confiable, y constituyen la base sobre la cual se construyen las siguientes etapas de pruebas más complejas como la integración, el sistema y la aceptación.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")

    // Bloque 16/16: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511" target="_blank" rel="noopener noreferrer") Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=74sClDEYSQ4" target="_blank" rel="noopener noreferrer") Programando en JAVA. (2022, 9 de junio). PRUEBAS UNITARIAS en JAVA (JUNIT 5) - Tutorial Completo Fácil [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
