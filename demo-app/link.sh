echo "Linking angular2-webpack-lib"
rm -rf node_modules/angular2-webpack-lib
rsync -a ../demo-lib/ node_modules/angular2-webpack-lib --exclude node_modules


