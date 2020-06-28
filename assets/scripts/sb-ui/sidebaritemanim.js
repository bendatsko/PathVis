$("#infoUptoBtn").click(function(){
    $("#awesome44").css("transform","translateX(30vh)");
    $("#awesome45").css("transform","translateX(0vh)");
    });
$("#cpDownBtn").click(function(){
    $("#awesome44").css("transform","translateX(-15vh)");
    $("#awesome45").css("transform","translateX(30vw)");
    });
$('#cpDownBtn').click(function(e) {
    e.preventDefault();
    window.location.href = '#config';
    });



window.onload = function() {
        window.location.href = "#about";
}