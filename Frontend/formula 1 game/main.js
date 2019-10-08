function Main () { // glavna funkcija 


    var race = new Race() ; // nov objekt od race
    race.populateRacers(); // povikuvanje na funkcija za dodavanje vozaci
 
   while ( race.FinishRace() ) { // dodeka finish race e true kje vrti while
    race.StartRacing(); // ako finish race vrati false togas startracing nema da se izvrsi 

   }
    console.log (race );

    
      
        
}




Main () ; // povikuvanje na funkcija



