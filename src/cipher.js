window.cipher = {
   encode:(offset,string) => {
    
    let texto= [];
    let resultado= [];
    let cipher="";
   
    let numero=parseInt(offset);
    let encode;  
     for ( var i=0; i<string .length; i++)
     {
       encode = string .charAt(i).charCodeAt(0);
       if( 64<encode && encode<91) {
         texto[i] = (encode - 65 + numero) % 26 + 65;
       } else if(96<encode&&encode<123) {
         texto[i]=(encode - 97 + numero)%26 +97;
       }else {
         texto[i]=encode;
       }resultado[i]=String.fromCharCode(texto[i]);
     }
   
    cipher=resultado.join().replace(/^[,]+|[,]+$|[,]+/g, "");
     return cipher;
   },
   decode:(offset,string) => {
    
    let texto= [];
    let resultado= [];
    let decipher="";
   
    let numero=parseInt(offset);
    let encode;  
     for ( var i=0; i<string .length; i++)
     {
       encode = string .charAt(i).charCodeAt(0);
       if( 64<encode && encode<91) {
         texto[i] = (encode - 65 - numero +26) % 26 + 65;
       } else if(96<encode&&encode<123) {
         texto[i]=(encode-97-numero+26)%26+97;
       }else {
         texto[i]=encode;
       }resultado[i]=String.fromCharCode(texto[i]);
     }
     
     
   
    decipher=resultado.join().replace(/^[,]+|[,]+$|[,]+/g, "");// ver coma
     return decipher;
   }
  }