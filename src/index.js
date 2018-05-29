

function cipher ()
{
 
   const string =document.getElementById("stringcipher").value; 
   let posicion= document.getElementById("posiciondecifrado");
   let texto= [];
   let resultado= [];
   let cipher="";
  
   let numero=parseInt(posicion.value);
   let encode;  
    for ( var i=0; i<string .length; i++)
    {
      encode = string .charAt(i).charCodeAt(0);
      if( 64<encode && encode<91) {
        texto[i] = (encode - 65 + numero) % 26 + 65;
      } else if(96<encode&&encode<123) {
        texto[i]=(encode - 97 + numero)%26 +97;
      }else if(numero==null){
      cipher="no pusiste un numero en el cuadro posicion";}
      else {
        texto[i]=encode;
      }
    }
    
    for ( var i=0; i<texto.length; i++) {
      resultado[i]=String.fromCharCode(texto[i]);
    }
  
    cipher=resultado.join().replace(/^[,]+|[,]+$|[,]+/g, "");// ver coma
    document.getElementById("cipher").value=cipher; 
 } 



 function decipher ()
 {
  
    const string =document.getElementById("stringdecipher").value; 
    let posicion= document.getElementById("posiciondedescifrado");
    let texto= [];
    let resultado= [];
    let decipher="";
   
    let numero=parseInt(posicion.value);
    let decode;
    
     for ( var i=0; i<string .length; i++)
     {

       decode = string .charAt(i).charCodeAt(0);
       if( 64<decode && decode<91) {
         texto[i] = (decode - 65 - numero +26) % 26 + 65;
       } else if(96<decode&&decode<123) {
         texto[i]=(decode - 97 - numero +26)%26 +97;
       asci = infouser.charAt(i).charCodeAt(0);
        if( 64<asci && asci<91) {
       }else if(numero==null){
       decipher="no pusiste un numero en el cuadro posicion";
       }else {
         texto[i]=decode;
       }
     }
     
     for ( var i=0; i<texto.length; i++) {
       resultado[i]=String.fromCharCode(texto[i]);
     }
   
     decipher=resultado.join().replace(/^[,]+|[,]+$|[,]+/g, "");// ver coma
     document.getElementById("decipher").value=decipher; 
    }}
