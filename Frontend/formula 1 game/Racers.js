function Racers (name , fuel , tire , pominati ) { // konstruktor 
    this.name = name ;
    this.fuel = fuel;
    this.tire = tire ;
    this.pominati = pominati; 
  

    this.getFuel = function () {

        return this.fuel; // geter na fuel
    }
    this.setFuel = function (fuel) {

        this.fuel = fuel;  // seter na fuel
    }

    this.getTire = function () {

        return this.tire;
    }
    this.setTire = function (tire) {

        this.tire = tire; 
    }
    this.getName = function () {
    
    return this.name ;

}
this.getPominati= function () {
    return this.pominati
}

this.setPominati = function (pominati) {
    this.pominati = pominati; 
}


    
    
}


function Yugo (name , fuel , tire , pominati ) {

Racers.call (this, name , fuel , tire , pominati ); // povikuvanje na konstruktorot od racers


}

Yugo.prototype = new Racers () ; // nov objekt od racers i naslednik na site negovi parametri kje bide yugo


function Pegla (name ,  fuel , tire , pominati ) {

    Racers.call(this ,name , fuel , tire , pominati  );
}

Yugo.prototype = new Racers () ;


function Buggati ( name , fuel , tire , pominati  ) {

    Racers.call(this, name ,  fuel , tire , pominati) ;
}
Buggati.prototype = new Racers () ;
