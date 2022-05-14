$(function(){
    
    $('.top__slide').on('click', function(event){
        event.preventDefault();
        $('.top__slide').addClass('top__slide--active');
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
    });
    $(window).on('scroll',function(){
        var height = $(window).scrollTop();
        if(height > 1000){
            $('.top__slide').removeClass('top__slide--active');
        } else{
        }
    });
    var mixer = mixitup('.ourWork__inner');
})