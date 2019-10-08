function OddEven () {
    for ( i = 0; i <= 15; i++) {
    
    if ( i % 2 == 0 ) {
        console.log ( " paren " + i);
    } else {
        console.log ( " neparni " + i)
    }
    }
    }
    OddEven ();



    function broevi () {
        for ( i = 1; i <= 100; i++) {
        
            if ( i % 3 == 0  && i % 5 == 0 ){
                console.log ( " fizzbuzz " + i );
        
            } else if ( i % 3 == 0 ) {
                console.log ( " buzz " + i );
            } else  {
                console.log ( "fizz " + i );
            }
        }
        
        
        }
        broevi ();



        
function armstrong () {
    for ( i = 100 ; i < 1000; i++) {
       var zbir = 0;
         var broj = i;
       while (broj > 0 ){
        zbir += Math.pow((broj % 10), 3);
        broj = Math.floor(broj / 10);
   
    }
   if ( zbir == i ) {
       console.log ( i );
   }
   }
   }
   armstrong () ;





   function summ () {
    var suma = 0;
  
  for ( i = 0 ; i < 50 ; i ++) {
    if ( i % 3 == 0 && i % 5 == 0) {
     suma+=i  ;
     console.log ( suma );
    }
  
  }
  
  }
  
  summ ( );




  function registracija ( hp ) {
    if ( hp < 0 || hp > 0 ) {
    if ( hp <= 85) {
        return 3000; 
    }
     else if (hp >= 86 && hp <= 149 ) {
        return 5000;
    }
     else if ( hp >= 150 ) {
        return 15000;
     }
       
    } else { 
        return " Vnesi brojce ";
    }
    }
    
     var get = registracija ( 9 );
    console.log ( "registracijata cini " + get );



    function getrandom ( min , max ) {
        return   Math.floor ( Math.random()* ( max - min + 1 ) + min);
    }

    function fight ( ) {

        var orc = 720 ;
        
        var footman = 550;
        
        armor1 = 5 ;
        armor2 = 9; 
        
        while ( true ) {
            var damage1 = (getrandom ( 23, 25 ));
            var damage2 = (getrandom ( 18 , 27 ));
          orc-=  damage2   - armor1 ;
          footman -= damage1 -  armor2 ;
          console.log ( " orc  hp " + orc  + " damage = " + damage1 );
        console.log ( " footman hp " + footman + " damage = " + damage2 ) ;
        if ( orc < 0 ) {
        
            console.log ("footman win"  ) ;
           break;
        } else if ( footman < 0 ) {
            console.log ( "orc win "  );
          break;
        }
     }
        
        }
        
        
        fight ();



