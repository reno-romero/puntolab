<<<<<<< HEAD
 
$(document).ready(function(){


	/*      BLOQUE PARA PONER Y ANIMAR PRGRESS BAR *
	window.setTimeout(function(){
			var progressbar = $('#barra'),
			max = progressbar.attr('max'),
			value = progressbar.val(),
			time = 50;

		console.log(time);

		var barra_Progreso = function(){
			value +=1;
			addValue = progressbar.val(value);
		}		
		
		setInterval(function(){
			barra_Progreso();
		}, time);
	},500);

	window.setTimeout(function(){
		//$("#animacion_inicio").hide();
	},3000);*/
	
=======
$(document).ready(function(){
	

	//flexslider
	$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
    ////////////////////

    
>>>>>>> eb288d4e1f0af4662154666941461940d14e8c84
});