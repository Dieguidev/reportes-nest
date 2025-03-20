<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>



## Project setup

```bash
$ npm install
```

## Compile and run the project
1. Clonar `env.template` y renombrar a `.env` y completar las variables de entorno en .env
2. Levantar la base de datos `docker compose up -d`
3. Generar el Prisma client `npx prisma generate`
4. Ejecutar

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

