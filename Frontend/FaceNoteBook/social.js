function SocialNetwork ( name  ) {
    this.name = name ;
    this.users = []; 

    this.populateUsers = function () {
     
        var populate = 50 ;
        for ( var i = 0 ; i < populate ; i ++) {
            var newpopulate = new User ("user" , i + 1 , "Bio"  );

           newpopulate.populateAlbum();
           newpopulate.profile () ;
           this.users.push(newpopulate);
          //  console.log (newpopulate.populateAlbum())
         
          // var image = document.createElement ("IMG") ;
          // image.innerHTML = this.users[i].newpopulate ; 
          // root.appendChild(image);
   }

  
}


      
            
           
            
            
        
        
        
    
    this.PRintAllUsers = function () {
        var rootId = document.getElementById ('root') ;
        
        for ( var i = 0 ; i <  this.users.length ; i ++) {
            var div = document.createElement ("div");
            div.className = "class" + i ;
          
           div.innerHTML = this.users[i].getFirstName() +" " + this.users[i].getLastName() + " " + this.users[i].getAboutMe() ;
           
            rootId.appendChild(div);
           
         
            var image = document.createElement ("IMG") ;
            image.id = "one" ;
            console.log (image);  
            // var getimage = document.getElementById("one");
                  
          image.src = this.users[i].profile() ; 
            
          // image.src = this.users[i].populateAlbum();
          rootId.appendChild(image);
         
          image.addEventListener("click" , event => {
          
            event.target.style.transform = "scale(1.2)";
      
          })
               
            }
            
        }
            
           
            

            
            
        
        
    
      this.AddNewUser = function () {
         var newusers = new User ("user" , this.users.length + 1,  "blablabla"  );
        this.users.push(newusers);
    
      }
      

    }
