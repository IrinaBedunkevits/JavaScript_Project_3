$(function(){
    var $myNotes = $("#myNotes");
    var $taskInput = $("#taskInput");
    var $myWishes = $("#myWishes");

    var showMyWishes = function() {
        if (!$myNotes.children().lenght) {
            $myWishes.fadeIn("fast");
        } else {
            $myWishes.css("display", "none")
        }
    }

    $("#Addbtn").on("click", function() {
        if(!$taskInput.val()) {return false;}

        $myNotes.append("<li>" + $taskInput.val() + "<button class='delete'>Delete</button></li>");

        $taskInput.val("");

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