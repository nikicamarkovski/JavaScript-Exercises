function Days () {
    var forest = new Forest ();
    forest.NoviZivotni();
   
    console.log (forest);
    
    for ( i = 1 ;  i <= 30 ; i ++) {
    forest.denovi();
        console.log ("day   " + i);
    }
    console.log (forest);


}

Days () ;
