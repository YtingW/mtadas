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
gulp.task('server',()=>{
	return gulp.src('./dev')
	.pipe(server({
		host:'localhost',
		port:8100,
		livereload:true,
		directoryListing:{
			enable:true,
			path:'./dev'
		},
		middleware:[
			proxy('/api',{
				target:'http://localhost:9000',
				changeOrigin:true
			})
		]
	}
	))
})
gulp.task('scss',()=>{
	return gulp.src('./src/styles/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./dev/styles'))
})
gulp.task('html',()=>{
	return gulp.src('./*.html')
	.pipe(gulp.dest('./dev'))
})
gulp.task('js',()=>{
	return gulp.src('./src/scripts/*.js')
	.pipe(webpack({
		entry:{
			app:'./src/scripts/app.js',
			'app_list':'./src/scripts/app_list.js',
			'app_detail':'./src/scripts/app_detail.js',
			'app_shopCar':'./src/scripts/app_shopCar.js'
		},
		output:{
			filename:'[name].js'
		},
		module: {
		  loaders: [
			{ test: /\.html$/, loader: 'string-loader' },
		  ],
		},
	}))
	.pipe(gulp.dest('./dev/scripts'))
})
gulp.task('lib',()=>{
	return gulp.src('./src/libs/*')
	.pipe(gulp.dest('./dev/libs'))
})
gulp.task('img',()=>{
    return gulp.src('./src/img/*')
    .pipe(gulp.dest('./dev/img'))
})
gulp.task('watch',()=>{
    gulp.watch('./*.html',['html']);
    gulp.watch('./src/styles/**/*',['scss']);
    gulp.watch('./src/scripts/**/*',['js']);
    gulp.watch('./src/img/**/*',['img']);
})
gulp.task('default',['server','scss','html','js','lib','img','watch'],()=>{
	console.log('done');
})
