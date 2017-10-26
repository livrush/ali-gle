$('docoument').ready(function() {
    $("#eagle").mouseenter(function(event) {
        $("#screech")[0].currentTime = 0;
        $("#screech")[0].play();
    });
});
