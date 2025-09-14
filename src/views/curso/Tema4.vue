<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4.  Pruebas de sistema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/7: iconobloque-texto-imagen
    .row.mb-4
      .col-lg-8
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las pruebas de sistema (System Testing), son aquellas que evalúan el sistema completo como una unidad, validando que todos los componentes trabajen de forma conjunta para cumplir con los requisitos funcionales y no funcionales establecidos. Son la última etapa antes de liberar un sistema hacia ambientes de aceptación o producción y simulan de manera realista el comportamiento del usuario final.
        p(data-aos="fade-left").mb-4 Estas pruebas no se enfocan en clases o módulos individuales, sino en el flujo completo de la aplicación: desde la recepción de una solicitud (por ejemplo, una petición HTTP) hasta la interacción con servicios internos, la base de datos y la respuesta generada. En este sentido, las pruebas de sistema abarcan desde la capa de presentación (si está disponible) hasta la capa de persistencia, validando entradas, procesos y salidas.
        p(data-aos="fade-left") Su propósito es responder a la pregunta: ¿el sistema funciona como se espera desde la perspectiva del usuario?
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")

    // Bloque 2/7: imagen-texto-color
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Las características de las pruebas de sistema, son:
        .bg-color-11.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Se realizan en un entorno que replica la infraestructura de producción.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Involucran todas las capas del sistema: controladores, servicios, base de datos y dependencias externas.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | No utilizan mocks ni simulaciones, sino componentes reales.
            li.mb-2
              i.fas.fa-arrow-circle-right
              | Evalúan tanto el comportamiento funcional como no funcional (rendimiento, seguridad, usabilidad, etc.).
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Pueden automatizarse y ejecutarse dentro de pipelines CI/CD.
        p(data-aos="fade-left") #[strong Herramientas recomendadas:]
        ul.lista-ul--color.color-dark.mb-0(data-aos="fade-left")
          li.mb-2
            i.fas.fa-arrow-circle-right
            | TestRestTemplate: para simular llamadas REST a endpoints desde pruebas automatizadas.
          li.mb-2
            i.fas.fa-arrow-circle-right
            | MockMvc: útil para simular peticiones HTTP sin iniciar el servidor real.
          li.mb-2
            i.fas.fa-arrow-circle-right
            | Postman/Newman: para diseñar pruebas automatizadas de API desde colecciones.
          li.mb-2
            i.fas.fa-arrow-circle-right
            | Rest Assured: librería de Java para pruebas funcionales sobre servicios REST.
          li.mb-0
            i.fas.fa-arrow-circle-right
            | Spring Boot Test: permite la configuración del entorno de pruebas completo.

    // Bloque 3/7: anexo-img
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/4.png', alt='')
          .col-lg-8.text-white
            h3.mb-4(data-aos="flip-up") Crear un proyecto básico para pruebas de sistema
            p.mb-4(data-aos="fade-right") La verificación del comportamiento integral de una aplicación desde la perspectiva del usuario final es esencial para garantizar su correcto funcionamiento antes de ser desplegada en producción. En el PDF Crear un proyecto básico para pruebas de sistema, se desarrolla un caso práctico que demuestra cómo implementar pruebas de sistema utilizando un enfoque de caja negra. A través de la simulación de peticiones reales en un entorno controlado, se valida el flujo completo de una API REST, desde la creación hasta la consulta de usuarios, asegurando así la consistencia funcional del sistema.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Crear un proyecto básico para pruebas de sistema

    // Bloque 4/7: párrafo normal (título)
    .row.justify-content-center
      .col-12
        h2.mb-4(data-aos="fade-left") Buenas prácticas en pruebas de sistema

    // Bloque 5/7: slyderf-cards
    .bg-full-width.bg-gradiente-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
            p(data-aos="fade-left") Buenas prácticas en pruebas de sistema:

            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/6.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Usar datos reales y casos de prueba representativos
                p.text-center Utilizar información lo más cercana posible al contexto de producción para obtener resultados válidos y confiables.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Preparar el entorno de datos antes de cada prueba
                p.text-center O usar @Sql para cargar scripts que aseguren un estado inicial conocido y consistente.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Verificar tanto los códigos de estado HTTP como los datos retornados
                p.text-center Validar no solo que la respuesta sea exitosa, sino que contenga la información correcta.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/9.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evitar dependencias externas inestables
                p.text-center Si existen, deben controlarse en un entorno aislado para garantizar la reproducibilidad de las pruebas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Incluir pruebas de errores esperados
                p.text-center Por ejemplo, consultar un usuario inexistente para validar el manejo correcto de situaciones de error.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema4/5.png', alt='')

    // Bloque 6/7: bg-full-icono-texto
    .bg-full-width.bg-color-16.text-white
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las pruebas de sistema ofrecen una visión realista de cómo se comporta la aplicación como un todo y son esenciales para validar la experiencia del usuario, detectar fallos de configuración y garantizar que el sistema esté listo para pasar a producción.

    // Bloque 7/7: bloque-material-complementario
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
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
