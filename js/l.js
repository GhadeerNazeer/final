 //for active menu
var header = document.getElementById("forAfter");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
}
//for bar
// let bar = document.getElementById('bar'),
// menu = document.getElementById('res-menu');
// bar.onclick = function(){
// menu.classList.toggle('toggle');
// };
$('#bar').click(function(){
    $('#res-menu').toggleClass("toggle");
    $('#res-menu').toggleClass("show");
    $('#one').toggleClass("one");
    $('#two').toggleClass("two");
    $('#three').toggleClass("three");
});

var sliderboxes=Array.from(document.querySelectorAll(".slider-container .box"));
var slidescount =sliderboxes.length;
var currentslide =1;
var slideNumberElement =document.getElementById("slide-number");
var nextButton =document.getElementById("next");
var prevButton =document.getElementById("prev");

nextButton.onclick= nextSlide;
prevButton.onclick= prevSlide;
 
function checker(){
    removeclass();
    sliderboxes[currentslide].classList.add("active");
    if(currentslide==1){
        prevButton.classList.add("disabled")
    }else{
        prevButton.classList.remove("disabled")
    }
    if(currentslide==slidescount){
        nextButton.classList.add("disabled")
    }else{
        nextButton.classList.remove("disabled")
    }

};

function nextSlide(){
    if(prevButton.classList.contains("disabled")){
        return false;
    }else{
        currentslide--;
        checker();
    }
};
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
        return false;
    }else{
        currentslide--;
        checker();
    }
};
function removeclass(){
    sliderboxes.forEach((box) =>{
        box.classList.remove("active"); 
    });
};
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".para").offset().top-700){
        $(".para").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".photo").offset().top-400){
        $(".photo").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".four").offset().top-500){
        $(".four").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".fiv").offset().top-400){
        $(".fiv").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".emp").offset().top-300){
        $(".emp").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".seven").offset().top-400){
        $(".seven").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".eight").offset().top-330){
        $(".eight").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".nine").offset().top-300){
        $(".nine").animate({
              opacity :1 
        },1000);
    }
});    
$(window).on("scroll" ,function(){
    var sc=$(window).scrollTop();
    if(sc >=$(".six").offset().top-600){
        $(".six").animate({
              opacity :1 
        },1000);
    }
}); 
 



       
        

