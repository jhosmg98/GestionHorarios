var MateriaActual = [];

function elegirSemestre(semestre){
  
  document.getElementById("materia").innerHTML = ""; 
  document.getElementById("profesor").innerHTML = "";
  document.getElementById("seccion").innerHTML = "";
  document.getElementById("hora").innerHTML = "";
  var materiaSemestre = [];
  switch (semestre) {    
    case "Primero": { 
          cargarMaterias(materiaSemestre,"01SE");          
          console.log(materiaSemestre);
          break;}
    case "Segundo":{ 
          cargarMaterias(materiaSemestre,"02SE");          
          console.log(materiaSemestre);
          break;}
    case "Tercero":{ 
          cargarMaterias(materiaSemestre,"03SE");          
          console.log(materiaSemestre);
          break;}
    case "Cuarto":{ 
          cargarMaterias(materiaSemestre,"04SE");          
          console.log(materiaSemestre);
          break;}
    case "Quinto":{ 
          cargarMaterias(materiaSemestre,"05SE");          
          console.log(materiaSemestre);
          break;}
    case "Sexto":{ 
          cargarMaterias(materiaSemestre,"06SE");          
          console.log(materiaSemestre);
          break;}
    case "Septimo":{ 
          cargarMaterias(materiaSemestre,"07SE");          
          console.log(materiaSemestre);
          break;}
    case "Octavo":{ 
          cargarMaterias(materiaSemestre,"08SE");          
          console.log(materiaSemestre);
          break;}
    case "Noveno":{ 
          cargarMaterias(materiaSemestre,"09SE");          
          console.log(materiaSemestre);
          break;}
    case "Decimo":{ 
          cargarMaterias(materiaSemestre,"10SE");          
          console.log(materiaSemestre);
          break;}
    default: $("#materia").append('<option class="ElementoListado" selected="selected">Materia</option>');
      break;
  }
  for(var numeMateria = 0; numeMateria < materiaSemestre.length;numeMateria++)
    $("#materia").append('<option class="ElementoListado" selected="selected">'+materiaSemestre[numeMateria]+'</option>');

    $("#materia").append('<option class="ElementoListado" selected="selected">Materia</option>');
    $("#profesor").append('<option class="ElementoListado" selected="selected">Profesor</option>');  
    $("#seccion").append('<option class="ElementoListado" selected="selected">Sección</option>');
    $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>');
     
  console.log(informatica.length);
  console.log(informatica.length);
}
function cargarMaterias(materiaSemestre,numeroSemestre){
  for(var i = 0; i < informatica.length; i++){
    if(informatica[i].semester === numeroSemestre){         
      var materiaEncontrada = informatica[i].subject;
      if(materiaSemestre.length == 0){
        materiaSemestre.push(materiaEncontrada);
      }else{
        var numeroDeMAterias = 0;
        for(var j = 0; j < materiaSemestre.length; j++){         
          if(materiaEncontrada === materiaSemestre[j]){
            continue;
          }else{
            numeroDeMAterias++;
          }
        }
        if(numeroDeMAterias >= materiaSemestre.length){
          materiaSemestre.push(materiaEncontrada);
        }
      }             
    }            
  }  
}


function seleccionDeMateria(nombreMateria){
  var profesores = [];
  document.getElementById("profesor").innerHTML = ""; 
  document.getElementById("seccion").innerHTML = "";
  document.getElementById("hora").innerHTML = "";
  
  cargarProfesores(profesores,nombreMateria);
  
  for(var i = 0; i < profesores.length; i++){
    if(profesores[i] === "Por Asignar"){     
      continue;
    }else{
      $("#profesor").append('<option class="ElementoListado" selected="selected">'+profesores[i]+'</option>');  
    }
  }
  $("#profesor").append('<option class="ElementoListado" selected="selected">Profesor</option>'); 
  $("#seccion").append('<option class="ElementoListado" selected="selected">Sección</option>');  
  $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>'); 
}
function cargarProfesores(profesores,materia){
  
  for(var i = 0; i < informatica.length; i++){
    if(informatica[i].subject === materia){         
      var profesorEncontrado = informatica[i].professor;
      if(profesores.length == 0){
       profesores.push(profesorEncontrado);
      }else{
        var numeroDeProfesor= 0;
        for(var j = 0; j < profesores.length; j++){         
          if(profesorEncontrado ===  profesores[j]){
            continue;
          }else{
            numeroDeProfesor++;
          }
        }
        if(numeroDeProfesor >= profesores.length){
          profesores.push(profesorEncontrado);
        }
      }             
    }            
  }
}

