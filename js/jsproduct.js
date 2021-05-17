$(document).ready(function() {
    //Plocka query string
    const queryString = window.location.search;
    //Parse
    const urlParams = new URLSearchParams(queryString);
    //Hämta delen vid namn id
    const id = urlParams.get('id')

    texter = ["CLOUDED MINDS", "CLOUD PATCH"];
    undertexter = ["- Custom made high quality belt", "- Separately sold cloud patch"];
    $("main .shopsection .info h1").text(texter[id - 1]);
    $("main .shopsection .info p i").text(undertexter[id - 1]);


})