


    var inputText = document.getElementById("txt");
        var array ;
        var some = [];
        var Delete = document.getElementById("Delete"); 
         var add = document.getElementById("Add");
         var list = document.getElementById("list");
         add.addEventListener("click" , () => {
          
           if ( inputText.value == "") {
               alert("vnesete tekst");
           }
          var div = document.createElement("div");
          list.appendChild(div);
         
          div.innerHTML = inputText.value;
          inputText.value = "";
      
         some.push(div);
         for (var i = 0 ; i < some.length; i++) {
            div.id = i;
         
         
            }

            div.addEventListener ("click" , (event) => {
             
                var get = event.target;
                array = get ;
                
                inputText.value = get.innerHTML;
                get.style.backgroundColor = "red";
                console.log(array.innerHTML);
             });
            
            });

         Delete.addEventListener("click" ,  (event)  => {
               var divToDelete = array ;
            if (divToDelete !== undefined) {
                list.removeChild(divToDelete);
                divToDelete.innerHTML = "";
                inputText.value = "";
                array = undefined;
             } else {
               alert ("selektraj");
             }
             });

         var edit = document.getElementById("Edit");

         edit.addEventListener ("click" , () => {
            
            var DivToedid = array;
            if (DivToedid !== undefined) {
                DivToedid.innerHTML = inputText.value;
                inputText.value = "";

            } else {
                alert("selektiraj");
            }
           
         })



         
