 /*
1.-Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


2.-Programa una función que te devuelva el texto recortado según el número de caracteres
 indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

3.-Programa una función que dada una String te devuelva un Array de textos separados
 por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

4.-Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.

5.-Programa una función que invierta las palabras de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá "odnuM aloH".

6.-Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
 miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

7.-Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

8.-Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
 miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5. */

 //ejercicio 1: 

 let cadena = ("Esteban")
 const contarNumCaracteres = function(cadena){
    console.log(`esta cadena tiene ${cadena.length} caracteres.`)
 }

 contarNumCaracteres(cadena);


 //ejercicio 2: 

const cortarNumCaracteres = function(cadena2,valor){
    console.log(cadena2.slice(0,valor));
}

cortarNumCaracteres("hola mundo",6);
cortarNumCaracteres("Esteban Diaz",9);

//ejercicio 3: 

const texto = function(a,b){
    console.log(a.split(b));
}
texto("hola que tal",' ');

texto("hola,soy Esteban, vivo en Maipú, estudio en duoc",',')

//ejercicios 4

const repetidorString = function(a,b){
    console.log(a.repeat(b));
}

repetidorString("Hola Mundo ",3);

//ejercicio 5 

const invierteCadena = function(a){
    const convertirTextoEnArray = a.split('');
    const invierteArray = convertirTextoEnArray.reverse();
    const unirArrayEnUnTexto = invierteArray.join("");
    //console.log(a.split('').reverse().join(""));
    console.log(unirArrayEnUnTexto);
}

invierteCadena("Hola Mundo");
invierteCadena("Esteban");

//ejercicio 6 

const repitePalabra= function(a,b){
    
    let contador = 0;
    let texto = a.split(" ");
    texto.forEach(function(palabra){
        if (palabra === b ){
            contador++;
        }
        
    });

   console.log(contador);
    
};

repitePalabra("hola mundo bye mundo ", "mundo");

//ejercicio 7


const palindromo = function(texto){
    const convertirTextoEnArray = texto.split('');
    const invierteArray = convertirTextoEnArray.reverse();
    const unirArrayEnUnTexto = invierteArray.join("");

    if(texto === unirArrayEnUnTexto){
        console.log("este es un palindromo")

    } else{
        console.log("esto no es un palindromo")
    }
}

palindromo("reconocer");
palindromo("ola");
palindromo("adan");
palindromo("sometemos");
palindromo("alunaeseanula")

//ejercicio 8 


