
function cifrar ()
{
 
   let textociuser= document.getElementById("textocif");
   let posicion= document.getElementById("posiciondecifrado");
   let respuesta= document.getElementById("resultadocifrar").value;
 
    let texto= [];
    let resultado1= [];
   
    numero=posicion.value;
    const infouser =textociuser.value; 
    
    let asci=infouser.charAt(i).charCodeAt(0);
    for ( var i = 0; i < infouser.length;i++)
    
    {
      if( 64<asci || asci<91){
        texto[i]=((infouser.charAt(i).charCodeAt(0)) - 65 + parseInt(numero))%26 +65;
        resultado1[i] = String.fromCharCode(texto[i]);

      }
      else if(96<asci||asci<123)
      {
         texto[i]=((infouser.charAt(i).charCodeAt(0)) - 97 + parseInt(numero))%26 +97;
         resultado1[i] = String.fromCharCode(texto[i]);

      }
  
     else(65>asci>123)
     {
       resultado1[i]=asci;
        
     }
      
    }
      document.getElementById("resultadocifrar").value= (resultado1[i]); 



    //console.log('cadena2 replace',cadena2.join().replace(/^[, ]+|[, ]+$|[, ]+/g, ""));
    //document.getElementById("resultadocifrar").value=cadena2.join().replace(/^[, ]+|[, ]+$|[, ]+/g, "");   
 } 


