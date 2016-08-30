var gulp = require('gulp');

gulp.task('html', function(){
  if(location){
    location.reload();
  }
});

gulp.task('js', function(){
  if(location){
    location.reload();
  }    
});

gulp.task('css', function () {
   var styles = document.querySelectorAll('link[rel=stylesheet]');

   for (var i = 0; i < styles.length; i++) {
     // reload styles
     var restyled = styles[i].getAttribute('href') + '?v='+Math.random(0,10000);
     styles[i].setAttribute('href', restyled);
   };
});

gulp.watch('**/*.html', ['html']);
// gulp.watch('**/*.js', ['js']);
gulp.watch('**/*.css', ['css']);