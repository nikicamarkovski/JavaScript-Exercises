function Race () {

    this.racers = []; // prazna niza
   
   
    this.StartRacing = function () { // metoda za pocnuvanje na trkata
        
        var chance = 0.5 ; // % sansa za da vrati true 
     for ( var i = 0 ; i < this.racers.length; i ++) {  // for za nizata za vozaci 
    
        if ( calculatePercent(chance)) {  /// ako e true 
            console.log (this.racers[i].getName() + "  crash his car  ");
            this.racers.splice(this.racers[i] , 1) ;  /// kje se trgne od nizata toj so se ucukal 
          break; // da ne gi proveruva drugite uslovi 
          }  
     
    
       
        if ( this.racers[i].getFuel() < 0 || this.racers[i].getTire() < 0) {  // flag za povukuvanje na funkcijata za odenje vo pitstop
            this.GoindToPitStop(); 
            
          console.log ("Fuel " + this.racers[i].getFuel() + "Tire" +  this.racers[i].getTire()+ " " + this.racers[i].getName() + "   pitstop ");
  
        } else {
            this.racers[i].setFuel(this.racers[i].getFuel() -40 ) ; // setiranje na fuel posle sekoj pominat krug
            this.racers[i].setTire(this.racers[i].getTire() - 40 ); // setiranje na gumi posle sekoj pominat krug koj vrti vo glavniot for 
            this.racers[i].setPominati(this.racers[i].getPominati() + 1 );
            console.log ("fuel  " + this.racers[i].getFuel() + " tire "  +  this.racers[i].getTire()+ " " + this.racers[i].getName() );
          
           
        }
        console.log (this.racers[i].getPominati()+ " krug  " + this.racers[i].getName()); 
        
    }
        

  
  
   
        
     }
     this.GoindToPitStop = function () {

        for ( var i = 0 ; i < this.racers.length; i ++) { // for za vrtenje na nizata od vozaci 
           if ( this.racers[i].getFuel() < 0 || this.racers[i].getTire() < 0) { // ako na nekogo od nizata fuelot ili gumite mu se pomalku od 0 kje otide u potstop 
        
           
           
                this.racers[i].setTire(this.racers[i].getTire() + 400 ); // dodava gorivo
                this.racers[i].setFuel(this.racers[i].getFuel() + 400 ); /// menja gumi
                this.racers[i].setPominati(this.racers[i].getPominati() - 1 ); // mu odzima eden krug 
 
             
            }

               
            }
           
               
          
            } 
            
            
            this.FinishRace = function () {

             for ( var i = 0 ; i < this.racers.length ; i ++) { 
              while (this.racers[i].getPominati() <  80 ) {  /// dodeka krugovite se pomalku od 80 kje vrti while
                  return true ;
              }
                     return false ;  /// ako nekoj od vozacite pomine 80 kruga kje vrati false i kje zastane while
            }
            }

            this.populateRacers = function  () {
                var vozaci = 20 ; // kolku vozaci da dodeade
                
                for ( var i = 0 ; i < vozaci ; i ++) {
                    var randomracers = getRandomNumber ( 1 , 3); // random brojka na vozaci
       
               switch (randomracers) { /// dodavanje na vozaci 
       
                   case 1 : 
                   this.racers.push(new Yugo ("Yugo" ,400 , 400 , 0 ));
                   break;
       
                   case 2 : 
                   this.racers.push(new Pegla ("Pegla" , 400 , 400 , 0  ));
                   break;
       
                   case 3 :
       
                   this.racers.push( new Buggati ("Buggati " , 90 ,400 , 0  ));
                   break;
       
                   default :
                   console.log ("error") ;
                   break ;
               }
               }
           }
     
        }
    
       
     

 
  


