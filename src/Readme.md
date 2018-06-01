# Cifrado César

## Preámbulo
Todos tienen algún secreto y aveces te dan ganas de plasmarlo en algún lado, el problema recae que si el secreto plasmado llega a cualquier persona,ya no será un secreto.
Imagina que tu diario cayo en manos de tu hermanito y el se entero de todo lo que habias escrito en el, o se te perdio tu agenda con la informaqcion de tus tarjetas,Por suerte para ti creamos como cifrar tu informacion y solo los que tu quieras podran descifrarlo.

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


## Quiénes son los principales usuarios de producto?

Son personas con la necesidad de mantener mas segura su informacion con un cifrado que ellos pueden crear.

## Cuáles son los objetivos de estos usuarios en relación con el producto?

Lograr cifrar y descifrar una cadena de letras para ellos .

## Cómo crees que el producto que estás creando les está resolviendo sus problemas?
Debido al hecho de que las posiciones que avance o retroceda la cadena de letras solo lo sabra el creador del mensaje inicial.

## Link de producto:https://angelicanoriega.github.io/lim-2018-05-bc-core-pm-cipher/src/

En el link se mostrara una pagina web creada con la funcion de cifrar y descifrar mensajes que el usuario introduzca.

## Decisiones de diseño :

El diseño inicial se compone de una difinicion de lo que es Cifrado Cesar, junto con dos cuadros verticales de cifrar y decifrar:
![img inil](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/master/src/imagenes%20para%20el%20readme/cifrado%20cesar.png)

## Cambios de diseño:

los cuadros versticales se cambiaron a horizontales por la vista en responsive.

Se considero convertir los 4 cuadros de texto en solo 2, pero en un feedback con usuarios de dio a entender que era mas entendible con 4.

Se creo un cuadro negro alrededor de cifrado y decifrado para que no haya confusion entre cuadros de texto.

## Vista web:

![web-cell](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/gh-pages/src/imagenes%20para%20el%20readme/imge%20web/Captura%20de%20pantalla%20de%202018-06-01%2002-57-35.png)
![web-cell](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/gh-pages/src/imagenes%20para%20el%20readme/imge%20web/Captura%20de%20pantalla%20de%202018-06-01%2002-57-40.png)
![web-cell](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/gh-pages/src/imagenes%20para%20el%20readme/imge%20web/Captura%20de%20pantalla%20de%202018-06-01%2002-57-44.png)

## Vista responsive:

![web-cell](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/gh-pages/src/imagenes%20para%20el%20readme/imagen%20cellphone/Captura%20de%20pantalla%20de%202018-06-01%2002-32-09.png)
![web-cell](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/gh-pages/src/imagenes%20para%20el%20readme/imagen%20cellphone/Captura%20de%20pantalla%20de%202018-06-01%2002-32-17.png)
![web-cell](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/gh-pages/src/imagenes%20para%20el%20readme/imagen%20cellphone/Captura%20de%20pantalla%20de%202018-06-01%2002-32-24.png)

## Instrucciones de uso:

Instrucciones de uso (Cifrado):

* Escribe en el cuadro de texto Introduzca el texto a cifrar: la frase que deseas cifrar.
* En el cuadro de texto Introduzca un número para el cifrado: escribe un número que indique cuantas posiciones avanzara al cifrar 
un ejemplo seria que a la frace "ABCD" le escribieras 1 en la casilla "Introduzca un número para el cifrado:" el resultado saldra BCDE, siempre se movera la cantidad que indiques.
* Has cick en el botón cifrar.

Instrucciones de uso (Descifrado):

* En el cuadro de texto Introduzca el texo a descifrar: colocamos el texto que previamente ciframos
* En el cuadro de texto Introduzca un número para el decifrado: escribe un numero que indique cuantas posiciones retrocedera al decifrar 
un ejemplo seria que a la frace "BCDE" le escribieras 1 en el cuadro "Introduzca un número para el decifrado:" el resultado saldra ABCD, siempre se retrocedera la cantidad que indiques.
* Has cick en el botón decifrar.


![video](https://github.com/angelicanoriega/lim-2018-05-bc-core-pm-cipher/blob/master/src/imagenes%20para%20el%20readme/GIF.gif)

