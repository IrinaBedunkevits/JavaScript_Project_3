$(function(){
    var $myNotes = $("#myNotes");
    var $noteInput = $("#noteInput");
    var $myWishes = $("#myWishes");

    var showMyWishes = function() {
        if (!$myNotes.children().lenght) {
            $myWishes.fadeIn("fast");
        } else {
            $myWishes.css("display", "none")
        }
    }

    $("#Addbtn").on("click", function() {
        if(!$noteInput.val()) {return false;}

        $myNotes.append("<li>" + $noteInput.val() + "<button class='delete'>Delete</button></li>");

        $noteInput.val("");

        showMyWishes();

        $(".delete").on("click", function() {
            var $parent = $(this).parent();

            $parent.css("animation", "fadeOut .3s linear");

            setTimeout(function(){
                $parent.remove();
                showMyWishes();
            }, 500)
        })
    })
});
$(document).ready(function(){
    $('#btnSlideDown').click(function(){
        $('#contact').slideDown(3000);
    });
    $('#btnSlideUp').click(function(){
        $('#contact').slideUp(3000);
    });
});