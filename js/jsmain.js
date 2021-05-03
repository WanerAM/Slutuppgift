$(document).ready(function() {
    $("#textsection").on("click", function() {
        $("#flscreen").css({ "display": "block" })
    })
    $("#textsectionmob").on("click", function() {
        $("#flscreen").css({ "display": "block" })
    })
    $("#flscreen").on("click", function() {
        $("#flscreen").css({ "display": "none" })
    })
})