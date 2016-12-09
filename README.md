# Webpack template for Angular 2

[![Build Status](https://travis-ci.org/DenisVuyka/ng2-webpack-template.svg?branch=master)](https://travis-ci.org/DenisVuyka/ng2-webpack-template)

This is a minimal Angular 2 project and external library template configured with Webpack.

Main features:

- demonstrates external library authoring and reuse
- using symlinked modules (`npm link`) for local development of newer versions
- sourcemaps and TypeScript debugging in the browser for app and external libraries
- using own webpack loaders
- supporting components optimized for SystemJS loader (using `module.id`)

## Installing and running

Compile and link `demo-lib`:

```sh
cd demo-lib
npm install
npm run build
npm link
```

_Optinally you can run tests with `npm test`_

Compile `demo-app`:

```sh
cd demo-app
npm link angular2-webpack-lib
npm install
```

_Optinally you can run tests with `npm test`_

Run `demo-app` in development mode:

```sh
cd demo-app
npm start
```

Build `demo-app` in production mode:

```
cd demo-app
npm run build
```