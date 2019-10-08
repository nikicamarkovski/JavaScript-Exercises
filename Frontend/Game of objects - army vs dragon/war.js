function War(name) {
  this.name = name;
  this.army = [];
  this.dragon = new Dragon(6600, 400, "Drogon");

 
  // var intervalID = window.setInterval(myCallback, 10000);

  // function myCallback() {
  //   document.write("cape")
  // }
 
  this.fight = function() {
    this.armyAttack()
        // setTimeout (this.dragonAttack , 2000);
    //  one = window.setInterval(this.armyAttack() , 3000);  
    //  two = window.setInterval(this.dragonAttack() ,  5000)
   this.dragonAttack();
  
  };

  this.dragonAttack = function() {
    var soldier = this.getRandomAliveSoldier();
    this.dragon.attackEnemy(soldier);
    var randomnumber = getRandomNumber();
    if (  randomnumber === 1 ) {
      this.dragon.attackEnemy(soldier);
    }
    else {
      this.dragon.dragonAttackAoe(this.army);
    }
    document.write("dragon go napadna ")
  };

  this.getRandomAliveSoldier = function() {
    while (true) {
      var randomSolider = getRandomNumber(0, this.army.length - 1);
      if (this.army[randomSolider].isAlive()) {
        return this.army[randomSolider];
      }
    }
  };
 

  this.armyAttack = function() {
   
    for (var i = 0; i < this.army.length; i++) {
      if (!this.dragon.isAlive()) {
        //this.dragon.isAlive() === false
        break;
      }
      if ( this.army[i].getName() === "Berserker") {
        this.army[i].attackEnemy(this.dragon)
        this.army[i].setHealth(this.army[i].getHealth() - this.army[i].getAttack() / 2 );
        console.log (this.army[i].getName() + "  attack enemy for " + this.army[i].getAttack() + " se napadna i samiot sebe i sega ima   " 
        + this.army[i].getHealth() + "  health ")
      
          
      }

      if (this.army[i].isAlive()) {
        this.army[i].attackEnemy(this.dragon);
        console.log ( this.army[i].getName() + "  go napadna Dragonot " + "za " + this.army[i].getAttack())
       
      }
      if (this.army[i].getName() === "Priest") {
       
        var randomhealing = this.getRandomAliveSoldier();
        randomhealing.setHealth(randomhealing.getHealth() + this.army[i].getAttack());
        console.log ("priest izlecil za   " +   this.army[i].getAttack() +  " a go izlecil " + randomhealing.getName());
        document.write("priestot izlecil za  " + this.army[i].getAttack() + " a go izlecil " + randomhealing.getName());
      }

     
    }
   }

  this.findWinner = function() {
    if (this.dragon.isAlive()) {
      console.log(
        "Dragon won with " + this.dragon.getHealth() + " health left"
       
      );
     
    } else {
      console.log(
        "The army won with " + this.findAliveSoldiers() + " soldier left"
      );
   
    }
  };

  this.findAliveSoldiers = function() {
    var counter = 0;
    for (var i = 0; i < this.army.length; i++) {
      if (this.army[i].isAlive()) {
        counter++;
      }
    }
    return counter;
  };

  this.isWarStillGoing = function() {
    return this.dragon.getHealth() > 0 && this.isArmyStillAlive();
  };

  this.isArmyStillAlive = function() {
    for (var i = 0; i < this.army.length; i++) {
      console.log (this.army[i].getHealth());
      if (this.army[i].getHealth() > 0) {
      
        return true;
      }
    }
   
    return false;
  };

  this.populateArmy = function() {
    var numberOfSoliders = getRandomNumber(10, 15);

    for (var i = 0; i < numberOfSoliders; i++) {
      var typeOfSolider = getRandomNumber(1 , 5);
      switch (typeOfSolider) {
        case 1:
          this.army.push(new Warrior(500, 60, "Warrior"));
          break;
        case 2:
          this.army.push(new Wizard(250, 100, "Wizard"));
          break;
        case 3:
          this.army.push(new Archer(200, 80, "Archer"));
          break;
        case 4:
          this.army.push(new Berserker(600, 300, "Berserker"));
          break;
          case 5 :
          this.army.push( new Priest ( 80 , 30 , "Priest"));
          break;  
        default:
          console.log("Error");
          break;
      }
    }
  };
  }

