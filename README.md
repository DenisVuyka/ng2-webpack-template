# Webpack template for Angular 2

This is a minimal Angular 2 project and external library template configured with Webpack.

## Installing and running

Compile `demo-app`:

```sh
cd demo-app
npm install
```

Compile `demo-lib`:

```sh
cd demo-lib
npm install
npm run build
npm run link
```

The `npm run link` script copies compiled output to the parent `demo-app/node-modules` folder.
This is required do to a known webpack issue with `npm link`ed (symbolic links) content. 

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