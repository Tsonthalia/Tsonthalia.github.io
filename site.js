// BUILT FROM SCRATCH BY TANAY SONTHALIA

function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

var check = detectmob();
if (check == true) {
  $(".desktop").hide();

  console.log("Mobile");
} else {
  $(".mobile").hide();
  console.log("Desktop");
}


$(".desktop .rightSkew").height(window.innerHeight);

$(".desktop .personalInfo h2").hide();
$(".desktop .personalInfo a").hide();

$(".desktop .personalInfo h1").hide().fadeIn(500, function() {
  $(".desktop .personalInfo h2").fadeIn(500, function() {
    $(".desktop .personalInfo a").fadeIn(500);
  });
});




$(".desktop .projectCell img").hover(function() {
  //$(this).toggleClass("imageHovered");
  var $text = $("<p>")
  $text.addClass("projectName");
  //this.append($text);

  //console.log($text);
});


$('textarea').autoResize();
