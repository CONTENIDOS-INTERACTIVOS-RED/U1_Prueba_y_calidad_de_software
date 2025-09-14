export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Tipos y técnicas de pruebas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción de los Tipos y técnicas de pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pruebas unitarias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de prueba de usabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pruebas de sistema',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas de caja blanca y caja negra',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Técnica de caja blanca',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Técnica de caja negra',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511',
    },
    {
      referencia:
        'Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389',
    },
    {
      referencia:
        'Omaña, M. (2012). Manufactura esbelta: una contribución para el desarrollo de software con calidad: ( ed.). Red Enlace.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/98547',
    },
    {
      referencia:
        'Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487',
    },
    {
      referencia:
        'Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1',
    },
    {
      referencia:
        'Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938',
    },
  ],
  glosario: [
    {
      termino: 'Aserción',
      significado:
        'Verificación dentro de una prueba automatizada que compara el valor esperado con el obtenido.',
    },
    {
      termino: 'Base de datos en memoria',
      significado:
        'Sistema de almacenamiento temporal que permite pruebas rápidas sin persistencia física.',
    },
    {
      termino: 'Caja blanca',
      significado:
        'Técnica de prueba que analiza la estructura interna del código.',
    },
    {
      termino: 'Caja negra',
      significado:
        'Técnica de prueba basada en entradas y salidas sin conocimiento del código fuente.',
    },
    {
      termino: 'Cobertura de código',
      significado:
        'Porcentaje del código fuente que ha sido ejecutado durante las pruebas.',
    },
    {
      termino: 'Controlador REST',
      significado:
        'Componente que expone servicios web a través de endpoints HTTP.',
    },
    {
      termino: 'Dependencia',
      significado:
        'Objeto o clase requerida por otra para funcionar correctamente.',
    },
    {
      termino: 'Endpoint',
      significado:
        'URL específica a través de la cual se accede a una funcionalidad de una API.',
    },
    {
      termino: 'Entidad',
      significado:
        'Clase que representa una tabla en la base de datos usando anotaciones JPA.',
    },
    {
      termino: 'HTTP 200 OK',
      significado: 'Código de estado que indica que una solicitud fue exitosa.',
    },
    {
      termino: 'Inyección de dependencias',
      significado:
        'Técnica que permite pasar objetos requeridos a través del framework Spring.',
    },
    {
      termino: 'JUnit',
      significado: 'Framework de pruebas unitarias para Java.',
    },
    {
      termino: 'Mock',
      significado: 'Objeto simulado usado para aislar la unidad bajo prueba.',
    },
    {
      termino: 'Partición de equivalencia',
      significado:
        'Técnica de caja negra que agrupa entradas similares para reducir casos de prueba.',
    },
    {
      termino: 'Persistencia',
      significado:
        'Proceso de almacenar datos de forma permanente en una base de datos.',
    },
    {
      termino: 'Prueba de integración',
      significado:
        'Verificación del correcto funcionamiento entre componentes del sistema.',
    },
    {
      termino: 'Prueba de sistema',
      significado:
        'Validación del sistema completo como una unidad desde el punto de vista del usuario.',
    },
    {
      termino: 'Prueba unitaria',
      significado:
        'Evaluación de una función o método específico de forma aislada.',
    },
    {
      termino: 'Spring Boot Test',
      significado:
        'Módulo de Spring para facilitar pruebas con contexto de aplicación.',
    },
    {
      termino: 'TestRestTemplate',
      significado:
        'Cliente HTTP usado en pruebas automatizadas para consumir APIs REST.',
    },
    {
      termino: 'ARIA (Accessible Rich Internet Applications)',
      significado:
        'Conjunto de atributos HTML que proporcionan información semántica adicional a tecnologías de apoyo, especialmente útil para hacer accesibles elementos interactivos complejos que no tienen equivalentes nativos en HTML.',
    },
    {
      termino: 'Axe',
      significado:
        'Herramienta automatizada de evaluación de accesibilidad desarrollada por Deque Systems, ampliamente reconocida por su precisión técnica y capacidad de integración en flujos de trabajo de desarrollo continuo para detectar violaciones de estándares WCAG.',
    },
    {
      termino: 'CI/CD (Continuous Integration/Continuous Deployment)',
      significado:
        'Metodología de desarrollo que automatiza la integración y despliegue de código, permitiendo la incorporación sistemática de verificaciones de accesibilidad en cada etapa del proceso de desarrollo de software.',
    },
    {
      termino: 'Contraste de color',
      significado:
        'Diferencia de luminosidad entre elementos de primer plano (como texto) y elementos de fondo, medida según estándares específicos para garantizar legibilidad adecuada para usuarios con diferentes capacidades visuales.',
    },
    {
      termino: 'Daltonismo',
      significado:
        'Condición visual que afecta la percepción de ciertos colores, requiriendo que las interfaces no dependan exclusivamente del color para transmitir información crítica o indicar estados del sistema.',
    },
    {
      termino: 'Diseño inclusivo',
      significado:
        'Filosofía de desarrollo que reconoce y abraza la diversidad humana como fuente de innovación, creando soluciones que acomodan diferentes capacidades, contextos culturales y preferencias de interacción desde su concepción inicial.',
    },
    {
      termino: 'Diseño universal',
      significado:
        'Principio que establece que productos y entornos deben ser utilizables por todas las personas en la mayor medida posible, sin necesidad de adaptación o diseño especializado, beneficiando tanto a usuarios con discapacidades como a la población general.',
    },
    {
      termino: 'HTML semántico',
      significado:
        'Uso apropiado de elementos HTML que transmiten significado estructural y contextual del contenido, facilitando la interpretación correcta por parte de tecnologías de apoyo y mejorando la accesibilidad general de las interfaces.',
    },
    {
      termino: 'Lector de pantalla',
      significado:
        'Tecnología de apoyo que convierte texto digital y elementos de interfaz en salida de voz o braille, permitiendo a usuarios ciegos o con baja visión navegar y utilizar contenido digital de manera efectiva.',
    },
    {
      termino: 'Lighthouse',
      significado:
        'Herramienta automatizada de Google que audita rendimiento, accesibilidad, mejores prácticas y optimización para motores de búsqueda en aplicaciones web, proporcionando puntuaciones específicas y recomendaciones de mejora.',
    },
    {
      termino: 'Navegación por teclado',
      significado:
        'Método de interacción que permite a usuarios operar interfaces digitales utilizando exclusivamente el teclado, esencial para personas con discapacidades motoras o aquellas que no pueden utilizar dispositivos de señalización como el ratón.',
    },
    {
      termino: 'Principios WCAG',
      significado:
        'Cuatro fundamentos básicos de accesibilidad web que establecen que el contenido debe ser perceptible, operable, comprensible y robusto, formando la base conceptual sobre la cual se construyen todas las directrices específicas de accesibilidad.',
    },
    {
      termino: 'Prototipo de alta fidelidad',
      significado:
        'Representación detallada de una interfaz que incluye elementos visuales finales, interacciones complejas y contenido real, utilizada para validar decisiones de diseño específicas y comunicar la visión final del producto.',
    },
    {
      termino: 'Prototipo de baja fidelidad',
      significado:
        'Representación simplificada de una interfaz que se enfoca en estructura, flujo de navegación y conceptos fundamentales, sin incluir detalles visuales específicos, facilitando iteración rápida y validación de ideas conceptuales.',
    },
    {
      termino: 'Tecnologías de apoyo',
      significado:
        'Dispositivos, software o equipamiento utilizados para aumentar, mantener o mejorar las capacidades funcionales de personas con discapacidades, incluyendo lectores de pantalla, dispositivos de entrada alternativos y software de reconocimiento de voz.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Medida de qué tan fácil, eficiente y satisfactorio resulta para usuarios completar tareas específicas utilizando una interfaz digital, evaluada mediante métricas de efectividad, eficiencia y satisfacción subjetiva.',
    },
    {
      termino: 'WAVE (Web Accessibility Evaluation Tool)',
      significado:
        'Herramienta de evaluación de accesibilidad desarrollada por WebAIM que proporciona análisis visual de problemas de accesibilidad directamente en páginas web, utilizando iconografía y codificación de colores para facilitar identificación de barreras.',
    },
    {
      termino: 'WCAG (Web Content Accessibility Guidelines)',
      significado:
        'Estándares internacionales desarrollados por el W3C que proporcionan recomendaciones para hacer contenido web accesible a personas con discapacidades, organizados en tres niveles de conformidad (A, AA, AAA) con criterios específicos y verificables.',
    },
    {
      termino: 'Wireframes interactivos',
      significado:
        'Evolución de wireframes estáticos que incluyen funcionalidad básica de navegación e interacción, permitiendo simular comportamientos de usuario y validar flujos de trabajo antes de invertir recursos en desarrollo o diseño visual completo.',
    },
    {
      termino: 'Wireframes',
      significado:
        'Representaciones esquemáticas de interfaces que muestran la estructura, disposición y jerarquía de elementos sin incluir detalles visuales específicos, utilizados para planificar arquitectura de información y flujos de interacción antes del diseño visual detallado.',
    },
  ],
}
