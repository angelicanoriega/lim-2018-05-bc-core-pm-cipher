
// ocultar intro ir a cifrar
document.getElementById("Cf").addEventListener("click",()=>{
  document.getElementById("introduccion").setAttribute("class","hide");
  document.getElementById("Cifrar").removeAttribute("class");
});

// ocultar intro ir a descifrar
document.getElementById("Df").addEventListener("click",()=>{
  document.getElementById("introduccion").setAttribute("class","hide");
  document.getElementById("Descifrar").removeAttribute("class");
});

// aparecer y desaparecer instruciones (cifrar)
document.getElementById("Btn").addEventListener("click",()=>{
 document.getElementById("text").removeAttribute("class");
})
document.getElementById("BtnClose").addEventListener("click",()=>{
  document.getElementById("text").setAttribute("class","hide");
})
// aparecer y desaparecer instruciones (descifrar)
document.getElementById("Btn2").addEventListener("click",()=>{
 document.getElementById("text2").removeAttribute("class");
})
document.getElementById("BtnClose2").addEventListener("click",()=>{
  document.getElementById("text2").setAttribute("class","hide");
})
//regresar al inicio
document.getElementById("return").addEventListener("click",()=>{
  document.getElementById("Cifrar").setAttribute("class","hide");
  document.getElementById("Descifrar").setAttribute("class","hide");
  document.getElementById("introduccion").removeAttribute("class");
})
document.getElementById("return2").addEventListener("click",()=>{
  document.getElementById("Cifrar").setAttribute("class","hide");
  document.getElementById("Descifrar").setAttribute("class","hide");
  document.getElementById("introduccion").removeAttribute("class");
})

document.getElementById("BC").addEventListener("click",()=>{
  const string=document.getElementById("stringcipher").value;
  const offset = document.getElementById("posiciondecifrado").value;
  const resp=document.getElementById("cipher");
  resp.value=cipher.encode(offset,string);
}

)
document.getElementById("BD").addEventListener("click",()=>{
 const string=document.getElementById("stringdecipher").value;
 const offset=document.getElementById("posiciondedescifrado").value;
 const resp=document.getElementById("decipher");
 resp.value=cipher.decode(offset,string);
}
)