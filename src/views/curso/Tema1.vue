<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción de los Tipos y técnicas de pruebas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/3: texto-iconobloque-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el desarrollo de software, la calidad del producto no debe entenderse únicamente como la ausencia de errores visibles, sino como el cumplimiento integral de los requisitos funcionales, no funcionales, normativos y de experiencia del usuario. Dentro de este contexto, el proceso de pruebas se convierte en una actividad esencial para garantizar que el sistema desarrollado sea confiable, seguro, escalable y adaptable a los cambios. Las pruebas de software no deben verse como una fase final del ciclo de desarrollo, sino como una actividad transversal que acompaña todas las etapas, desde la concepción de los requisitos hasta la entrega del producto final.
        
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las pruebas permiten identificar defectos antes de que estos lleguen a producción, lo cual reduce los costos de corrección, mejora la satisfacción del usuario final y fortalece la confianza en el equipo de desarrollo. De hecho, el costo de reparar un defecto descubierto en etapas tempranas puede ser hasta 100 veces menor que corregirlo en producción.
              
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")

    // Bloque 2/3: imagen-texto-color
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Existen diferentes tipos de pruebas que cumplen con propósitos específicos dentro del ciclo de vida del software. Por ejemplo, las pruebas unitarias se centran en validar métodos individuales, las de integración evalúan la correcta interacción entre módulos, y las pruebas de sistema examinan el comportamiento global de la aplicación. Estas pruebas pueden aplicarse usando diversas técnicas, entre las cuales se destacan las técnicas de caja blanca y caja negra, cada una con enfoques y objetivos particulares.
        
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 Con el avance de las metodologías ágiles, la automatización de las pruebas ha tomado protagonismo, haciendo posible validar constantemente, el sistema, ante cada nueva integración o despliegue. Sin embargo, ninguna automatización tiene sentido si previamente no se entiende bien qué se está probando, cómo se debe probar y por qué se elige una estrategia sobre otra.
        
        p(data-aos="fade-left") En esta unidad se profundizará en los fundamentos conceptuales y prácticos de los tipos y técnicas de pruebas, poniendo especial énfasis en su implementación dentro de proyectos desarrollados en Java, utilizando Spring Boot. Se busca que el estudiante no solo adquiera conocimientos teóricos, sino que también desarrolle habilidades técnicas sólidas que le permitan participar activamente en procesos de calidad dentro de equipos de desarrollo profesional.

    // Bloque 3/3: bloque-material-complementario
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
              a(href="https://www.youtube.com/watch?v=GVegCwwfBZ0" target="_blank" rel="noopener noreferrer") Juan V. Carrillo (jvprofe). (2017, 2 de mayo). Prueba del camino básico. Pruebas de caja blanca [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
