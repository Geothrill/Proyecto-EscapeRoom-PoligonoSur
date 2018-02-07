$(document).ready(function(){
    $(document).mousemove(function(event){ 
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY); 
    });
});