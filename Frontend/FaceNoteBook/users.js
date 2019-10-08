function User (firstName , lastName, aboutMe ) {
    this.firstName = firstName ;
    this.lastName = lastName;
    this.aboutMe = aboutMe ;
    this.album = [];
    this.getFirstName = function () {

        return this.firstName
    }

    this.setFirstName = function (firstName) {

         this.firstName = firstName ;
    }


    this.getLastName = function () {

        return this.lastName

    }

    this.setLastName = function (lastName) {

         this.lastName = lastName ;
    }


    this.getAboutMe = function () {

        return this.aboutMe
        
    }

    this.setAboutMe = function (aboutMe) {

         this.aboutMe = aboutMe ;
    }

    this.populateAlbum = function () {
    var numberofpicture = getRandomNumber( 1 , 5) ;
    for ( var i = 0 ; i < numberofpicture ; i ++) {
        var random = getRandomNumber ( 0 , pictureArray.length -1 ); 
       var novalbum = new Slika (pictureArray[random] , false  );
        this.album.push(novalbum);
        
  
    
    }
   console.log ()
    }
    this.profile =  function () {

     var randomprofile = getRandomNumber ( 0 , this.album.length - 1  );
      var get =  this.album[randomprofile] ;
      get.setisProfilePicture(true);
        
        //        var image = document.createElement ("IMG") ;
        //   image.innerHTML = get ; 
        //   root.appendChild(image);
    
          return get.url
    
     } ;
    
       
      }
        
      

     
    

  


    

   