# template_vue3_library

This template is for component libraries.

Create your components inside `src/components` Then add all in the file `src/components/index.js`

Check your components adding them on the `App.vue` and run the local env with `npm run dev`

Change the library name on `vite.config.js`
```js
name: 'your-library-name',
fileName: 'your-library-name',
```

Using the same name change the `package.json`
```json
"main": "./dist/your-library-name.umd.cjs",
"module": "./dist/your-library-name.js",
"exports": {
  ".": {
    "import": "./dist/your-library-name.js",
    "require": "./dist/your-library-name.umd.cjs"
  }
},
```

## Prerequisites

Vite requires [Node.js](https://nodejs.org/en/) version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

And see [Vite Configuracion for build Libraries](https://vitejs.dev/guide/build.html#library-mode).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile the Library

```sh
npm run build
```
