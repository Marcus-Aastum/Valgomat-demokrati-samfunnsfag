let sporsmal = [
    'Bør abort være tillat?',
    'Synes du det er rettferdig at folk som tjener mer penger, betaler mer skatt?',
    'Bør staten investere mer i utdanning og skole?',
    'Bør det være gratis høyere utdanning?',
    'Bør det være mer satsing på kollektivtransport?',
    'Bør det være mer statlig støtte til småbedrifter og entreprenørskap?',
    'Bør det være mer satsing på fornybar energi?',
    'Bør det være økt satsing på skolemat for å sikre sunn ernæring for skolebarn?'

]

const antallSporsmal = sporsmal.length;
let randomSporsmal = 0;
let sporsmalNummer = 0;
let tempsvar = 0;
let svar = 0;
let prevButton = null;
let apSinScore = sporsmal.length * 4;

function button(button) {
    if (prevButton != null) {
        prevButton.style.backgroundColor = "white";
    }
    button.style.backgroundColor = "green";
    prevButton = button;
    tempsvar = button.value;
    console.log(tempsvar);
};

console.log(sporsmal);

function nesteSporsmal(button) {

    randomSporsmal = Math.floor(Math.random() * sporsmal.length);
    if (prevButton != null) {
        prevButton.style.backgroundColor = "white";
    }
    prevButton = button;

    if (sporsmal.length > 0) {
        sporsmalNummer++;
        document.getElementById("titleSporsmal").innerHTML = 'Spørsmål ' + sporsmalNummer + '/' + antallSporsmal;
        document.getElementById("sporsmal").innerHTML = sporsmal[randomSporsmal];
        document.getElementById('antallSporsmal').innerHTML = 'Spørsmål ' + sporsmalNummer + '/' + antallSporsmal;
    } else {
        document.getElementById("sporsmal").innerHTML = 'Du har svart på alle spørsmålene! Du blir videresent når vi har regnet sammen svarene dine.';
        document.getElementById('antallSporsmal').innerHTML = 'Spørsmål ' + sporsmalNummer + '/' + antallSporsmal;
        document.getElementsByClassName('buttonDiv')[0].remove();

        //wait 5 seconds before redirecting
        setTimeout(function () {

         window.location.href = ("./svar.html");

        }, 5000);
    }

    svar += parseInt(tempsvar);
    console.log(svar);
    console.log('test')

    sporsmal.splice(randomSporsmal, 1);
    localStorage.setItem("lagretSvar", svar)
};

function svarSide() {
    svar = localStorage.getItem("lagretSvar")
    console.log(svar)
     let enighet = svar / apSinScore * 100;
    
     document.getElementById('prosentEnighet').innerHTML = 'Du er ' + enighet + '% enig med Arbeiderpartiet';

     console.log(enighet);

};
document.addEventListener("DOMContentLoaded", function () {
    // Call your functions here once the DOM is fully loaded
    if(window.location.pathname == "/Main/HTML/valgomat.html" ){
        nesteSporsmal();

    }
    else if(window.location.pathname == "/Main/HTML/svar.html"){
        svarSide();
    }
    console.log("loaded")
});
