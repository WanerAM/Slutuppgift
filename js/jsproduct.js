$(document).ready(function() {
    //Plocka query string
    const queryString = window.location.search;
    //Parse
    const urlParams = new URLSearchParams(queryString);
    //Hämta delen vid namn id
    const id = urlParams.get('id')

    texter = ["CLOUDED MINDS", "CLOUD PATCH"];
    undertexter = ["- Custom made high quality belt", "- Separately sold cloud patch"];
    infotexter = ["Our belt for the creative, daring individual. For the one who's willing to catch eyes and others attention. Are you not this person? - Fear not, tuck the belt in and you're one with the crowd again.", "A simple, yet charming patch to put on whatever you'd like. (Despite looking best on our belts)"];
    material = ["Materials: <br>High quality polyester<br>2x Iron D-rings<br>1x Wool / polyester patch", "Materials: <br> Polyester<br>Wool<br>Backside glue"];
    
    
    $("main .shopsection #info div h1").text(texter[id - 1]);
    $("main .shopsection #info div .punderclass i").text(undertexter[id - 1]);
    $("main .shopsection #info .infotext").text(infotexter[id - 1]);
    $("main .shopsection #info .material").html(material[id - 1]);
    new Splide('.splide').mount();

    
    $(".buy").on("click", function(){
        $("#addedobject").css({"display":"block"});
        $("#addedobject").addClass("animation-target");
        setTimeout(function(){
            $('#addedobject').removeClass('animation-target');
            $("#addedobject").css({"display":"none"});
        }, 1400);
    })
    

})



