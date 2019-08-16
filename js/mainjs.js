$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	nav:true,
	dots: false,
	navText : ["<img src='img/left.png'>","<img src='img/next.png'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

$('.carousel').carousel()


$(".show").click(function(){
  $(".else").removeClass("hidden"),
  $(".less").removeClass("hidden"),
  $(".show").addClass("hidden");
});

$(".less").click(function(){
  $(".else").addClass("hidden"),
  $(".show").removeClass("hidden"),
  $(".less").addClass("hidden");
});
