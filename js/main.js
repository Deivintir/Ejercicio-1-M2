/**A continuación desarrolla los siguientes pasos:
 * En el archivo main.js, declara dos variables de nombre y apellidos con inicializacion de sus valores.*/
let user = 'David';
let surname = 'Rodríguez Terrón';
//Declara una función que recibirá un parámetro de edad para que, en el cuerpo de la función, sea evaluado en una estructura "if-else".
/**En caso de que el parámetro de edad sea mayor o igual que 18, declara una variable en el primer bloque de la estructura "if-else"
 * para un mensaje compuesto por una bienvenida más el nombre y los apellidos del usuario.*/
/**En caso de que el parámetro de edad sea menor, declara otra variable de mensaje en el segundo bloque de la estructura "if-else"
 * compuesto por el nombre y apellidos del usuario para advertirle de que no puede acceder.*/
/**Dentro de la función pero fuera y tras la estructura "if-else" invoca un console.log() con el mensaje que se generará en cada caso.*/
let age;
function ageAllow(age) {
    if (age>=18) {
       return allow = `Bienvenido ${user} ${surname}`
    } else {
       return notAllow = `Hola ${user} ${surname} Este contenido es para mayores de 18 años.`
    }
    console.log(ageAllow(39));
}

