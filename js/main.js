$(document).on("click","#myBtn",function(){
	 $("#dblock").hide();
	 $("#sear-btn").hide()
	
	 $("#myDIV").toggle();
	
})
$(document).on("click","#mySearch",function(){
	 $("#myDIV").hide();
	 $("#sear-btn").hide()
	 $("#dblock").toggle();
	
})
$(document).on("click","#mySearchr",function(){
	 $("#myDIV").hide();
	 $("#dblock").hide();
	 $("#sear-btn").toggle();
	
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	dots:true,
	autoplay:true,
	speed: 300,
	infinite: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            dots:true,
            loop:true,
			nav:true
        }
    }
})
 

function hideFunction() {
    var x = document.getElementById("hided");
    if (x.style.display === "none") {
        x.style.display = "inline-table";
    } else {
        x.style.display = "none";
    }
}

function hideFunction2() {
    var x = document.getElementById("hided2");
    if (x.style.display === "none") {
        x.style.display = "inline-table";
    } else {
        x.style.display = "none";
    }
}