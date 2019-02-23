# express-boilerplate

Express ES6 and so on

## Environment file

Create folder `env` files `development.env` and `production.env` and define your secret values.

```
env
├── development.env
└── production.env
```

For example `development.env` file and use in javascript by

```
DB_USER=root
DB_PASS=toor
```

```js
const DB_USER = process.env.DB_USER; // it'll be root
const DB_PASS = process.env.DB_PASS; // it'll be toor
```


## Run development server

```bash
yarn dev
```

## Build and Ship

Build es6 to default es2015

```bash
yarn build
```
