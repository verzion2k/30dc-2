$(document).ready(function() {
    $(".portfolio").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});