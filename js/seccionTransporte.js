
    $(document).ready(function(){
		$('#btn-toggle3').click(function () {
        
        
        
        $('.lista').removeClass('opened');
        $('.lista').addClass('close');
        
        
        setTimeout ("$('.li1').removeClass('li1opened');", 1000);
        $('.li2').addClass('li2notselected');
        
        
        $('.li1').addClass('li1closed');
        setTimeout ("$('.galeria2').addClass('fotosopen');", 1000);
        setTimeout ("$('.button').removeClass('desactive');", 1000);
        $('.button').addClass('active');
        
        
        
    });
    
    $('#btn-toggle4').click(function () {
        
        
        
        $('.lista').removeClass('opened');
        $('.lista').addClass('close');
        
        setTimeout ("$('.li2').removeClass('li2opened');", 1000);
        $('.li1').addClass('li1notselected');
      
        
        $('.li2').addClass('li2closed');
        setTimeout ("$('.galeria1').addClass('fotosopen');", 1000);
        setTimeout ("$('.button').removeClass('desactive');", 1000);
        $('.button').addClass('active');
        
        
        
    });
    
    $('#btn-toggle5').click(function () {
        
        
        
        $('.lista5').removeClass('opened');
        $('.lista5').addClass('close');
        
        setTimeout ("$('.li5').removeClass('li5opened');", 1000);
        
        
        
        $('.li5').addClass('li5closed');
        setTimeout ("$('.galeria5').addClass('fotosopen');", 1000);
        $('.Desaparecer').addClass('Eliminar');
        setTimeout ("$('.BotonInfo').removeClass('desactive');", 1000);
        $('.BotonInfo').addClass('activo');
        
        
        
    });
    
    
    $('.button').click(function(){
        $('.galeria1').removeClass('fotosopen');
        $('.galeria1').addClass('fotosclose');
        $('.galeria2').removeClass('fotosopen');
        $('.galeria2').addClass('fotosclose');
        $('.galeria3').removeClass('fotosopen');
        $('.galeria3').addClass('fotosclose');
        $('.galeria4').removeClass('fotosopen');
        $('.galeria4').addClass('fotosclose');
        
        
        setTimeout ("$('.li1').removeClass('li1closed');", 1000);
        setTimeout ("$('.li2').removeClass('li2closed');", 1000);
        setTimeout ("$('.li3').removeClass('li3closed');", 1000);
        setTimeout ("$('.li4').removeClass('li4closed');", 1000);
        
        $('.li2').addClass('li2opened');
        $('.li1').addClass('li1opened');
        $('.li3').addClass('li3opened');
        $('.li4').addClass('li4opened');
        
        $('.li1').removeClass('li1notselected');
        $('.li2').removeClass('li2notselected');
        $('.li3').removeClass('li3notselected');
        $('.li4').removeClass('li4notselected');
        
        
        setTimeout ("$('.lista').removeClass('not');", 2000);
        $('.button').removeClass('active');
        $('.button').addClass('desactive');
       
        $('.lista').addClass('close');
        setTimeout("$('.lista').addClass('opened');",50);
        setTimeout("$('.lista').removeClass('close');",50);
        
    });
    
    $('.BotonInfo').click(function(){
        
        $('.galeria5').removeClass('fotosopen');
        $('.galeria5').addClass('fotosclose');
        
        
        setTimeout ("$('.li5').removeClass('li5closed');", 1000);
        
        $('.li5').addClass('li5opened');
        
        $('.li5').removeClass('li5notselected');
        
        setTimeout ("$('.lista5').removeClass('not');", 2000);
        
        $('.Desaparecer').removeClass('Eliminar');
        $('.BotonInfo').removeClass('active');
        $('.BotonInfo').addClass('desactive');
        $('.lista').addClass('close');
        setTimeout("$('.lista5').addClass('opened');",50);
        setTimeout("$('.lista5').removeClass('close');",50);
        
    });
		
	});	