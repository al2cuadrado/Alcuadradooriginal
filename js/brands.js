/* Datos de las marcas del porfolio — usados por marca.html */
const BRANDS = {
  'vive-liviano': {
    name: 'Vive Liviano',
    tag: 'Identidad de marca y Social Media',
    desc: 'Vive Liviano es un espacio de bienestar pensado para mujeres que buscan reconectar consigo mismas a través de talleres, nutrición consciente y experiencias guiadas como mindfulness. AL² (Agus y Luly) desarrolló la identidad visual completa de la marca —logo, paleta de colores y tarjetería— y se encargó de la gestión integral de redes sociales: planificación de contenido, piezas gráficas (agendas semanales, flyers informativos) y comunicación de eventos.',
    images: ['vive-liviano-04.jpg', 'vive-liviano-06.jpg', 'vive-liviano-01.jpg', 'vive-liviano-02.jpg', 'vive-liviano-03.jpg', 'vive-liviano-05.jpg'],
  },
  'flash-de-vida': {
    name: 'Flash de Vida',
    tag: 'Identidad de marca',
    desc: 'Flash de Vida es el estudio de fotografía de Florencia Mirna, especializado en capturar momentos y retratos con una mirada cálida y cercana. Para este proyecto, AL² (Agus y Luly) desarrolló la identidad visual completa de la marca: logo, paleta de colores, tipografía y un sistema de recursos gráficos pensado para acompañar su contenido en redes y piezas de papelería, como la tarjeta personal. La estética se construyó en torno a una paleta vibrante de rosas, naranjas y turquesas, con formas orgánicas y una tipografía juguetona que refleja la personalidad espontánea y emotiva de la marca.',
    images: ['flash-de-vida-05.png', 'flash-de-vida-01.png', 'flash-de-vida-02.png', 'flash-de-vida-03.png', 'flash-de-vida-04.png', 'flash-de-vida-06.jpg', 'flash-de-vida-07.jpg'],
  },
  'rosetta-caffe': {
    name: 'Rosetta Caffe',
    tag: 'Identidad de marca',
    desc: 'Rosetta Caffe es una cafetería con espíritu cálido y cercano: café, charlas y momentos. AL² (Agus y Luly) desarrolló su identidad visual completa —logo, paleta de colores e ilustraciones propias— aplicada al menú, la tarjetería y las piezas de comunicación de la marca.',
    images: ['rosetta-caffe-01.jpg', 'rosetta-caffe-02.jpg', 'rosetta-caffe-03.jpg', 'rosetta-caffe-04.jpg', 'rosetta-caffe-05.jpg', 'rosetta-caffe-06.jpg'],
  },
  'enimar': {
    name: 'Enimar',
    tag: 'Identidad de marca, diseño y desarrollo web',
    desc: 'Enimar es una empresa con más de 25 años de trayectoria en la distribución de materias primas industriales (cauchos, films, coatings y aditivos), con operación en Argentina, Chile y Uruguay. Para este proyecto, AL² (Agus y Luly) desarrolló la identidad visual completa de la marca, desde el diseño del logo hasta la construcción de un sistema gráfico coherente para todas sus piezas. El trabajo incluyó diseño UI/UX y desarrollo del sitio web institucional, pensado para comunicar la trayectoria y solidez de la empresa frente a sus clientes industriales, además de un set de piezas gráficas para redes sociales que extienden esa misma identidad al contenido digital del día a día.',
    images: ['enimar-02.jpg', 'enimar-06.jpg', 'enimar-01.jpg', 'enimar-03.jpg', 'enimar-04.jpg', 'enimar-05.jpg'],
  },
  'aura-tropical': {
    name: 'Aura Tropical',
    tag: 'Identidad de marca',
    desc: 'Aura Tropical es una marca de moda de baño inspirada en la belleza de la naturaleza tropical. AL² (Agus y Luly) desarrolló su identidad visual completa: logo en caligrafía, paleta de tonos tierra y verdes, y un sistema gráfico editorial aplicado a tarjetería, packaging y piezas de comunicación de marca.',
    images: ['aura-tropical-01.jpg', 'aura-tropical-07.jpg', 'aura-tropical-05.jpg', 'aura-tropical-04.jpg', 'aura-tropical-06.jpg', 'aura-tropical-02.jpg', 'aura-tropical-03.jpg'],
  },
  'alegria-bewell': {
    name: 'Alegria Be-Well',
    tag: 'Identidad de marca y Social Media',
    desc: 'Alegria Be-Well es el espacio de Gabriela Bg, psicoterapeuta y coach de vida, enfocado en acompañar el bienestar emocional con alegría y propósito. AL² (Agus y Luly) desarrolló su identidad visual completa —logo, paleta de colores y aplicaciones en papelería y merchandising— y se encarga de la gestión integral de redes sociales, incluyendo piezas gráficas, contenido audiovisual y comunicación de la comunidad de la marca.',
    images: ['alegria-bewell-07.jpg', 'alegria-bewell-03.jpg', 'alegria-bewell-02.jpg', 'alegria-bewell-01.jpg', 'alegria-bewell-04.jpg', 'alegria-bewell-05.jpg', 'alegria-bewell-06.jpg'],
  },
  'champion': {
    name: 'Champion Barbería',
    tag: 'Identidad de marca',
    desc: 'Champion es una barbería con identidad clásica y masculina, fundada en 2019. AL² (Agus y Luly) desarrolló su identidad visual completa: isologo con navaja y estrellas, variantes de logo, paleta de azul marino y dorado, e ilustraciones a mano de herramientas de barbería (tijeras, navaja, peine, brocha) que conforman un sistema gráfico distintivo aplicado a piezas de papelería y redes sociales.',
    images: ['champion-01.jpg', 'champion-04.jpg', 'champion-05.jpg', 'champion-06.jpg', 'champion-07.jpg', 'champion-08.jpg', 'champion-09.jpg', 'champion-10.jpg', 'champion-02.jpg', 'champion-03.jpg'],
  },
  'la-charcuteria': {
    name: 'La Charcuteria',
    tag: 'Identidad de marca',
    desc: 'La Charcuteria es un local especializado en tablas de fiambres, quesos y vinos. AL² (Agus y Luly) desarrolló su identidad visual: logo con ilustraciones hechas a mano, tipografía editorial y una paleta cálida en verde oscuro y crudo, aplicada a la cartelería del local y al menú.',
    images: ['la-charcuteria-01.jpg', 'la-charcuteria-02.jpg', 'la-charcuteria-03.jpg', 'la-charcuteria-04.jpg', 'la-charcuteria-05.jpg'],
  },
  'soyma': {
    name: 'SoyMa Consultora',
    tag: 'Identidad de marca y plantillas para redes',
    desc: 'SoyMa es una consultora especializada en seguridad e higiene laboral y cuidado ambiental. AL² (Agus y Luly) desarrolló su identidad visual completa —logo, paleta de colores y patrón gráfico de marca— junto con un sistema de plantillas pensado para que el equipo de SoyMa pueda generar contenido para redes sociales de forma autónoma, manteniendo la coherencia visual en cada pieza.',
    images: ['soyma-10.png', 'soyma-07.jpg', 'soyma-11.jpg', 'soyma-12.jpg', 'soyma-13.jpg', 'soyma-06.jpg', 'soyma-08.jpg', 'soyma-09.jpg', 'soyma-01.jpg', 'soyma-03.jpg', 'soyma-04.jpg', 'soyma-05.jpg', 'soyma-02.jpg'],
  },
  'rhesus': {
    name: 'Rhesus',
    tag: 'Comunicación de evento',
    desc: 'Rhesus es una banda de rock que nos convocó para diseñar la difusión de su show en vivo en Makena, junto a la banda invitada Ectasy. AL² (Agus y Luly) desarrolló el set de piezas gráficas para redes sociales —flyer principal, historias con horarios y datos del evento— con una estética oscura y de alto impacto, fiel a la identidad sonora de la banda.',
    images: ['rhesus-03.jpg', 'rhesus-01.jpg', 'rhesus-02.jpg'],
  },
};
