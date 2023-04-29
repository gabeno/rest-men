### Rest API

Build a rest API with Mongo, Express and Node (MEN) with Typescript


### Notes

##### `body-parser`

When you do not use `body-parser` you get the raw request and the body and headers are not in the root object of request parameter. The `body-parser` simplifies the request for you. It assembles data which is then acessible in `body` object of the request.

See:
- https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
- https://github.com/expressjs/body-parser

##### `compression`

Decrease the size of the response body and therefore increase the speed of the api/web app. When using a reverse proxy, its best to have compression at the reverse proxy level and not as a middleware.

See:
- https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression

##### `cookie-parser`

Adds functionality to Express to be able to have cookies within the headers of a request or response via `req.cookies` or `res.cookie`.

See:
- https://videlais.com/2020/03/02/working-with-cookies-in-node-express-using-cookie-parser/

##### `cors`

Enables more control on what origin our api can be called from. `cors` middleware makes it easier to enable CORS (Cross Origin Resource Sharing) with various options.

See:
- https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/


##### Further work

- Add tests with jest: [article 1](https://codingpr.com/test-your-express-api-with-jest/), [article 2](https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/), [video 1](https://www.youtube.com/watch?v=vDLE8hqzA8I)
- Dockerize app
- Use [prisma](https://www.prisma.io/) and adopt DI for database provider
- Organize app better - [controller](https://www.youtube.com/watch?v=PM58NEMJgMw), routes and service + folder structure, typing and [validation](https://www.youtube.com/watch?v=BWUi6BS9T5Y) improvement