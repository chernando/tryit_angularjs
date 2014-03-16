'use strict';

angular.module('tryitApp')
  .service('Talks', function Talks() {
    var talks = [
      {
        'id': 1,
        'title': 'Acto de Apertura',
        'author': '(Por confirmar)',
        'starts': new Date('2014-03-17T10:00:00+0100'),
        'ends': new Date('2014-03-17T11:00:00+0100'),
        'description': 'Acto de apertura de esta segunda edición del Try IT!',
      },
      {
        'id': 2,
        'title': 'Integracion de dispositivos y domotica',
        'author': 'Babel',
        'starts': new Date('2014-03-18T10:30:00+0100'),
        'ends': new Date('2014-03-18T11:30:00+0100'),
        'description': '',
      },
      {
        'id': 3,
        'title': 'Open Web Device: The future of the mobile web is here (Firefox OS Telefónica)',
        'author': 'German Toro del Valle',
        'starts': new Date('2014-03-17T11:00:00+0100'),
        'ends': new Date('2014-03-17T12:00:00+0100'),
        'description': 'El objetivo de esta charla es presentar el nuevo sistema operativo Firefox OS desarrollado de manera conjunta entre Mozilla y los principales operadores de telecomunicaciones a nivel internacional, entre los cuales Telefónica ocupa un papel predominante. Presentaremos las características principales así como las líneas de trabajo más relevantes de este nuevo sistema operativo que tiene por principal finalidad seguir avanzando hacia un paradigma central: convertir la Web en la plataforma que todos (desarrolladores y usuarios) necesitamos.',
      },
      {
        'id': 4,
        'title': 'Beginning a developer career(Telefónica I+D)',
        'author': 'Javier Martínez Álvarez',
        'starts': new Date('2014-03-17T13:00:00+0100'),
        'ends': new Date('2014-03-17T14:00:00+0100'),
        'description': '¿Qué esperas de tu carrera profesional? Tanto si lo sabes como si no, tanto si tu objetivo es ser el mejor developer de una gran empresa o ser el CEO de tu propia startup hay unas ideas clave que pueden ayudarte a ser mejor en tu trabajo y a disfrutar más de él. Javier nos comentará desde su experiencia personal de 20 años desarrollando software cuales son los aspectos clave para conseguirlo y como a través de ellos ha conseguido mantener la pasión por el desarrollo durante todo este tiempo y llegar a liderar el desarrollo de una empresa como Telefonica I+D.',
      },
      {
        'id': 5,
        'title': 'Cool Boot: It’s Cool',
        'author': 'Pedro Candel aka s4ur0n(Deloitte)',
        'starts': new Date('2014-03-17T15:00:00+0100'),
        'ends': new Date('2014-03-17T16:00:00+0100'),
        'description': 'Desde tu primer día como estudiante de informática, siempre habrás tenido presente que la memoria RAM es volátil y sus datos, en ausencia de alimentación eléctrica, son eliminados. Durante la sesión se demostrará de forma práctica que éste fenómeno no se produce inmediatamente, sino que son retenidos durante un tiempo mínimo que puede ser ampliado incluso a 30 minutos con la técnica de “Cool Boot” y que nos permitirá recuperar toda la información que tenía la memoria RAM con el software que se ha desarrollado mejorando el que se empleó la primera vez en la Universidad de Princeton como prueba de concepto. Una vez recuperados, se abordará también cómo extraer las páginas donde se navegaba, credenciales de usuario, certificados electrónicos incluyendo las claves privadas empleadas, procesos en ejecución que se encontraban activos, etc… Objetivos: Demostrar el fenómeno de la persistencia en la memoria RAM así como mecanismos que puede emplear Deloitte para realizar un análisis forense de equipos donde se ha interrumpido la alimentación eléctrica recuperando los datos que existían y cómo puede estar en la vanguardia de operaciones en colaboración con los Cuerpos y Fuerzas de Seguridad del Estado.'
      },
    ];

    // Public API here
    this.query = function () {
      return talks;
    };
  });
