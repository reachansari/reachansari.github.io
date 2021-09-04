$(".toolbar").css("transition", "all 0.2s ease-in-out")

$(".sidenav-items").on('click', function(){
    console.log('clicked')

    $(".sidenav-overlay").css({"display":"none","opacity":0})
    $("body").css("overflow","scroll")
    $(".sidenav").css("transform", "translateX(-105%)")
})

$(".sidenav-trigger").on('click', function(){
    $(".sidenav").css("transform", "translateX(0)")
    $(".sidenav-overlay").css({"display":"block","opacity":1})
    $("body").css("overflow","hidden")
})



  