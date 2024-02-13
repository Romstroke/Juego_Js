//Aplicando los conceptos y herramientas aprendidas hasta ahora crea un programa que le 
//permita a una persona jugar al cachipún contra el computador, 

//indicando cuántas veces desea jugar o repetir el juego. 

//El cachipún es un juego entre dos personas (en este caso, tú y el computador) 
//donde cada una de ellas de manera 

//independiente y secreta debe elegir una de las opciones (piedra, papel y tijera)

//y compararla con la opción de la otra persona.

//Para determinar quien gana, se deben seguir las siguientes reglas:

// ● Tijera le gana a papel ● Papel le gana a piedra ● Piedra le gana a tijera ● Si ambos jugadores eligen la misma opción es un empate 

// Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es decir, 
//cuántas veces deberá jugar contra la computadora. Por cada juego, 
//se debe mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta 
//dependiendo de las veces que haya indicado el usuario que desea jugar (2 Puntos). 

//declaración de variables

let i = 0;
let jugadaMaquina;
let jugadaUsuario;
let ganador;
let usuario;
let maquina;

//según numero de intentos, el for seguirá corriendo hasta que i sea igual al número de intentos
let numeroDeIntentos = Number(prompt('Bienvenido al juego de cachipún contra la máquina, cuántas veces quieres probar suerte?? (Ingresa número de intentos):'));

for( i=0; i <= numeroDeIntentos; i++){
    jugadaUsuario = prompt("Escribe tal cual tu arma: 'Piedra','Papel', o 'Tijera':");

    //Generar una jugada automática para la máquina usando la función Math.random() de Javascript (2 Puntos).  
    //esto entrega 3 números aleatorios, el 0, el 1, y el 2.
    //dónde tengo que declarar jugadaMaquina??????? dentro de este bloque o afuera de todo junto con todas las funciones???
    // let jugadaMaquina;
    let numeroAleatorio = Math.floor(Math.random()*3);

    // if(jugadaUsuario == 'Piedra'){

    // }


    // aqui creo que no necesito el triple igual === porque no hay manera de que se mande un string, porque yo no toco este codigo del compu, se genera automáticamente.
    if(numeroAleatorio == '0'){
        jugadaMaquina = 'Piedra'
    }else if(numeroAleatorio == '1'){
        jugadaMaquina = 'Papel'
        // ELSE NO LLEVA CONDICION POR ESO QUEDA MALO Y HAY QUE PONERLE UN IF*******
    }else if(numeroAleatorio == '2'){
        jugadaMaquina = 'Tijera';
    }

    //Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina (3 Puntos)
    //wins (cuando gana el usuario)
    if(jugadaMaquina == 'Piedra' && jugadaUsuario == 'Papel' || jugadaMaquina == 'Papel' && jugadaUsuario == 'Tijera' || jugadaMaquina == 'Tijera' && jugadaUsuario == 'Piedra'){
        // ganador = usuario;
        console.log('ganas')
    //lose (cuando pierde el usuario)
    }else if(jugadaMaquina == 'Piedra' && jugadaUsuario == 'Tijera' || jugadaMaquina == 'Papel' && jugadaUsuario == 'Piedra' || jugadaMaquina == 'Tijera' && jugadaUsuario == 'Papel'){
        // ganador = maquina;
        console.log('pierdes')
    }else if(jugadaMaquina == 'Piedra' && jugadaUsuario == 'Piedra' || jugadaMaquina === 'Papel' && jugadaUsuario === 'Papel' || jugadaMaquina === 'Tijera' && jugadaUsuario === 'Tijera'){
        console.log('empate')
    }
    //Indicar el resultado de la partida dependiendo del caso (2 Puntos):  
    //● Felicitar al ganador en caso de ser el usuario. 
    //● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea la que gane. 
    //● Declarar un empate. 
}