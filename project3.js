$(function(){
    var $myNotes = $("#myNotes");
    var $taskInput = $("#taskInput");
    var $notification = $("#notification");

    var displayNotification = function() {
        if (!$myNotes.children().lenght) {
            $notification.fadeIn("fast");
        } else {
            $notification.css("display", "none")
        }
    }

    $("#Addbtn").on("click", function() {
        if(!$taskInput.val()) {return false;}

        $myNotes.append("<li>" + $taskInput.val() + "<button class='delete'>Delete</button></li>");

        $taskInput.val("");

        displayNotification();

        $(".delete").on("click", function() {
            var $parent = $(this).parent();

            $parent.css("animation", "fadeOut .3s linear");

            setTimeout(function(){
                $parent.remove();
                displayNotification();
            }, 295)
        })
    })
});