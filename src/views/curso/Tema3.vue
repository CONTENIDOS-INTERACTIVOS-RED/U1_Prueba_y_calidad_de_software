<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Métodos de prueba de usabilidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/18: iconobloque-texto-color
    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las pruebas de integración son un paso intermedio entre las pruebas unitarias y las pruebas de sistema. Se enfocan en validar que múltiples unidades de código, que ya han sido validadas individualmente, funcionen correctamente cuando se integran entre sí. La clave de este tipo de prueba es garantizar que los módulos colaboren de forma adecuada y que los contratos de interacción estén bien definidos y respetados.
        p(data-aos="fade-left") En el contexto de una aplicación desarrollada con Spring Boot, las pruebas de integración son fundamentales para verificar que:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")

    .bg-full-width.bg-gradiente-3
      .px-4.px-md-5.pb-md-3

        // Bloque 2/18: tarjetas-boton 3:3:3:3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/3.svg" style="width: 90px")
              h5.mb-2.text-center Los repositorios interactúan correctamente con la base de datos.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/4.svg" style="width: 90px")
              h5.mb-2.text-center Los servicios se comunican con sus dependencias como se espera.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/5.svg" style="width: 90px")
              h5.mb-2.text-center Los controladores exponen correctamente las funcionalidades a través de endpoints REST.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/6.svg" style="width: 90px")
              h5.mb-2.text-center La configuración del contexto de Spring es correcta y no genera errores.

    // Bloque 3/18: imagen-texto-color
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Estas pruebas permiten encontrar errores que no son detectables mediante pruebas unitarias, como:
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Inyecciones incorrectas de dependencias.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Configuraciones erróneas en archivos application.yml o application.properties.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Problemas con mapeos de entidades o anotaciones JPA.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Fallos en la comunicación con otros microservicios o APIs REST externas.
        p(data-aos="fade-left") En la siguiente tabla, se presenta la diferencia entre pruebas unitarias y pruebas de integración:

    // Bloque 4/18: tabla
    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Diferencia entre pruebas unitarias y pruebas de integración

    .tabla-a.color-acento-contenido.mb-5
      table
        caption Tabla comparativa entre tipos de pruebas
        thead
          tr
            th.bg-color-tabla.text-white Característica
            th.bg-color-tabla.text-white Pruebas unitarias
            th.bg-color-tabla.text-white Pruebas de integración
        tbody
          tr
            td Alcance.
            td Método/clase aislada.
            td Módulos/capas en conjunto.
          tr
            td Acceso a base de datos.
            td No (se usan mocks).
            td Sí (real o en memoria como H2).
          tr
            td Velocidad.
            td Muy rápida.
            td Media.
          tr
            td Dependencias externas.
            td Simuladas con mocks.
            td Reales o configuradas específicamente.
          tr
            td Herramientas recomendadas.
            td JUnit, Mockito.
            td Spring Boot Test, TestRestTemplate.

    // Bloque 5/18: párrafo normal (título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Crear un proyecto Spring Boot básico para pruebas de integración


    // Bloque 6/18: color-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4.py-lg-5(data-aos="fade-left")
          p.mb-3 El primer paso es crear el proyecto desde Spring Initializr.
          p.mb-3 Ir a: https://start.spring.io/
          p.mb-3 #[strong Configurar]:
          ul.mb-3
            li ⊕ Lenguaje: Java
            li ⊕Grupo: com.pruebas
            li ⊕ Artefacto: integracion-demo
          p.mb-3 #[strong Dependencias]:
          ul.mb-3
            li ⊕ Spring Web
            li ⊕ Spring Data JPA
            li ⊕ H2 Database
            li ⊕ Spring Boot DevTools
            li ⊕ Spring Boot Test
          p.mb-0 Descargar y descomprimir el proyecto, luego abrirlo en IntelliJ IDEA o Visual Studio Code.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")

    // Bloque 7/18: párrafo normal (título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Estructura básica del proyecto generado

    // Bloque 8/18: figura-completa
    .titulo-figura.mb-2
      h5 Figura 1. 
      span Estructura del proyecto

    .bg-color-1.p-4.mb-5
      figure
        img(src="@/assets/curso/tema3/9.png", alt="", style="max-width: 561px").mx-auto

    // Bloque 9/18: texto (párrafo normal - título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Configuración para pruebas
        p(data-aos="fade-left") En src/main/resources/application.properties añadir:

    // Bloque 10/18: figura-completa
    .titulo-figura.mb-2
      h5 Figura 2. 
      span Propiedades del proyecto

    .bg-color-1.p-4.mb-5
      figure
        img(src="@/assets/curso/tema3/11.png", alt="", style="max-width: 617px").mx-auto

    // Bloque 11/18: texto (párrafo normal)
    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") Esta configuración permite que la base de datos se cree en memoria cada vez que se ejecutan las pruebas.

    // Bloque 12/18: img-anexo
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/12.png', alt='')
          .col-lg-8.text-white
            h3.mb-4(data-aos="flip-up") Caso práctico completo: prueba de integración entre capas
            p.mb-4(data-aos="fade-right") La validación del funcionamiento conjunto de distintos componentes en una aplicación es clave para garantizar su correcto desempeño en entornos reales. En el PDF Caso práctico completo, se desarrolla paso a paso un proyecto en Java con Spring Boot que permite evidenciar cómo interactúan modelo, repositorio, servicio y controlador. A través de una prueba de integración completa, se ilustra cómo verificar de manera automatizada la coherencia y funcionalidad de todo el sistema desde una perspectiva transversal.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Caso práctico completo

    // Bloque 13/18: texto (párrafo normal - título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Buenas prácticas en pruebas de integración

    // Bloque 14/18: color-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-4.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Usar perfiles específicos de pruebas (application-test.properties).
            li.mb-2
              i.fas.fa-arrow-circle-right
              | No sobrecargar pruebas de integración con lógica de negocio compleja.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Asegurar que la base de datos utilizada para pruebas esté limpia en cada ejecución.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Automatizar la ejecución en pipelines CI/CD.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Validar datos reales y de borde (por ejemplo, búsquedas vacías o usuarios duplicados).
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")

    // Bloque 15/18: párrafo normal (título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Tips para implementar pruebas de integración efectivas

    // Bloque 16/18: slyderf-cards 4:8
    .bg-full-width.bg-gradiente-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8

            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mantener las pruebas lo más independientes posible
                p.text-center Cada prueba debe poder ejecutarse de forma aislada sin depender del resultado de otras pruebas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Usar bases de datos en memoria
                p.text-center Para evitar efectos secundarios y garantizar un entorno de pruebas limpio.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evitar incluir lógica condicional en los tests
                p.text-center Los tests deben ser directos y predecibles en su comportamiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/18.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Priorizar cobertura de flujos críticos del negocio
                p.text-center Enfocar el esfuerzo en probar los aspectos más importantes del sistema.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Nombrar las pruebas de forma descriptiva
                p.text-center Los nombres deben describir claramente el flujo que validan.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/14.png', alt='')

    // Bloque 17/18: bg-full-icono-texto
    .bg-full-width.bg-color-16.text-white
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las pruebas de integración, bien diseñadas y automatizadas, permiten construir software robusto y detectar errores sutiles que no se manifiestan al probar componentes de forma aislada. Constituyen un puente vital entre la validación unitaria y la validación del sistema completo.

    // Bloque 18/18: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389" target="_blank" rel="noopener noreferrer") Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Lnw1Ftp-x1g" target="_blank" rel="noopener noreferrer") Miw-upm. (2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