function seleccionarProfesor(nombreProfesor,nombreMateria){
  var seccionList = [];
  document.getElementById("seccion").innerHTML = "";
  document.getElementById("hora").innerHTML = "";
  cargarSeccion(seccionList,nombreProfesor,nombreMateria);

  for(var i = 0; i < seccionList.length; i++){
    $("#seccion").append('<option class="ElementoListado" selected="selected">'+seccionList[i]+'</option>');
  }

  $("#seccion").append('<option class="ElementoListado" selected="selected">Sección</option>');
  $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>'); 
}
function cargarSeccion(seccionList,nombreProfesor,nombreMateria){
  for(var i = 0; i < informatica.length; i++){
      if(nombreMateria === informatica[i].subject  && nombreProfesor == informatica[i].professor)
        seccionList.push(informatica[i].section);      
  }
}

function seleccionarSeccion(nombreSeccion,nombreProfesor,nombreMateria){
  var horaList = [];
  cargarHoras(horaList,nombreSeccion,nombreProfesor,nombreMateria);
  document.getElementById("hora").innerHTML = "";
  $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>');

  for(var i = 0; i < horaList.length;i++){
    switch (i) {
      case 0:{ 
      if(horaList[i] != null) { 
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>'); 
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
      }     
        break;}
      case 1:{
      if(horaList[i] != null){  
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>'); 
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]); 
      }   
        break;}
      case 2:{
      if(horaList[i] != null){     
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>');
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]); 
      }      
        break;}
      case 3:{
      if(horaList[i] != null){     
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>');
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
      }      
        break;}
      case 4:{
      if(horaList[i] != null){     
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>');
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
      }       
        break;}
    
      default:
        break;
    }
  }
  
  if(horaList[0] != null){
    if(horaList[0].indexOf("Lun") >= 0)
    console.log("Va pal lunes");
    else
    console.log("nada");
  }
}
function cargarHoras(horaList,nombreSeccion,nombreProfesor,nombreMateria){
  for(var i = 0; i < informatica.length; i++){
    if(nombreMateria === informatica[i].subject  && nombreProfesor === informatica[i].professor && nombreSeccion === informatica[i].section){
      if(informatica[i].mon != null)
        horaList.push("Lun "+(informatica[i].mon).replace("_"," ") );
      else
        horaList.push( informatica[i].mon);

      if((informatica[i].tue) != null)
        horaList.push("Mar "+ (informatica[i].tue).replace("_"," ") );
      else
        horaList.push(informatica[i].tue);

      if((informatica[i].wed) != null)
        horaList.push("Mie "+ (informatica[i].wed).replace("_"," ") );
      else
        horaList.push(informatica[i].wed);

      if((informatica[i].thu) != null)
        horaList.push("Jue "+ (informatica[i].thu).replace("_"," ") );
      else
        horaList.push(informatica[i].thu);

      if((informatica[i].fri) != null)
        horaList.push("Vie "+ (informatica[i].fri).replace("_"," ") );
      else
        horaList.push(informatica[i].fri);      
       
        break;     
      }              
  }
}


function prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,dia,horaInicio,horaFin,salon){
  var materiaObject = {
    "nombre":nombreMateria,
    "profesor":nombreProfesor,
    "seccion":nombreSeccion,
    "dia":dia,
    "inicio":horaInicio,
    "fin":horaFin,
    "salon":salon
  };
  MateriaActual.push(materiaObject);
}

function cargarMateriaEnTabla(){
  for(var i = 0; i < MateriaActual.length;i++){    
    switch (MateriaActual[i].dia) {
      case "Lun":{ buscarHora(0,MateriaActual[i].inicio,MateriaActual[i].fin,i); break;}
      case "Mar":{ buscarHora(1,MateriaActual[i].inicio,MateriaActual[i].fin,i); break;}
      case "Mie":{ buscarHora(2,MateriaActual[i].inicio,MateriaActual[i].fin,i); break;}
      case "Jue":{ buscarHora(3,MateriaActual[i].inicio,MateriaActual[i].fin,i); break;}
      case "Vie":{ buscarHora(4,MateriaActual[i].inicio,MateriaActual[i].fin,i); break;}  
      default:
        break;
    }    
  }  
}

