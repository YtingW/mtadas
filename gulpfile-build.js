const gulp=require('gulp');
const server=require('gulp-webserver');
const sass=require('gulp-sass');
const webpack=require('webpack-stream');
const sequence=require('gulp-sequence');
const proxy=require('http-proxy-middleware');
const babel=require('gulp-babel');
const minifycss=require('gulp-minify-css');
const minifyhtml=require('gulp-minify-html');
const uglify=require('gulp-uglify');
const del=require('del');
const rev=require('gulp-rev');
const revCollector=require('gulp-rev-collector');
gulp.task('scss',()=>{
	return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(rev())
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(rev.manifest())
	.pipe(gulp.dest('./dist/rev/styles'))
})
gulp.task('html',()=>{
	return gulp.src('./*.html')
    .pipe(revCollector({
        replaceReved:true
    }))
    .pipe(minifyhtml())
	.pipe(gulp.dest('./dist'))
})
gulp.task('js',()=>{
	return gulp.src('./src/scripts/app.js')
	.pipe(webpack({
		entry:'./src/scripts/app.js',
		output:{
			filename:'app.js'
		}
	}))
	.pipe(babel({
		presets:['env']
	}))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/rev/scripts'))
})
gulp.task('lib',()=>{
	return gulp.src('./src/libs/*.js')
	.pipe(gulp.dest('./dist/libs'))
})
gulp.task('clear',del.bind(null,['./dist/**/*'],{
    force:true
}))
gulp.task('default',(cb)=>{
    sequence('clear',['js','scss'],['html','lib'])(cb)
	console.log('done');
})
