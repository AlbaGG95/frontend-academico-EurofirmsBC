# Bootcamp Frontend Eurofirms | Ejercicios de clase

Repositorio academico con ejercicios, documentacion y practicas continuas del
bootcamp de Eurofirms, orientado principalmente a Frontend con JavaScript y
React.

Este proyecto esta pensado para que cualquier persona que lo revise pueda
entender con rapidez:
- que modulos se han trabajado
- donde esta cada practica
- que documentacion acompana al codigo
- como se organiza el repositorio para crecer sin desorden
- hacia que tecnologia se orienta el itinerario del bootcamp

## Objetivo del repositorio

Este repositorio funciona como espacio de trabajo y seguimiento del bootcamp.
No solo recoge ejercicios sueltos: tambien mantiene una estructura clara para
documentar avances, agrupar practicas por modulo y dejar una base ordenada para
continuar ampliando el proyecto en nuevas sesiones.

El enfoque general del bootcamp es Frontend con React + JavaScript. Sin
embargo, en el momento actual del proyecto el trabajo practico se centra en:
- HTML
- CSS
- primeros fundamentos de JavaScript

Por eso el repositorio refleja dos cosas a la vez:
- el estado real del aprendizaje actual
- la proyeccion futura hacia React dentro del mismo recorrido formativo

## Que se puede encontrar aqui

### HTML y CSS
Practicas de maquetacion y componentes visuales:
- bloques con Flexbox
- navbar horizontal
- galeria de imagenes
- toolbar multifila

### JavaScript
Practicas introductorias de logica y manipulacion del contenido:
- variables y tipos de dato
- mensaje personal construido con variables
- conteo de multiplos de 7 con `for` e `if`
- funcion `sumarHasta(numero)` con validacion basica
- validacion de formulario con `submit`
- arrays de objetos con estudiantes
- lista de peliculas renderizada con arrays y DOM
- delegacion de eventos con `data-item-id`

### Ruta futura hacia React
Aunque React todavia no forma parte del codigo implementado en este repositorio,
la estructura ya esta preparada para incorporarlo mas adelante como siguiente
fase natural del bootcamp.

### Documentacion tecnica
Material de apoyo para estudiar y justificar el trabajo:
- HTML base
- CSS base
- selectores, box model y Flexbox
- fundamentos de JavaScript
- DOM, eventos, arrays y objetos
- flujo de trabajo y snippets

## Como revisar el proyecto

Punto de entrada recomendado:
- abre `index.html`

Accesos principales desde la raiz:
- `index.html`: entrada general del proyecto
- `html-css.html`: acceso directo al modulo de HTML y CSS
- `documentation.html`: acceso directo a la biblioteca de apoyo
- `javascript-react.html`: acceso directo a la zona actual de JavaScript y futura evolucion hacia React
- `portfolio.html`: acceso directo al portafolio academico

Las paginas de la raiz redirigen al contenido real organizado dentro de
`html/`, para mantener una entrada sencilla sin perder orden interno.

## Estructura del proyecto

```text
.
|-- assets/
|   |-- gallery/
|   `-- profile/
|-- css/
|   |-- exercise-theme.css
|   `-- hub-pages.css
|-- html/
|   |-- docs/
|   |-- exercises/
|   |   |-- html-css/
|   |   `-- javascript/
|   `-- hub/
|-- js/
|   |-- js-estudiantes-array.js
|   |-- js-eventos-avanzados-2.js
|   |-- js-lista-peliculas.js
|   |-- js-multiples-of-7.js
|   |-- js-profile-message.js
|   |-- js-sumar-hasta.js
|   |-- js-variable-types.js
|   |-- README.md
|   `-- theme-toggle.js
|-- documentation.html
|-- html-css.html
|-- index.html
|-- portfolio.html
`-- javascript-react.html
```

## Significado de cada carpeta

### `html/`
Contiene las paginas reales del sitio.

- `html/hub/`: paginas principales de navegacion
- `html/docs/`: documentacion tecnica y teoria
- `html/exercises/html-css/`: practicas del bloque de HTML y CSS
- `html/exercises/javascript/`: practicas del bloque de JavaScript

La estructura actual separa la base de JavaScript y deja espacio para ampliar
la parte de React cuando entre en la siguiente fase del bootcamp.

### `css/`
Contiene los estilos compartidos del proyecto.

- `hub-pages.css`: estilo comun para hubs y documentacion
- `exercise-theme.css`: estilo comun para ejercicios individuales

### `js/`
Contiene scripts reutilizables y logica de ejercicios.

- `theme-toggle.js`: cambio de tema claro/oscuro
- `js-variable-types.js`: ejercicio de variables y tipos
- `js-profile-message.js`: ejercicio de mensaje personal
- `js-multiples-of-7.js`: ejercicio de bucles y conteo
- `js-sumar-hasta.js`: ejercicio de funcion con validacion y acumulacion
- `js-estudiantes-array.js`: ejercicio de arrays de objetos con alta de estudiantes
- `js-lista-peliculas.js`: ejercicio de arrays y renderizado de lista en el DOM
- `js-eventos-avanzados-2.js`: ejercicio de delegacion de eventos por item

### `assets/`
Contiene recursos estaticos.

- `assets/gallery/`: imagenes de la galeria
- `assets/profile/`: avatar y recursos de perfil

## Criterio de organizacion

El proyecto sigue estas reglas:
- las paginas HTML reales viven dentro de `html/`
- la raiz solo conserva accesos principales
- los estilos se centralizan en `css/`
- los scripts se centralizan en `js/`
- los recursos visuales se guardan en `assets/`
- la documentacion forma parte del proyecto y no queda separada del trabajo real
- la estructura permite crecer desde HTML, CSS y JavaScript hacia React sin rehacer el repositorio

## Tecnologias utilizadas

Tecnologias trabajadas actualmente en el repositorio:
- HTML5
- CSS3
- JavaScript

Tecnologia prevista para fases posteriores del bootcamp:
- React

No se utilizan frameworks ni dependencias externas en el estado actual del
proyecto. La base se ha construido con tecnologia fundamental para reforzar los
cimientos antes de pasar a React.

## Pensado para continuidad

La estructura esta preparada para seguir creciendo. Si se anade una nueva
practica, lo esperado es:
1. crear la pagina en la carpeta adecuada dentro de `html/`
2. reutilizar los estilos compartidos cuando sea posible
3. crear un archivo JS en `js/` si la practica necesita logica propia
4. enlazar la nueva practica desde el hub correspondiente
5. ampliar la parte de React cuando entre en el proyecto sin romper la organizacion actual
6. actualizar este README si cambia la estructura general del proyecto

## Nota final

Este repositorio busca reflejar no solo ejercicios terminados, sino tambien una
forma ordenada de trabajar durante el bootcamp de Eurofirms: separar
responsabilidades, documentar decisiones y mantener un proyecto facil de revisar
por profesorado y companeros mientras evoluciona hacia Frontend con React +
JavaScript.

