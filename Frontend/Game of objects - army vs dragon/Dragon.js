function Dragon (health, attack, name){
    Combatant.call(this, health, attack, name);
    this.dragonAttackAoe = function (army) {
       
        this.supermokj = 150 ;
       for ( var i = 0 ; i < army.length; i ++) {
           
        //    army[i].setHealth(army[i].getHealth() - this.supermokj) ;

          army[i].setHealth(army[i].getHealth() - this.supermokj);
          
       }
       console.log ( "Dragon Aoe Damage " );
    }
      
      }
    


Dragon.prototype = new Combatant();