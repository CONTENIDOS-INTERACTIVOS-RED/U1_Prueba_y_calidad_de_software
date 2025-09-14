<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/4: imagen-texto-color 4:8
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el ámbito del desarrollo de software, el aseguramiento de la calidad constituye un pilar fundamental para garantizar la confiabilidad, seguridad y correcto funcionamiento de los sistemas. Esta unidad aborda uno de los aspectos esenciales dentro de dicho proceso: los tipos y técnicas de pruebas. Comprender qué se prueba, cómo se prueba y por qué se prueba, resulta indispensable para lograr productos funcionales, eficientes y libres de errores críticos.
        
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 A lo largo de esta unidad, se espera que se adquieran las competencias necesarias para identificar y aplicar adecuadamente, pruebas unitarias de integración y de sistema, así como las técnicas de diseño de casos de prueba basadas en caja blanca y caja negra. Dichos conocimientos permitirán no solo validar la funcionalidad del software, sino también estructurar un enfoque sistemático para detectar errores antes de que lleguen al usuario final.

    // Bloque 2/4: iconobloque-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La temática que aquí se expone tiene una conexión directa con el entorno profesional, dado que toda aplicación real debe pasar por diferentes niveles de prueba para garantizar su calidad. Se invita a reflexionar sobre cómo estas prácticas, cuando son bien aplicadas, permiten anticiparse a fallos que podrían representar pérdidas económicas o de reputación para una organización. Por ejemplo, una prueba unitaria bien estructurada puede evitar fallos lógicos en la funcionalidad de una pasarela de pago o en la autenticación de usuarios.
        
        p(data-aos="fade-left") La unidad se encuentra estructurada en cuatro apartados temáticos:
        
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")

    // Bloque 3/4: iconos-color 3:3:3:3
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3
        .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Tema 1]
              p.mb-0 Se abordan las pruebas unitarias.
      .col-lg-3
        .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Tema 2]
              p.mb-0 Se abordan las pruebas de integración.
      .col-lg-3
        .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Tema 3]
              p.mb-0 Se abordan las pruebas de sistema.
      .col-lg-3
        .bg-color-3.p-4(data-aos="fade-left").h-100.text-white
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Tema 4]
              p.mb-0 Se abordan las técnicas de caja blanca y caja negra.

    // Bloque 4/4: bg-full-color
    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        p.mb-3 Cada sección combina conceptos teóricos con ejemplos prácticos desarrollados en Java, utilizando Spring Boot, permitiendo un aprendizaje progresivo y aplicado. Se incluyen también actividades de evaluación, ejercicios guiados y pruebas automatizadas.
        p.mb-0 Para aprovechar al máximo esta unidad, se espera un compromiso activo en el desarrollo de los ejemplos propuestos, así como una actitud crítica frente a los resultados obtenidos. Se recomienda tener conocimientos básicos de programación en Java y familiaridad con el entorno de desarrollo Spring Boot. El aprendizaje autónomo, la práctica constante y la participación en los foros del curso, serán determinantes para alcanzar los resultados propuestos.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
