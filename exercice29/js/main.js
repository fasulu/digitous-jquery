$(function(){
    $("button").click(function(){
        
        var userStr = document.querySelector("input");
        console.log(userStr.value.length);
        
        if(userStr.value.length > 5) {
            $("input").addClass("is-valid");
        } else {
            $("input").addClass("is-invalid");
        }
    });
});