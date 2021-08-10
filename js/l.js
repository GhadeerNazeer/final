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
       

    




       
        

