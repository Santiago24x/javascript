//tipos de datos javascript 


//numeros

var numero = 10;

//string

var nombre = "juan";

    //toUpperCase- Para poner en mayuscula

    console.log(nombre.toUpperCase());

    //indexOf- Para saber la posicion de un caracter

    console.log(nombre.indexOf("u"));

    //slice- Para cortar un string

    console.log(nombre.slice(0,2));

    //replace- Para reemplazar un caracter

    console.log(nombre.replace("juan","zozorrita"));

    //split- Para dividir un string
    console.log(nombre.split(" "));

    //trim- Para quitar espacios en blanco
    console.log(nombre.trim());
    
    //concatenar- Para unir dos strings
    console.log(nombre.concat(" ", "perez"));
    
    //conversiones de string a otro tipo de dato 
    var numero_string = "10";
    var numero_string2 = "20";
    console.log( Number(numero_string) + Number(numero_string2));


//booleanos

var bandera = true;

//arreglos

var arreglo = [1,2,3,4,5];

//objetos

var objeto = {
    nombre: "juan",
    apellido: "perez"

 }

//saber tipo de dato
console.log(typeof nombre);

//saber el tamaño de un arreglo

console.log(arreglo.length);

//saber el tamaño de un objeto

console.log(Object.keys(objeto).length);

//saber el tamaño de un string

console.log(nombre.length);