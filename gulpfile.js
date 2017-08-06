var gulp = require('gulp');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('./tsconfig.json');
var tslint = require('gulp-tslint');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var plumber = require('gulp-plumber');
var beep = require('beepbeep');

function onError(err){
    beep();
    this.emit('end');
};

var tasks = {};

tasks.clean = () => {
    return del(['dist']);
};

tasks.buildTypeScript = () => {
    var tsResult = gulp.src('src/**/*.ts')
                    .pipe(plumber({ errorHandler:onError }))
                    .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('dist'));
}

tasks.buildView = () => {
    return gulp.src('src/views/**/*.hbs')
            .pipe(plumber({ errorHandler:onError }))
            .pipe(gulp.dest('dist/views'));
}

tasks.buildPublic = () => {
    return merge(
        gulp.src(['public/**/*', '!public/css/**/*'])
            .pipe(plumber({ errorHandler:onError }))
            .pipe(gulp.dest('dist/public')),
        gulp.src('public/css/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('app.css'))
            .pipe(gulp.dest('dist/public/css/')),
        gulp.src(mainBowerFiles())
            .pipe(gulp.dest('dist/public/vendors'))
    );
}

tasks.buildStatic = () => {
    return gulp.src('src/*env.*')
            .pipe(plumber({ errorHandler:onError }))
            .pipe(gulp.dest('dist'));
}

tasks.lint = () => {
    return gulp.src(['src/**/*.ts', 'test/**/*.test.ts'])
        .pipe(plumber({ errorHandler:onError }))
        .pipe(tslint({
            configuration: 'tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
}

tasks.test = () => {
    return gulp.src('test/**/*.test.ts')
        .pipe(plumber({ errorHandler:onError }))
        .pipe(mocha({
            compilers: ['ts:ts-node/register'],
            reporter: 'nyan'
        }))
        .on('error', () => {});
}

tasks.watch = () => {
    return watch(['src', 'test'], () => {
        return gulp.series('lint', 'test')();
    });
}

tasks.watchBuild = () => {
    return watch(['src', 'test', 'public'], () => {
        return gulp.series('lint', 'test', 'build')();
    });
};

gulp.task('clean', tasks.clean);
gulp.task('build-ts', tasks.buildTypeScript);
gulp.task('build-view', tasks.buildView);
gulp.task('build-static', tasks.buildStatic);
gulp.task('build-public', tasks.buildPublic);
gulp.task('lint', tasks.lint);
gulp.task('test', tasks.test);
gulp.task('watch', tasks.watch);
gulp.task('build', gulp.parallel('build-ts', 'build-view', 'build-static', 'build-public'));
gulp.task('rebuild', gulp.series('clean', 'build'));
gulp.task('watch-build', tasks.watchBuild);