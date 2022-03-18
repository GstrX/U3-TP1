//  Declarar una variable llamada noValgoNi5 y asignarle el valor 4. Mostrar el valor de la variable por la terminal.
var noValgoNi5 = 4;
console.log(noValgoNi5);

/* Declarar 3 variables:

o    miAnioDeNacimiento y asignarle el valor de tu año de nacimiento.

o    meGustariaTener80Anios y asignarle el número 80.

o    voyATener80ElAnio y asignarle el resultado de sumar las 2 variables anteriores

Mostrar por la terminal el año en el que vas a cumplir 80 años.
*/
var miAnioDeNacimiento = 1985;
var meGustariaTener80 = 80;
var voyATener80ElAnio = (miAnioDeNacimiento + meGustariaTener80);
console.log("Voy a cumplir 80 años en el " + voyATener80ElAnio);

/* Declarar 3 variables:

o    variable costoDeUnaTele y asignarle el valor 10000.

o    variable ahorros y asignarle el valor 9000.

o    variable dineroQueMeFalta y asignarle el resultado de restar las 2 variables anteriores.

Mostrar por la terminal cuanto dinero te falta para comprar la tele.
*/
var costoDeUnaTele = 10000;
var ahorros = 9000;
var dineroQueMeFalta = (costoDeUnaTele - ahorros);
console.log("Para comprar la tele me falta " + dineroQueMeFalta);

/*Declarar 3 variables:

o    diasPorAnio y asignarle el número 365

o    cantidadDeAniosEnUnaDecada y asignarle el número 10

o    cantidadDeDiasEnUnaDecada y asignarle el resultado de multiplicar las 2 variables anteriores.

Mostrar por la terminal cuantos días hay en una década.
*/
var diasPorAnio = 365;
var cantidadDeAniosEnUnaDecada = 10;
var cantidadDeDiasEnUnaDecada = (diasPorAnio * cantidadDeAniosEnUnaDecada);
console.log("En una decada hay " + cantidadDeDiasEnUnaDecada + " dias");

// Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar por la terminal cuantas pizzas tengo en la mesa si 
//conté 24 porciones.
var unaPizza = 8;
var total = 24;
var cuantasPizzas = (total / unaPizza);
console.log("Tengo " + cuantasPizzas + " pizzas en la mesa");

/* Declarar una variable de nombre miAnimalFavorito y asignarle como valor el string que represente el animal que más te gusta.
Escribir el código necesario para mostrar por la terminal el valor true si el animal que más te gusta es un 'perro'.
De lo contrario, mostrar false. Usar el operador de igualdad (==).
*/
var miAnimalFavorito = "gato";
var perroTrue = "perro";
var sale = miAnimalFavorito == perroTrue;

console.log(sale);

/* Usar el operador de desigualdad (!=) para mostrar por la terminal el resultado de comparar la cadena de caracteres 'flan'
y 'flan con dulce de leche' (Podés crear todas las variables que quieras, incluso podés resolverlo sin usar variables).
*/
var postreRico = "flan";
var postreEmpalagoso = "flan con dulce de leche";
var loMismo = (postreRico != postreEmpalagoso);
console.log("Son lo mismo? " + loMismo);

/* Declarar una variable llamada soyMayorDeEdad y asignarle el resultado de comparar tu edad y el número 17 usando
el operador > (mayor). Mostrar el valor de la variable por la terminal.
*/
var miEdad = 36;
var minoriaDeEdad = 17;
var soyMayorDeEdad = (miEdad > minoriaDeEdad);
console.log("Soy mayor de edad? " + soyMayorDeEdad);

/*  Declarar una variable llamada soyMenorDe25 y asignarle el resultado de comparar tu edad y el número 25 usando el 
operador < (menor). Mostrar el valor de la variable por la terminal.
*/
var menorDe25 = 25;
var soyMenorDe25 = (miEdad < menorDe25);
console.log("Soy menor de 25? " + soyMenorDe25)

/* Declarar una variable llamada estamosEnEnero y asignarle el resultado de comparar si el nombre del mes actual es igual
a 'Enero'. Hacerlo usando el operador de igualdad estricta (===). Mostrar el valor de la variable por la terminal.
*/
var mesEnero = "enero";
var mesActual = "Marzo";
var estamosEnEnero = (mesEnero === mesActual);
console.log("Estamos en el mes de enero? " + estamosEnEnero);

/* Declarar una variable llamada noEstamosEnEnero y asignarle el resultado de comparar si el nombre del mes actual y el string
'Enero' son diferentes. Hacerlo usando el operador de desigualdad estricta (!==). Mostrar el valor de la variable por la terminal.
*/
var noEstamosEnEnero = (mesActual !== mesEnero);
console.log("Entonces no estamos en enero? " + noEstamosEnEnero);

/*Declarar 3 variables:

o    miNotaEnElParcial y asignarle un 8

o    notaMinimaParaAprobar y asignarle un 6

o    estoyAprobado y asignarle el resultado de comparar el número las dos variables anteriores usando el operador >=
(Mayor o igual).

Mostrar el valor de la variable estoyAprobado por la terminal.
*/
var miNotaEnElParcial = 8;
var notaMinimaParaAprobar = 6;
var estoyAprobado = (miNotaEnElParcial >= notaMinimaParaAprobar);
console.log("Entonces estoy aprobado? " + estoyAprobado);

/* Declarar una variable llamada esHoraDeAlmorzar cuyo valor sea el resultado de comparar con el operador <= (Menor o igual)
si la hora actual es menor o igual a 12. Mostrar el valor por la terminal.
*/
var horaActual = 23;
var horaDeAlmorzar = 12;
var esHoraDeAlmorzar = (horaActual <= horaDeAlmorzar);
console.log("Es hora de almorzar? " + esHoraDeAlmorzar);