function buscarHora(dia,inicio,fin,indice){ 
  
  horaInicio = ""; 
  horaFinal  = "";
  if(inicio.indexOf("07:00") >= 0){ horaInicio = ".Am7";}
  if(inicio.indexOf("08:00") >= 0){ horaInicio = ".Am8"; }
  if(inicio.indexOf("09:00") >= 0){ horaInicio = ".Am9";}
  if(inicio.indexOf("10:00") >= 0){ horaInicio = ".Am10";}
  if(inicio.indexOf("11:00") >= 0){ horaInicio = ".Am11";}
  if(inicio.indexOf("12:00") >= 0){ horaInicio = ".Pm12";}
  if(inicio.indexOf("13:00") >= 0){ horaInicio = ".Pm1";}
  if(inicio.indexOf("14:00") >= 0){ horaInicio = ".Pm2";}
  if(inicio.indexOf("15:00") >= 0){ horaInicio = ".Pm3";}
  if(inicio.indexOf("16:00") >= 0){ horaInicio = ".Pm4";}
  if(inicio.indexOf("17:00") >= 0){ horaInicio = ".Pm5";}
  if(inicio.indexOf("18:00") >= 0){ horaInicio = ".Pm6";}
  if(inicio.indexOf("19:00") >= 0){ horaInicio = ".Pm7";}
  if(inicio.indexOf("20:00") >= 0){ horaInicio = ".Pm8";}

  if(fin.indexOf("07:50") >= 0){ horaFinal = ".Am7";}
  if(fin.indexOf("08:50") >= 0){ horaFinal = ".Am8"; }
  if(fin.indexOf("09:50") >= 0){ horaFinal = ".Am9";}
  if(fin.indexOf("10:50") >= 0){ horaFinal = ".Am10";}
  if(fin.indexOf("11:50") >= 0){ horaFinal = ".Am11";}
  if(fin.indexOf("12:50") >= 0){ horaFinal = ".Pm12";}
  if(fin.indexOf("13:50") >= 0){ horaFinal = ".Pm1";}
  if(fin.indexOf("14:50") >= 0){ horaFinal = ".Pm2";}
  if(fin.indexOf("15:50") >= 0){ horaFinal = ".Pm3";}
  if(fin.indexOf("16:50") >= 0){ horaFinal = ".Pm4";}
  if(fin.indexOf("17:50") >= 0){ horaFinal = ".Pm5";}
  if(fin.indexOf("18:50") >= 0){ horaFinal = ".Pm6";}
  if(fin.indexOf("19:50") >= 0){ horaFinal = ".Pm7";}
  if(fin.indexOf("20:50") >= 0){ horaFinal = ".Pm8";}
  console.log(horaInicio+" "+horaFinal);
  if(horaFinal === horaInicio){
    cargarEnUnEspacio(dia,horaInicio,indice);
  }else{
    cargarEnMas(dia,horaInicio,horaFinal,indice);

  }

  

}
function cargarEnUnEspacio(dia,inicio,indice){
  var diaSem = dia;
  var num = 0;
  $(inicio+" td").each(function(num){
    if(num == parseInt(diaSem)){
      $(this).append("<p>Materia:"+MateriaActual[indice].nombre+"<br>Profesor:"+MateriaActual[indice].profesor+"<br>Seccion:"+MateriaActual[indice].seccion+"</p>");
      //document.getElementById((inicio).replace(".","")+num).innerHTML = 'Materia';
    }   
    num++;
  });
}
function cargarEnMas(dia,inicio,fin,indice){
  var diaSem = dia;
  var num = 0;
  $(inicio+" td").each(function(num){
    console.log(num + " " + diaSem);
    if(num == parseInt(diaSem)){
      $(this).append("<p>Materia:"+MateriaActual[indice].nombre+"<br>Profesor:"+MateriaActual[indice].profesor+"<br>Seccion:"+MateriaActual[indice].seccion+"</p>");
      //document.getElementById( (inicio).replace(".","") +num).innerHTML = 'Materia';
    }   
    num++;
  });

  $(fin+" td").each(function(num){
    if(num == parseInt(diaSem)){
      $(this).append("<p>Materia:"+MateriaActual[indice].nombre+"<br>Profesor:"+MateriaActual[indice].profesor+"<br>Seccion:"+MateriaActual[indice].seccion+"</p>");
      //document.getElementById( (fin).replace(".","")+num).innerHTML = 'Materia';
    }  
    num++;
  });
}
