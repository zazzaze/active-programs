 $(document).ready(function(){
    $("#menu-header").on("click","a", function (event) {
        document.querySelector('.navbar--mobile').classList.remove('navbar--mobile-close');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top-=0;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});