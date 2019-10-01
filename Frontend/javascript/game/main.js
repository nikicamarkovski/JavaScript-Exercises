function Main () {

    var battle = new Battle();
    battle.populateArmy();
    battle.createDivs()
    battle.setPosition();
    battle.Loop();
    // battle.isArmyStillAlive();
   

   
 
  


    
    console.log (battle);

}


Main();