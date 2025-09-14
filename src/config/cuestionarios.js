export default {
  tema4: {
    tema: '4. Creación de usuarios (user persona)',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre herramientas de evaluación de accesibilidad y diseño inclusivo.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto: '¿Qué significan las siglas WCAG?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'World Content Association Guidelines',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Web Content Accessibility Guidelines',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Web Certified Application Group',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Wireless Connection Accessibility Guide',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! WCAG significa Web Content Accessibility Guidelines (Pautas de Accesibilidad para el Contenido Web).',
        mensaje_incorrecto:
          'Incorrecto. WCAG significa Web Content Accessibility Guidelines (Pautas de Accesibilidad para el Contenido Web).',
      },
      {
        id: 2,
        texto:
          'El diseño inclusivo considera las diferentes capacidades de las personas al usar tecnología.',
        imagen: '',
        barajarRespuestas: false,
        opciones: [
          {
            id: 'a',
            texto: 'Verdadero',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Falso',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El diseño inclusivo reconoce y abraza la diversidad humana como fuente de innovación.',
        mensaje_incorrecto:
          'Incorrecto. El diseño inclusivo sí considera las diferentes capacidades de las personas al usar tecnología.',
      },
      {
        id: 3,
        texto: '¿Cuál es una buena práctica de accesibilidad?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Usar solo colores brillantes',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Evitar etiquetas en los formularios',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Añadir texto alternativo a las imágenes',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Usar animaciones complejas',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Añadir texto alternativo a las imágenes es una práctica esencial de accesibilidad.',
        mensaje_incorrecto:
          'Incorrecto. Añadir texto alternativo a las imágenes es una buena práctica de accesibilidad.',
      },
      {
        id: 4,
        texto: '¿Qué tipo de usuario puede beneficiarse del diseño accesible?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Personas con discapacidad visual',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Personas mayores',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Personas con dificultades cognitivas',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Todas las anteriores',
            esCorrecta: true,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El diseño accesible beneficia a todos los usuarios, no solo a aquellos con discapacidades.',
        mensaje_incorrecto:
          'Incorrecto. El diseño accesible beneficia a todas las personas mencionadas y más.',
      },
      {
        id: 5,
        texto:
          '¿Qué herramienta se puede usar para evaluar la accesibilidad de una interfaz web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Paint',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'WAVE',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Outlook',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Google Maps',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! WAVE (Web Accessibility Evaluation Tool) es una herramienta especializada para evaluar accesibilidad.',
        mensaje_incorrecto:
          'Incorrecto. WAVE es la herramienta apropiada para evaluar la accesibilidad de una interfaz web.',
      },
    ],
  },
  tema5: {
    tema: '5. Técnicas de caja blanca y caja negra',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre técnicas de diseño de casos de prueba y sus aplicaciones.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál de los siguientes tipos de prueba se enfoca en validar métodos individuales de una clase?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Prueba de sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Prueba de integración',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Prueba unitaria',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Prueba funcional',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas unitarias se enfocan en validar métodos individuales de una clase de forma aislada.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas unitarias son las que se enfocan en validar métodos individuales de una clase.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta se utiliza comúnmente para realizar pruebas unitarias en proyectos Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Jenkins',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es el framework más utilizado para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          'En las pruebas de integración, ¿qué se busca validar principalmente?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto:
              'La interacción correcta entre varios componentes del sistema',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'El rendimiento del servidor bajo alta carga',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'La cobertura total del código fuente',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'La experiencia del usuario en el frontend',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas de integración validan que múltiples componentes trabajen correctamente en conjunto.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas de integración se enfocan en validar la interacción entre componentes del sistema.',
      },
      {
        id: 4,
        texto: '¿Cuál es una característica de la técnica de caja negra?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Se enfoca en la lógica interna del código',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'No requiere conocer el código fuente',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Evalúa decisiones y bucles internos',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Se utiliza solo en pruebas unitarias',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La técnica de caja negra no requiere conocimiento del código fuente, se basa en entradas y salidas.',
        mensaje_incorrecto:
          'Incorrecto. La característica principal de caja negra es que no requiere conocer el código fuente.',
      },
      {
        id: 5,
        texto:
          '¿Qué componente permite hacer llamadas HTTP simuladas en pruebas con Spring Boot?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Mockito',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'TestRestTemplate',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JPARepository',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'JaCoCo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! TestRestTemplate es el componente de Spring Boot para realizar llamadas HTTP simuladas en pruebas.',
        mensaje_incorrecto:
          'Incorrecto. TestRestTemplate es la herramienta correcta para llamadas HTTP simuladas en Spring Boot.',
      },
    ],
  },
}
