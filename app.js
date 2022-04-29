

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

$(window).scroll(function() {
    $('html, body').animate({
        scrollTop: $("contact").offset().top
    }, 2000);
});
