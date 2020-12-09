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


// Add new things
function addNewThing() {
    var li = document.createElement("li");
    var Iwish = document.getElementById("Iwish").value;
    var text = document.createTextNode(Iwish);
    li.appendChild(text);
    if (Iwish.length > 0 && Iwish.length < 3) {
      alert("Too short input!");
      return false;
    } else {
      document.getElementById("myThings").appendChild(li);
    }
    document.getElementById("Iwish").value = "";
  }
  // Deleting added things
    function deleteThing() {
    var list = document.getElementById("myThings");
    list.removeChild(list.childNodes[0]);
  }
  // P element shows when click send button
  var x = document.getElementById("message");
  x.addEventListener("click", sended);
  function sended() {
    document.getElementById("thankyou").innerHTML =
          "Thank you for sending message!";
  }
  // Headen element shows up onchange
  document.getElementById('hide');
  var x = document.getElementById('hide');
  x.style = "display: none";
  
  function commentBox() {
  document.getElementById('hide');
  var x = document.getElementById('hide');
  x.style = "display: block";
  }
  // Pulldown
  function iChooseFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("myThings").innerHTML += "I want to " + x + "<br>";
  }
  