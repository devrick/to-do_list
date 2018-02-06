// Check off todos by clicking them
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
})