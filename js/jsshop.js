/*Denna koden ser till att produktkategoriernas texter ändrar utseende beroende på vilken kategori som är vald. Den ser också till så att produkterna som ska visas i varje kategori görs synliga. */
$(document).ready(function(){

$(".shopli:nth-child(1) a").addClass("hover"); /*Ge första shopli (nth-child(1) alltså först i ul listan, klassen hover*/ 
$(".shopli:nth-child(1)").click(function() {
    $(".products-news").css({ /*Ändrar objektets css och gör det synligt*/
        "display": "grid"
    });
    $(".products-belts").css({ /*Gör osynlig / tar tillfälligt bort objektet*/
        "display": "none"
    });
    $(".products-other").css({
        "display": "none"
    });
    $(".shopli:nth-child(3) a").removeClass("hover");
    
    $(".shopli:nth-child(2) a").removeClass("hover");
    
    $(".shopli:nth-child(1) a").addClass("hover");
    

})

$(".shopli:nth-child(2)").click(function() {
    $(".products-news").css({
        "display": "none"
    })
    $(".products-belts").css({
        "display": "grid"
    })
    $(".products-other").css({
        "display": "none"
    })
    $(".shopli:nth-child(3) a").removeClass("hover");
    
    $(".shopli:nth-child(2) a").addClass("hover");
    
    $(".shopli:nth-child(1) a").removeClass("hover");
    
})

$(".shopli:nth-child(3)").click(function() {
    $(".products-news").css({
        "display": "none"
    })
    $(".products-belts").css({
        "display": "none"
    })
    $(".products-other").css({
        "display": "grid"
    })
    $(".shopli:nth-child(3) a").addClass("hover");
    
    $(".shopli:nth-child(2) a").removeClass("hover");
    
    $(".shopli:nth-child(1) a").removeClass("hover");
    
})
});

