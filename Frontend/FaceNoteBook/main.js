function main () {
    var socialnetwork =  new  SocialNetwork ("name" );
    console.log (socialnetwork);
    socialnetwork.populateUsers();
    socialnetwork.PRintAllUsers();
    
    

    for ( var i = 0 ; i <= 50 ; i ++) {

       if ( i % 10 === 0 ) {
        socialnetwork.AddNewUser();
        
       }
    }
}


main ();