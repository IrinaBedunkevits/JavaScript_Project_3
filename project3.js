$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000, function(){
            $('#btnFadeOut').text('It´s gone');
        }); // 3000 milliseconds or use .fadeOut('fast') or .fadeOut('slow')
    });
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(3000);
    });
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000); // 1000 is one second
    });
    $('#btnSlideDown').click(function(){
        $('#box').slideDown(3000);
    });
    $('#btnSlideUp').click(function(){
        $('#box').slideUp(3000);
    });
    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(3000);
    });
    $('#btnStop').click(function(){
        $('#box').stop();
    });
    //animation
    $('#moveRight').click(function(){
        $('#box2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: '1'
        });
    });
    $('#moveLeft').click(function(){
        $('#box2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: '0.5'
        });
    });
    $('#moveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 100
        });
        box.animate({
            left: 0,
            top: 100
        });
        box.animate({
            left: 0,
            top: 0
        });
    });
});