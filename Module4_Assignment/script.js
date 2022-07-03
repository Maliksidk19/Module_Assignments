(function () {
    var names = ["Yaakov", "John", "Joe", "Laura", "Fred", "Jonathan", "Paula", "Catherin", "Frank", "Jim"]

    for (var i = 0; i < names.length; i++)
    {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if(firstLetter === "j") {
            byeSpeaker.speak(names[i]);
        }
        else {
            helloSpeaker.speak(names[i]);
        }
    }
})();