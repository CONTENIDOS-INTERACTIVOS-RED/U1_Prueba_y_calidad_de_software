<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Técnicas de caja blanca y caja negra'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/13: párrafo normal (introducción)
    .row.justify-content-center.mb-5
      .col-12
        p(data-aos="fade-left") Las técnicas de diseño de casos de prueba permiten construir pruebas de manera sistemática, con base en diferentes criterios. Las más conocidas son las técnicas de caja blanca y caja negra, que se diferencian principalmente en el nivel de conocimiento que el evaluador tiene sobre el código fuente del sistema a probar.
        p(data-aos="fade-left") Estas técnicas no son excluyentes: se pueden complementar entre sí, según el contexto. Su elección depende del tipo de prueba, el nivel del sistema que se está evaluando y los objetivos del proceso de validación.

    // Bloque 2/13: titulo-segundo
    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Técnica de caja blanca

    // Bloque 3/13: párrafo normal (descripción caja blanca)
    .row.justify-content-center.mb-5
      .col-12
        p(data-aos="fade-left") También conocida como técnica estructural o de cristal, la caja blanca parte del supuesto de que el evaluador tiene acceso completo al código fuente y puede diseñar pruebas basadas en la estructura lógica del sistema.

    // Bloque 4/13: img-acordeon 4:8
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema5/1.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b").mb-5
          .div(titulo="Principales características")
            ul.lista-ul--color.color-dark.mb-0
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Permite conocer rutas lógicas, decisiones, bucles, variables, condiciones.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Útil para validar la cobertura del código (instrucciones, decisiones, condiciones múltiples).
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Altamente efectiva para pruebas unitarias.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Utiliza métricas como cobertura de código (Statement Coverage, Branch Coverage, Path Coverage).
          .div(titulo="Ejemplo de caja blanca en Java")
            .row.justify-content-center.align-items-center
              .col-lg.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema5/2.png', alt='', style="max-width: 585px").mx-auto

          .div(titulo="Pruebas de caja blanca")
            ul.mb-3
              li edad = 15 → "Menor de edad".
              li edad = 30 → "Adulto".
              li edad = 70 → "Adulto mayor".
            p Estas pruebas están diseñadas para cubrir todas las rutas lógicas del método.
          .div(titulo="Herramientas útiles")
            ul.mb-0
              li JaCoCo: genera reportes de cobertura de código.
              li SonarQube: análisis estático que incluye cobertura de pruebas.
              li IntelliJ IDEA / Eclipse: ofrecen métricas de cobertura integradas.

    // Bloque 5/13: titulo-segundo
    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Técnica de caja negra

    // Bloque 6/13: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Conocida como técnica funcional, la caja negra asume que el evaluador no conoce la estructura interna del código, y diseña los casos de prueba únicamente a partir de:
        .bg-color-4.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Requisitos funcionales.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Documentación del sistema.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Interfaz pública disponible (API, formularios, endpoints REST).
      .col-lg-4
        figure
          img(src="@/assets/curso/tema5/3.png", data-aos="zoom-in")

    // Bloque 7/13: imagen-color
    .row.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema5/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.py-lg-5(data-aos="fade-left").mb-4
          p.mb-3 #[strong Características claves:]
          ul.mb-3
            li Se enfoca en entradas y salidas.
            li Detecta errores de funcionalidad, validaciones, y respuestas incorrectas.
            li Es útil en pruebas de sistema, pruebas de aceptación y pruebas funcionales.
            li Incluye técnicas como partición de equivalencia, análisis de valores límite, tablas de decisión, pruebas de transición de estados.
          p.mb-5 #[strong Ejemplo de caja negra:] Supongamos un endpoint REST /usuarios que valida que el correo electrónico no esté vacío.
          p.mb-3 #[strong Casos de prueba diseñados sin ver el código:]
          ul.mb-3
            li Entrada válida: { "nombre": "Ana", "correo": "ana@correo.com" } → Esperado: HTTP 200 OK.
            li Entrada inválida: { "nombre": "Ana" } → Esperado: HTTP 400 Bad Request.
          p.mb-3 #[strong Ventajas:]
          ul.mb-0
            li Reproduce el punto de vista del usuario.
            li No requiere conocimiento técnico del código.
            li Detecta errores en interfaces y especificaciones.

    // Bloque 8/13: párrafo normal (transición tabla)
    .row.justify-content-center.mb-4
      .col-12
        p(data-aos="fade-left") Ahora, la siguiente tabla nos presenta una comparación entre caja blanca y caja negra:

    // Bloque 9/13: tabla
    .titulo-figura.mb-2
      h5 Tabla 2. 
      span Comparación caja blanca y caja negra

    .tabla-a.color-acento-contenido.mb-5
      table
        caption Tabla comparativa entre técnicas de caja blanca y caja negra
        thead
          tr
            th.bg-color-tabla.text-white Criterio
            th.bg-color-tabla.text-white Caja blanca
            th.bg-color-tabla.text-white Caja negra
        tbody
          tr
            td #[strong Conocimiento del código.]
            td Requiere acceso al código fuente.
            td No necesita conocer el código.
          tr
            td #[strong Nivel de prueba.]
            td Bajo nivel (unidad, componente).
            td Alto nivel (sistema, funcionalidad).
          tr
            td #[strong Objetivo.]
            td Validar la lógica interna.
            td Validar funcionalidad observable.
          tr
            td #[strong Detección de errores.]
            td Errores de programación.
            td Errores de comportamiento funcional.
          tr
            td #[strong Tipos de prueba.]
            td Unitarias, cobertura, integración.
            td Aceptación, sistema, regresión.

    // Bloque 10/13: slyderf-cards 8:4
    .bg-full-width.bg-gradiente-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
            p(data-aos="fade-left") Buenas prácticas al aplicar ambas técnicas:

            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/5.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Diseñar primero con caja negra
                p.text-center Diseñar primero con caja negra (en base a los requisitos), y luego refinar con caja blanca (en base al código).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/6.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 No asumir que una técnica reemplaza a la otra
                p.text-center No asumir que una técnica reemplaza a la otra: ambas se complementan.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Automatizar los casos de prueba
                p.text-center Automatizar los casos de prueba para su reutilización.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/8.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Usar herramientas que brinden trazabilidad
                p.text-center Usar herramientas que brinden trazabilidad de requisitos y casos de prueba.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Documentar qué rutas o criterios se cubren
                p.text-center Documentar qué rutas o criterios de partición se cubren con cada caso.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/10.png', alt='')

    // Bloque 12/13: bg-full-icono-texto
    .bg-full-width.bg-color-16.text-white
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las técnicas de caja blanca y negra son la base del diseño estructurado de pruebas. Su aplicación combinada permite lograr una cobertura más completa del sistema, mejorar la calidad del software y reducir significativamente el riesgo de errores en producción.

    // Bloque 13/13: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    // Bloque 14/13: bloque-material-complementario
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
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema5,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
