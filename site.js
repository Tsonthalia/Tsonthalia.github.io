// BUILT FROM SCRATCH BY TANAY SONTHALIA
$(".desktop .rightSkew").height(window.innerHeight);

$(".desktop .personalInfo h2").hide();
$(".desktop .personalInfo .socialMedia").hide();
$(".desktop .personalInfo a button").hide();

$(".desktop .personalInfo h1").hide().fadeIn(500, function() {
  $(".desktop .personalInfo h2").fadeIn(500, function() {
    $(".desktop .personalInfo .socialMedia").fadeIn(500, function() {
      $(".desktop .personalInfo a button").fadeIn(500);
    });
  });
});




$(".desktop .projectCell img").hover(function() {
  //$(this).toggleClass("imageHovered");
  var $text = $("<p>")
  $text.addClass("projectName");
  //this.append($text);

  //console.log($text);
});
