const moduleIdRegex = /moduleId: module.id,/g;
const moduleNameRegex = /moduleId: __moduleName,/g;

function commentOut(line) {
    return `// ${line}`;
}

// Allows loading components optimized for SystemJS loader by disabling module references
// see more: https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html
module.exports = function(source, sourceMap) {
    // Not cacheable during unit tests;
    this.cacheable && this.cacheable();

    let result = source
        .replace(moduleIdRegex, commentOut)
        .replace(moduleNameRegex, commentOut);

    // Support for tests
    if (this.callback) {
        this.callback(null, result, sourceMap)
    } else {
        return result;
    }
}
