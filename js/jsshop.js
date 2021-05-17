
$(document).ready(function(){

$(".shopli:nth-child(1) a").addClass("hover");
$(".shopli:nth-child(1)").click(function() {
    $(".products-news").css({
        "display": "grid"
    });
    $(".products-belts").css({
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

