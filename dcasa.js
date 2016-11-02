function validar(formulario){


function valpalabra(palabra){

 var checkOK = "ABCDEFGHIJKLMN�OPQRSTUVWXYZ�����" + "abcdefghijklmn�opqrstuvwxyz����� ";
  var checkStr = palabra;
  var allValid = true;
  for (i = 0; i < checkStr.length; i++) {
    ch = checkStr.charAt(i);
    for (j = 0; j < checkOK.length; j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length) {
      allValid = false;
      break;
    }
  }
return allValid;
  }

  function valnum(palabra){

  var checkOK = "0123456789";
  var checkStr = palabra;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0; i < checkStr.length; i++) {
    ch = checkStr.charAt(i);
    for (j = 0; j < checkOK.length; j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length) {
      allValid = false;
      break;
    }
    allNum += ch;
  }

 return allValid;

  }
function valEmail(valor){
    re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
    if(!re.exec(valor))    {
        return false;
    }else{
        return true;
    }
}



 if (formulario.nombre.value.length < 4) {
    alert("El nombre debe contener por lo menos 4 caracteres");
    formulario.nombre.focus();
    return false;
  }else{
  var ok=valpalabra(formulario.nombre.value)
  if (!ok){alert("El nombre solo puede tener letras");
    formulario.nombre.focus();
  return false;
  }
  }

 if (formulario.apellido.value.length < 4) {
    alert("El apellido debe contener por lo menos 4 caracteres");
    formulario.apellido.focus();
    return false;
  }else{
  var ok=valpalabra(formulario.apellido.value)
  if (!ok){alert("El apellido solo puede tener letras");
    formulario.apellido.focus();
  return false;
  }
  }
 if (formulario.cedula.value.length != 13) {
    alert("El ID debe constar de 13 digitos numericos ejemplo: 1504199500026");
    formulario.cedula.focus();
    return false;
  }else{
  var ok=valnum(formulario.cedula.value)
  if (!ok){alert("El ID debe constar de Digitos Enteros ejemplo: 12345678");
    formulario.cedula.focus();
  return false;
  }
  }
if (formulario.edad.value.length !=2 ) {
    alert("La edad debe contener al menos 1 Digito ejemplo: 9");
    formulario.edad.focus();
    return false;
  }else{
  var ok=valnum(formulario.cedula.value)
  if (!ok){alert("La edad debe constar de Digitos Enteros ejemplo: 17");
    formulario.edad.focus();
  return false;
  }
  }

if(parseInt(formulario.edad.value) < 10 || parseInt(formulario.edad.value) >100){
alert("La edad no puede ser menos que 10 ni mayor a 100");
    formulario.edad.focus();
  return false;
}

 if (formulario.sexo.selectedIndex==0){
         alert("Debes elegir un género.")
         formulario.sexo.focus()
         return false;
}

if (formulario.email.value.length < 10) {
    alert("Ingrese un email valido ejemplo: wyff2011@hotmail.com");
    formulario.email.focus();
    return false;
  }else{
  var ok=valEmail(formulario.email.value)
  if (!ok){alert("Ingrese un email valido ejemplo: wyff2011@hotmail.com");
    formulario.email.focus();
  return false;
  }
  }
  if (formulario.confemail.value.length < 10) {
    alert("Ingrese un email valido ejemplo: wyff2011@hotmail.com");
    formulario.confemail.focus();
    return false;
  }else{
  var ok=valEmail(formulario.confemail.value)
  if (!ok){alert("Ingrese un email valido ejemplo: wyff2011@hotmail.com");
    formulario.confemail.focus();
  return false;
  }
  }
  if(!(formulario.email.value==formulario.confemail.value)){
  alert("Los correos deben coincidir");
    formulario.email.focus();
  return false;
    }




 if (formulario.celular.value.length !=8) {
    alert("El número de teléfono debe constar de 8 números");
    formulario.celular.focus();
    return false;
  }else{
  var ok=valnum(formulario.cedula.value)
  if (!ok){alert("El numero de telefono debe constar de Digitos Enteros ejemplo ejemplo: 22334455");
    formulario.celular.focus();
  return false;
  }
}
}
