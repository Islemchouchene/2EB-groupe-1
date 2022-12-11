function verification(){
    err = "";
    firstname = document.getElementById("fname").value;
    if(containsNumbers(firstname)){
      err = err +"first name must contain only letters ";
    }
    mail=document.getElementById('mail').value;
    if(!mail.includes('.com')){
      err= err +"mail must include '.com' ";
    }
    phone = document.getElementById('tel').value;
    alert(phone.match(/^[0-9]+$/))
    alert(phone.length)
    if(phone.match(/^[0-9]+$/)== null && phone.length !=8){
      err = err + "phone number must have 8 numeric ";
    }
    if(alert.length > 0){
      alert(err) ;
    }
    alert(err) ;
  
  }
  function containsNumbers(str) {
    return /\d/.test(str);
  }