function Animal (name , mass) {
 this.name = name ;
 this.mass = mass;
 this.getName = function() {
    return this.name;
  };

  this.getMass = function() {
    return this.mass;
  };

  this.setName = function(name) {
    this.name = name;
  };
  this.setMass = function(mass) {
    this.mass = mass;
  };
}

function Zajak (name , mass ){
    Animal.call(this, name , mass);
}

Zajak.prototype = new Animal();


function Srna ( name , mass) {

    Animal.call (this , name , mass) ;
}

Srna.prototype = new Animal () ;

function Mecka ( name , mass) {
    Animal.call (this, name , mass) ;

    
    this.Jade = function (Animal ) {
        var nekoezivotno = getRandomNumber( 0 , Animal.length - 1  );
        if ( Animal[nekoezivotno].getName() !== "Volk") {
           
         console.log(Animal[nekoezivotno].getMass())
        this.setMass(this.getMass() + Animal[nekoezivotno].getMass() / 3);
        console.log (Animal[nekoezivotno].getName());
      
        } else {
              this.setMass(this.getMass() - this.getMass() * 0.1 + Animal[nekomezivonto].getMass() /2 )
         }
        
         Animal.splice(nekoezivotno , 1) ;
        
   
        }
    }
Mecka.prototype = new Animal () ;

function Volk ( name , mass) {

    Animal.call (this, name , mass) ;

}
Volk.prototype = new Animal () ;


function Hunter (name , mass) {
  
Animal.call (this, name , mass) ;
this.Lovi = function (mecka) {

 var sansa  = 10 ; 
  
  if ( calculatePercent(sansa )) {
   mecka.setMass(mecka.getMass() / 2  )
   console.log("hunter kill the bear" + mecka.getMass());
  }


}

}


Hunter.prototype = new Animal () 
