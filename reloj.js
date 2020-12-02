(function(){

    var actualizarHora= function(){
        var fecha = new Date(),
            horas=fecha.getHours(),
            minutos=fecha.getMinutes(),
            segundos=fecha.getSeconds(),
            diaSemana=fecha.getDay(),
            dia=fecha.getDate(),
            mes=fecha.getMonth();
            year=fecha.getFullYear(),
            ampm;

     var pHoras= document.getElementById('horas'),
        pMinutos= document.getElementById('minutos'),
        pSegundos= document.getElementById('segundos'),
        pDiaSemana= document.getElementById('diaSemana'),
        pDia= document.getElementById('dia'),
        pMes= document.getElementById('mes'),
        pYear= document.getElementById('year'),
        pAMPM= document.getElementById('ampm');

// Obtenemos el dia se la semana y lo mostramos
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];
            // Obtenemos el dia del mes
        pDia.textContent=dia;


// Obtenemos el Mes y año y lo mostramos
        var meses= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent= meses[mes];
        pYear.textContent=year;

      // Cambiamos las hora de 24 a 12 horas y establecemos si es AM o PM

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		// Detectamos cuando sean las 0 AM y transformamos a 12 AM
		if (horas == 0 ){
			horas = 12;
		}

        pHoras.textContent=horas;
        pAMPM.textContent = ampm;

        pMinutos.textContent=minutos;

        if(minutos<10){
            minutos="0" + minutos;
        };

        if(segundos<10){
            segundos= "0"+segundos;
        }


        pSegundos.textContent=segundos;



};
    

    actualizarHora();
    var intervalo= setInterval(actualizarHora,1000);


}())