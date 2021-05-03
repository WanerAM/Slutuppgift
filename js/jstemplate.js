//Darkmode (enbart för större skärmar)
var foota = document.getElementsByClassName('foota')
$(document).ready(function() {
    $(".foota").addClass("lighttext");
    $('.theme').on("click", function()

        {
            if ($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                $(".header").removeClass("darknav");
                $(".nava").removeClass("darktext");
                $("#carti").removeClass("darktext");
                $(".logo").attr("src", "../pics/logosvartcirk.png");
                $(".theme").removeClass("darkbutton");
                $(".theme").removeClass("darkbutton:hover");
                $("footer").removeClass("darknav");
                $(".foota").addClass("lighttext");
                $(".foota").removeClass("darktext");
                $(".container").removeClass("containerdark");
                $("#citation").removeClass("darktext");
                $("p").removeClass("darktext");
                $("#textsection").removeClass("darks");

            } else {
                $("body").addClass("dark");
                $(".header").addClass("darknav");
                $(".nava").addClass("darktext");
                $("#carti").addClass("darktext");
                $(".logo").attr("src", "../pics/logovit.png");
                $(".theme").addClass("darkbutton");
                $(".theme").addClass("darkbutton:hover");
                $("footer").addClass("darknav");
                $(".foota").addClass("darktext");
                $(".foota").removeClass("lighttext");
                $(".container").addClass("containerdark");
                $("#citation").addClass("darktext");
                $("p").addClass("darktext");
                $("#textsection").addClass("darks");
            }

        });

});

//Kontrollera Nav för mobil
function show() {
    document.getElementById('navside').classList.toggle('active');
    burger.classList.toggle('toggle')
};