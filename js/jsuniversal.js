//Detta är ett universellt .js dokument för alla undersidor. Här justeras darkmode med hjälp av klasser.

var foota = document.getElementsByClassName('foota');
$(document).ready(function() {

    $(".foota").addClass("lighttext");
    $('.theme').on("click", function()

        {
            if ($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                $(".nava, #carti, .foota, #citation, p, .topbannertext").removeClass("darktext");
                $(".logo").attr("src", "../pics/logosvartcirk.png");
                $(".theme").removeClass("darkbutton");
                $(".theme").removeClass("darkbutton:hover");
                $("footer, .header").removeClass("darknav");
                $(".foota").addClass("lighttext");
                $(".container").removeClass("containerdark");
                $("#textsection").removeClass("darks");
                $(".shopsection").removeClass("darkback");

            } else {
                $("body").addClass("dark");
                $(".header").addClass("darknav");
                $(".nava, #carti, .foota, #citation, .topbannertext, p").addClass("darktext");
                $(".logo").attr("src", "../pics/logovit.png");
                $(".theme").addClass("darkbutton");
                $(".theme").addClass("darkbutton:hover");
                $("footer").addClass("darknav");
                $(".foota").removeClass("lighttext");
                $(".container").addClass("containerdark");
                $("#textsection").addClass("darks");
                $(".shopsection").addClass("darkback");
            }

        });

});

//Denna kod ändrar classlist för sidonaven på mobilen. När den är aktiv glider navbaren ut och det kontrolleras av "burger", de tre strecken upp till vänster.
function show() {
    document.getElementById('navside').classList.toggle('active');
    burger.classList.toggle('toggle')
};

