window.onload = function loaded() {
    var preloader = document.getElementById('loaderArea');
    preloader.style.opacity=0;
    setTimeout(function(){preloader.style.display='none'},500);
  }