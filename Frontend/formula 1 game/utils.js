function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); /// matematicka formula za random broj
  }


  function calculatePercent(percent) {  

    var randomN = getRandomNumber(0, 100);
    var brojac;

    if ((100 - percent) <= randomN) {

        brojac = true;
    }
    else { brojac = false; }

    return brojac;
}