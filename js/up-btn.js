jQuery(($) => {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 4800) $('.to-up').fadeIn();
        else $('.to-up').fadeOut();
    });
    $('.to-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 566);
        return false;
    });
});