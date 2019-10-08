function Forest () {
 
   this.bear = new Mecka ("Mecka" , 100);
   this.animals = [];
   this.hunter = new Hunter ("Hunter" , 50 )
   this.denovi = function () {
    this.bear.Jade(this.animals );
    this.hunter.Lovi(this.bear);
}

     this.NoviZivotni = function () {
         var zivotni = 100;
   for (var i = 0; i < zivotni; i++) {
    var randomzivotni = getRandomNumber(1, 2);

    switch (randomzivotni) {
      case 1:
        this.animals.push(new Zajak ("Zajak" , 30 ));
        break;
      case 2:
        this.animals.push(new Srna("Srna" , 20));
        break;
        case 3:
            this.animals.push(new Volk("Volk" , 100));
            break;
      default:
        console.log("Error");
        break;
    }
  }
};
   
}
  
 




