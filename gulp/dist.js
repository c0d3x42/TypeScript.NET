(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./constants/Targets", "./constants/ModuleTypes", "gulp", "./TypeScriptRenderer", "./constants/TaskNames", "fs", "../source/System/Promises/Promise", "./stream-convert"], factory);
    }
})(function (require, exports) {
    "use strict";
    var TARGET = require("./constants/Targets");
    var MODULE = require("./constants/ModuleTypes");
    var gulp = require("gulp");
    var typescript = require("./TypeScriptRenderer");
    var TASK = require("./constants/TaskNames");
    var fs = require("fs");
    var Promise_1 = require("../source/System/Promises/Promise");
    var stream_convert_1 = require("./stream-convert");
    var fields = {
        "name": true,
        "version": true,
        "license": true,
        "author": true,
        "description": true,
        "repository": true,
        "private": true,
        "keywords": true
    };
    function readJsonFile(path, encoding) {
        if (encoding === void 0) { encoding = 'utf8'; }
        return new Promise_1.Promise(function (resolve, reject) {
            fs.readFile(path, encoding, function (err, data) {
                if (err)
                    reject(err);
                else
                    resolve(JSON.parse(data));
            });
        }, true);
    }
    function getPackage(dist) {
        return readJsonFile('./package.json')
            .then(function (pkg) {
            for (var _i = 0, _a = Object.keys(pkg); _i < _a.length; _i++) {
                var key = _a[_i];
                if (!fields[key])
                    delete pkg[key];
            }
            pkg["name"] += "-" + dist;
            return pkg;
        });
    }
    function savePackage(dist, folder) {
        if (folder === void 0) { folder = dist; }
        return getPackage(dist)
            .then(function (pkg) {
            return new Promise_1.Promise(function (resolve, reject) {
                fs.writeFile("./dist/" + folder + "/package.json", JSON.stringify(pkg, null, 2), function (err) {
                    if (err)
                        reject(err);
                    else
                        resolve();
                });
            });
        })
            .then(function () {
            return copyReadme(folder);
        });
    }
    function copyReadme(folder) {
        return stream_convert_1.toPromise(gulp.src("./dist/README.md")
            .pipe(gulp.dest("./dist/" + folder + "/")));
    }
    gulp.task(TASK.DIST_ES6, function () { return typescript
        .dist(MODULE.ES6, TARGET.ES6, MODULE.ES6)
        .render()
        .then(function () { return savePackage(MODULE.ES6); }); });
    gulp.task(TASK.DIST_AMD, function () { return typescript
        .dist(MODULE.AMD, TARGET.ES5, MODULE.AMD)
        .minify()
        .render()
        .then(function () { return savePackage(MODULE.AMD); }); });
    gulp.task(TASK.DIST_UMD, function () { return typescript
        .dist(MODULE.UMD + '.min', TARGET.ES5, MODULE.UMD)
        .minify()
        .render()
        .then(function () { return savePackage(MODULE.UMD, MODULE.UMD + '.min'); }); });
    gulp.task(TASK.DIST_COMMONJS, function () { return typescript
        .dist(MODULE.COMMONJS, TARGET.ES5, MODULE.COMMONJS)
        .render()
        .then(function () { return savePackage(MODULE.COMMONJS); }); });
    gulp.task(TASK.DIST_SYSTEMJS, function () { return typescript
        .dist(MODULE.SYSTEMJS, TARGET.ES5, MODULE.SYSTEMJS)
        .render()
        .then(function () { return savePackage(MODULE.SYSTEMJS); }); });
    gulp.task(TASK.DIST, [
        TASK.DIST_ES6,
        TASK.DIST_AMD,
        TASK.DIST_UMD,
        TASK.DIST_COMMONJS,
        TASK.DIST_SYSTEMJS
    ]);
});
//# sourceMappingURL=dist.js.map