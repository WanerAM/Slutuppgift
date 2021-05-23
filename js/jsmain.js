//Javascript som visar / döljer produktbilden

$(document).ready(function() {
    $("#textsection").on("click", function() { //När man trycker på textsektionen visas objektet med id #flscreen
        $("#flscreen").css({ "display": "block" })
    })
    $("#textsectionmob").on("click", function() {
        $("#flscreen").css({ "display": "block" })
    })
    $("#flscreen").on("click", function() {
        $("#flscreen").css({ "display": "none" })
    })
})