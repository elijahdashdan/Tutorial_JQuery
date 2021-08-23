$("h1").css("color","green")


$("button").click(function(){
  $("h1").css("color","red");
})

$(document).keypress(function(event){
  $("h1").text(event.key);
})

$("button").on("mouseover",function(){
  $("h1").css("color","red");
})
