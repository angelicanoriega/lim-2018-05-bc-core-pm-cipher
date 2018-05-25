
function cifrar ()
{
 
   let textociuser= document.getElementById("textocif");
   let posicion= document.getElementById("posiciondecifrado");
   let respuesta= document.getElementById("resultadocifrar").value;
 
    let texto= [];
    let resultado1= [];
    let resultadostring="";
   
    numero=posicion.value;
    const infouser =textociuser.value; 
    
    let asci;
    for ( var i=0; i<infouser.length; i++)
    {
      asci = infouser.charAt(i).charCodeAt(0);
      if( 64<asci && asci<91) {
        texto[i] = (asci - 65 + parseInt(numero)) % 26 + 65;
      } else if(96<asci&&asci<123) {
        texto[i]=(asci - 97 + parseInt(numero))%26 +97;
        //resultado1[i] = String.fromCharCode(texto[i]);
      } else {
        texto[i]=asci;
      }
    }
    //console.log("texto",texto)
    for ( var i=0; i<texto.length; i++) {
      resultado1[i]=String.fromCharCode(texto[i]);
    }
   // console.log("resultado",resultado1)
    resultadostring=resultado1.join().replace(/^[,]+|[,]+$|[,]+/g, "");
    document.getElementById("resultadocifrar").value=resultadostring; 



    //console.log('cadena2 replace',cadena2.join().replace(/^[, ]+|[, ]+$|[, ]+/g, ""));
    //document.getElementById("resultadocifrar").value=cadena2.join().replace(/^[, ]+|[, ]+$|[, ]+/g, "");   
 } 

 function descifrar ()
 {
  
    let textuser= document.getElementById("textodecif");
    let posicion= document.getElementById("posiciondedescifrado");
    let respuesta= document.getElementById("resultadodescifrar").value;
    let texto= [];
    let resultado1= [];
    let resultadostring="";
    
    const numero=posicion.value;
    const infouser =textuser.value; 
     
    let asci;
    for ( var i=0; i<infouser.length; i++)
     {
       asci = infouser.charAt(i).charCodeAt(0);
        if( 64<asci && asci<91) {
          texto[i] = ((asci - 65 + parseInt(numero)+26) % 26 + 65);
         } else if(asci==65){
          texto[i] = ((asci - 97 + parseInt(numero)+26) % 26 + 97);  
         }else if(96<asci&&asci<123) {
         //resultado1[i] = String.fromCharCode(texto[i]);
         } else {
         texto[i]=asci;
         }console.log("texto",texto)
     }
     
     for ( var i=0; i<texto.length; i++) {
     resultado1[i]=String.fromCharCode(texto[i]);
     }
     //console.log("resultado",resultado1)
     
     resultadostring=resultado1.join().replace(/^[,]+|[,]+$|[,]+/g, "");
     document.getElementById("resultadodescifrar").value=resultadostring; 
 }