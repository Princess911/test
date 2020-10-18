var str = "";                                        
        for (var row = 1; row <= 4; row++) {         

            for (var j = 1; j <= 4 - row; j++) {    
                str = str + " "                      
            } 
            for (var i = 1; i <= row; i++) {          
                str = str + "* ";
            }
            str = str + "\n";                        
        }
   
        for (var row = 1; row <= 3; row++) {          

            for (var j = 1; j <= row; j++) {         
                str = str + " " 
            } 
            for (var i = 1; i <= 4 - row; i++) {     
                str = str + "* ";                       
            }
            str = str + "\n";                        
        }
        console.log(str);