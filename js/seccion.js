$(document).ready(function(){
    
    
  
   
    $('#btn-toggle1').on('click',function(){
        
        
        if(var1==2){
        $('.seccionToggle2').slideToggle();
        var1=0;
        }

       
      
        $('.seccionToggle1').slideToggle();
        if (var1==1){
            var1=0;    
        }
        else 
            var1=1;
        });
    
    $('#btn-toggle2').on('click',function(){
        
        
        
     
        
        
        
        
        if(var1==1){
        $('.seccionToggle1').slideToggle();
            var1=0;
        }

       
        
       
        $('.seccionToggle2').slideToggle();
        
        if (var1==2){
            var1=0;    
        }
        else 
            var1=2;
    });
    
    
    
    
    
     
    var1=0;
   
    
    
   
    
    
    
});