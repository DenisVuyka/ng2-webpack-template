# Webpack template for Angular 2

[![Build Status](https://travis-ci.org/DenisVuyka/ng2-webpack-template.svg?branch=master)](https://travis-ci.org/DenisVuyka/ng2-webpack-template)

This is a minimal Angular 2 project and external library template configured with Webpack.

## Installing and running

Compile `demo-lib`:

```sh
cd demo-lib
npm install
npm run build
```

_Optinally you can run tests with `npm test`_

Compile `demo-app`:

```sh
cd demo-app
npm install
bash link.sh
```

The `link.sh` script copies compiled output to the parent `demo-app/node-modules` folder.
This is required do to a known webpack issue with `npm link`ed (symbolic links) content. 

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