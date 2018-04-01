var currentChar = 0,
    currentText = 0;
var endOfWord = false;
var dynamicText = "";
var text = ["web applications.", "corporate websites.", "landing pages.", "user interfaces."];
var dynamicTextTag = $(".dynamicText");

function start() {
    var sumarLetra = setInterval(() => {
        dynamicText += text[currentText].charAt(currentChar);
        currentChar++;
        dynamicTextTag.html(dynamicText);
        if (currentChar == text[currentText].length) {
            currentChar = 0;
            dynamicText = "";
            endOfWord = true;
            clearInterval(sumarLetra);
            setTimeout(() => {
                currentText++
                if (currentText == text.length) currentText = 0;
                start();
            }, 2000);
        }
    }, 100);
}

start();

$(".seeProjects").click(function () {
    $("html,body").animate({
        scrollTop: $(".projectsDiv").offset().top
    });
});