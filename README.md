# Desafío para Software Engineers

Nombre postulante: [Francisco Daniel Molina]
Link a la app en producción: [https://kimche-challenge-ruby.vercel.app/]


## Consideraciones sobre el proyecto:
<br/>
- Incorporé una Landing para dar una mejor experiencia de usuario haciendo el recorrido desde un principio, con información sobre lo que va a poder obteter el usuario en el sitio.
<br/>
- Es responsive y al diseño lo realice inspirado en los colores de Kimche. 
<br/>
- El usuario necesita ingresar un nombre para poder ordenar el resultado según continente o lenguaje de cada pais que le interese.
<br/>
- Agregue una ruta de "Detalles" donde se puede ver más informacion sobre el pais que se seleccione desde todos los que se renderizan en la home.
<br/>
- El servicio que opte para el deploy fue Vercel.

## Pregunta recibida:
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

## Mi respuesta:
Según lo planteado, crearia un backup de toda esa BDD (en el caso de que no exista) y luego iria mutando a una base de datos tipo NoSQL por la cantidad de información que mencionaron en el planteo. Me imagine tambien usar servidores de GraphQL en el caso de que sean muchos desarrolladores consumiento esa informacion.


## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
