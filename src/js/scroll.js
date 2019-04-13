 $(document).ready(function(){
    $("#menu-header, #mobile-menu-header, #to-top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top-=0;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});