$(function() {
    changer();
});

function changer() {
    var words = ["AFFORDABLE HOUSING","BUSES TO SHOW UP ON TIME",
    "MORE PARKS", "LIVABLE WAGES", "THE END OF POLICE BRUTALITY",
    "A BETTER TALLAHASSEE"];
    var idx = Math.floor(words.length * Math.random());
    $('#change').text(words[idx]);
    var time = Math.floor(5000 * Math.random() + 3000);
    setTimeout(changer,time);
}
