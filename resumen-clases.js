// CLASE 1: INTRODUCCION E HISTORIA

// CLASE 2:  PAGINA CREADA POR JON PARA JAVASCRIPT 

// CLASE 3:  CARACTERISTICAS Y GRAMATICAS  EN DONDE TENEMOS LA ESCRITURA DEL CODIGO COMO TAL , ORDEN DEL CODIGO, TIPOS DE DATOS DE JAVASCRIPT 

//CLASE 4: 

/* 
AQUI SE VIERON LAS VARIABLES CON AMBITO DE BLOQUE Y LAS QUE SON GLOBABLES VAR Y LET 
*/

var hola = "Hola mundo"
        console.log(hola);

let saludo = "Hola mundo"
        console.log(saludo);

// CLASE 5: constantes (VARIABLES QUE NO CAMBIAN SU VALOR)

const PI = 3.1416;

//CLASE 6: Cadenas de texto: y metodos de string 

let nombre = "esteban";
let saludo2 = new String ("hola mundo")
console.log(lorem.includes("esteban"));
console.log(lorem.trim()); 
console.log(lorem.split(" "));

// CLASE 7: template string INTERPOLACION

let nombre2 = "Esteban";
let apellido ="Diaz";
let saludo3 = `hola mi nombre es ${nombre2} ${apellido}.`

// CLASE 8: NUMBERS 

let c = 7.19;
console.log(parseFloat(c))
console.log(parseInt(c));

// CLASE 9: VALORES BOOLEANOS TRUE O FALSE 

let verdadero = true;
let falso = false;

// clase 10: UNDEFINED NULL Y NAN 
let indefinida;
let nulo = null;
let noEsUnNumero = "hola" * 3.7;

// clase 11: Funciones distintas formas de declarar una funcion 

function estoEsUnaFuncion(){
    console.log("uno"); }

//invocacion de función
estoEsUnaFuncion();

// existen las funciones que devuelven un valor y funciones anonimas.

// clase 12: Arrays se declaran con const y comienzan desde el 0 

const b = [1,true,"ola",["a","b"]];


// clase 13: objetos tambien se declaran con const y dentro de ella tiene propiedades como tambien funciones aveces

const esteban = {
    nombre: "esteban",
    apellido: "diaz",
    edad: 25,
    pasatiempos: ["jugar","correr","leer"],
    soltero: false,
    contacto: {
        email:"esteban@gmail.com",
        cel: "9384908490"
    }
};

// clase 14: tipos de operadores
// aca tenemos operadores aritmeticos relaciones que nos permiten comparar valores y de incremento y decremento como tambien los logicos

let a = 5 + (5 - 10) * 3;
console.log(8 >= 9);
i++;
i--;
console.log((9===9) && ("9"===9));

//clase 15: condicionales en donde tenemos el if y else el if 

let edad =17;

if(edad >= 18 ){
    console.log("eres mayor de edad")
} else{
    console.log("eres menor de edad ")
}

// clase 16: Ciclos loops
// estos ciclos permiten recorrer un array y objeto etc 

for (let i = 0; i < 10; i++) {
    console.log("for" + i);
    
}

for (const propiedad in esteban){
    console.log(propiedad, esteban[propiedad]);

}

// clase 17: manejo de errores nos permite manejar errores en el caso que la aplicacion falle

try {
    console.log("en el try se agrega el codigo a evaluar");

    
} catch (error) {
    console.log("catch captura cualquier error surgido o lanzado en el try");
    
}finally {
    console.log("el bloque finally se ejecutara siempre al final de un bloque try catch");
}

// clase 18: break y continue nos permite parar por ejemplo un ciclo de un for cuando la condicion se cumple o tambien continuar cuando la encuentre. 

const numeros = [1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < numeros.length; i++) {
    
    if(i === 5){
        break;
    }

    console.log(numeros[i]);
}

// clase 19: destruccturacion: puede destructurar un array en variables u objetos 

let numeros2 = [1,2,3]

const [one,two,three] = numeros2;

console.log(one);



// clase 20 : objetos literales es una forma de declarar metodos y atributos de manera literal.

const persona2 = {
    nombre,
    apellido: "diaz",
    edad,
    hablar(){
        console.log("hola holaaaaaa")
    }
} 

// clase 21: parametros rest y spreed operator el operador rest nos permite agregar mas valores sin necesidad de declarar arriba y el speed operator nos permite juntar arrays
function sumar (a,b,...c){
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n
    });

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));

//spreed operator

const arr1 = [1,2,3],
arr2 = [4,5,6];

console.log(arr1,arr2);

const arr3 = [...arr1,...arr2];

console.log(arr3);

// clase 22: arrow funtion es otra manera de funciones pero con flechas.

