$(document).ready(function(){
	$('.flexslider').flexslider({
    animation: "slide"
  	});

  	$('#btn_leerMas_soporte').click(function(){
  		$('#descripcion-soporte').css("display","block").addClass("bounceInLeft");
  		$('#descripcion-ventas').css("display","none");
		$('#descripcion-consultoria').css("display","none");
  	});
  	$('#btn_leerMas_consultoria').click(function(){
  		$('#descripcion-consultoria').css("display","block").addClass("bounceInLeft");
  		$('#descripcion-soporte').css("display","none");
		$('#descripcion-ventas').css("display","none");
  	});
  	$('#btn_leerMas_ventas').click(function(){
  		$('#descripcion-ventas').css("display","block").addClass("bounceInLeft");
  		$('#descripcion-soporte').css("display","none");
		$('#descripcion-consultoria').css("display","none");
  	});
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

});
