 $(document).ready(function(){
    $("#menu-header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top-=0;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#mobile-menu-header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top-=0;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
});