//arrow function
const saludo4 = (nombre) => {
    console.log(`Hola ${nombre}`);
}

saludo4("irma");

// clase 23: prototipos son objetos mas estructurados 

// funcion constructora
function Animal(nombre,genero){
    //atributos
        this.nombre = nombre;
        this.genero= genero;
    //metodos
    this.sonar = function (){
        console.log("hago sonidos porque estoy vivo");
    }
    }
// en donde ya podemos instanciar 
const tazmania = new Animal("Tazmania","Macho"),
 snoopy = new Animal("Snoopy","Macho");


// clase 24: herencias es mas que nada que un hijo hereda de un padre entonces hereda sus atributos.

//HERENCIA PROTOTIPICA

function Perro (nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//pero es la nueva instancia de Animal, perro hereda de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// clase 25: clases y herencias, aqui aprendi a declarar las clases como tal y como tiene que llamarse la herencia ahora.

class Animal{

    //el constructor es un metodo especial que se ejecuta en el momento de instanciar una clase
    constructor(nombre,genero){
    //atributos
        this.nombre = nombre;
        this.genero= genero;
    }   
    //metodos
            sonar(){
            console.log("hago sonidos porque estoy vivo");
        }
     
    }

    class Perro extends Animal{
        constructor(nombre,genero,tamanio){
            //con el metodo super() se manda a llamar el constructor clase padre
            super(nombre,genero);
            this.tamanio = tamanio;
        }
    }
    
// clase 26: metodos estaticos getter y setters aqui aprendi a que un metodo estatico se puede ejecutar sin necesidad de instanciar la clase ademas de acceder y setear de alguna forma dentro de mi constructor
// los getter y setter se llaman como propiedad no como funcion. 

class Animal{

    //el constructor es un metodo especial que se ejecuta en el momento de instanciar una clase
    constructor(nombre,genero){
    //atributos
        this.nombre = nombre;
        this.genero= genero;
        this.raza = null;
    }   
    //metodos
            sonar(){
            console.log("hago sonidos porque estoy vivo");
        }
    
    //un metodo estatico se puede ejecturar sin necesidad de instanciar la clase    
    static queEres(){
    console.log("los perros somos animales mamiferos.")
    }
    
    //metodos setters y getter
    get getRaza(){
        return this.raza;
    }
    
    set setRaza(raza){
         this.raza = raza;  
    }
    
    }


// clase 27: objetos por consola, aqui aprendi a que hay mas del console.log existen variios objetos por consola que se pueden utilizar

console.log(console);
console.error("esto es un error");
console.warn("esto es un aviso");
console.info("esto es un mensaje informativo");
console.log("es un registro de lo que ha pasado en nuestra aplicacion");


// clase 28: los date, aqui es donde podemos incluir fechas dentro de nuestra aplicacion y los distintos datos que nos puede entregar date 

console.log(Date());
    let fecha = new Date();
    console.log(fecha);
    //dia del mes
    console.log(fecha.getDate());
    //dia de la semana
    console.log(fecha.getDay());

// clase 29: operaciones matematicas, nos sirven para redondear, raiz cuadrada etc son distintos tipos de operadores matematicos. 

console.log(Math);
    console.log(Math.PI);
    console.log(Math.abs);//valor absoluto
    console.log(Math.ceil)//numero entero mayor
    console.log(Math.floor)//numero entero menor

//clase 30: operador corto circuito es otra manera de un if mas corto 

function saludar(nombre){
    //en el caso que nombre no venga definido ponle desconocido
    nombre= nombre || "desconocido";
    console.log(`hola ${nombre}`)
}


//clase 31: alert confirm y promp estos son metodos para interactuar con el usuario

window.alert("hola esta es una alerta");
confirm("hola esta es una confirmacion");
window.prompt("hola esta este es un aviso y le permite el usario ingresar un valor");


// clase 32: expresiones regulares, estas son secuencias de caracteres que forman un patron de busqueda en donde tenemos primero el patron y luego la bandera que es lo que que queremos buscar

let cadena = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic nulla, ad laborum animi lorem quae minima eum facilis sit quia?"
let expReg = new RegExp("lorem","ig");

// clase 33: funciones anonimas autoejecutables estas no tienen nombre y se utilizan tambien para abreviar ciertas cosas

(function (d,w,c){

    console.log("mi primer funcion anonima autoejecutada")
    console.log(d);
    console.log(w);
    c.log("este es un console log")
    
    })(document, window, console);

// clase 34: import y export aca se enseña como importar y exportar archivos, para utlizar ciertas funciones en otro archivo exportando y importando 
// se coloca una ruta en donde esta ese archivo.
// import {PI} from "/constantes.js"; aqui importo lo que necesito

//export para exportar 

//export default










