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

/**En el archivo main.js declara una función de expresión usando la sintaxis de flecha que, a partir de un parámetro de fecha de nacimiento, 
 * devuelva la edad usando los métodos "getDate()" y "getTime()" de fechas y "Math.floor()" para redondear. */
/**A continuación declara un array de objetos literales de usuario con al menos 4 objetos. Cada uno de ellos debe contener una propiedad nombre, 
 * otra de apellidos y otra de fecha de nacimiento, todas con sus correspondientes valores.*/
/**Utiliza el método para arrays map con el array de usuarios anterior para devolver a otro array de listado de usuarios un string por cada usuario
 * que contenga, el nombre y los apellidos del usuario y su edad, obtenida usando la función creada en los pasos anteriores.*/
/**Utiliza un "console.log()" del array de listado de usuarios para comprobar la salida del programa de acuerdo con los requisitos anteriores.*/
userAge = dateofBirth => {
    return Math.floor((new Date().getTime()-new Date(dateofBirth).getTime())/31536000000);
}

let users = [
    {name: 'David', surname: 'Rodríguez Terrón', dateofBirth: '1984-10-29'},
    {name: 'Pablo', surname: 'Rodríguez Terrón', dateofBirth: '1983-09-07'},
    {name: 'Elisa', surname: 'Terrón Arias', dateofBirth: '1962-09-30'},
    {name: 'Ana', surname: 'Rodrígez Benjuema', dateofBirth: '2008-09-29'},
    {name: 'Alba', surname:'Rodríguez Benjumea', dateofBirth: '2012-05-15'},
    {name: 'Aroa', surname: 'Rodríguez Bejumea', dateofBirth: '2014-02-16'},
];

const dataUser = users.map(({ name, surname, dateofBirth }) => {
    const age = userAge(dateofBirth);
    return { name, surname, age };
});

console.log(dataUser);