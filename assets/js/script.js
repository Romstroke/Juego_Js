//Declaración de variables que necesito que sean globales

let jugadaMaquina;
let jugadaUsuario;
let numeroDeIntentos;

//Tengo que arreglar el innerHTML de cada resultado, porque se sobreescriben, y salen al final del for, no en cada iteración*
// let resultado;
// let resultadoAcumulado = '';

//Mostrar en el documento las veces que jugará el usuario (decidí que sea en un rango de 1 a 5 para que sea breve)
//Falta una condición para que no pueda elegir más de 5 intentos*
numeroDeIntentos = document.getElementById('jugadas');
numeroDeIntentos.addEventListener('input', function (event) {
    let valor = event.target.value;
    document.getElementById('intentosIngresados').innerHTML = `${valor}`;
});


// el juego se inicia al hacer click en el botón jugar, y se repite según el número de intentos elegidos
document.getElementById('jugar').addEventListener('click', function () {

    //según numero de intentos, el for seguirá corriendo hasta que i sea igual al número de intentos
    // let numeroDeIntentos = Number(prompt('Bienvenido al juego de cachipún contra la máquina, cuántas veces quieres probar suerte?? (Ingresa número de intentos):'));

    // Obtener el número de intentos ingresado por el usuario
    let numeroDeIntentos = document.getElementById('jugadas').value;
    // console.log('Intentos que harás: ' + numeroDeIntentos);

    //i empieza en 1 porque no existe el intento 0;
    for (let i = 1; i <= numeroDeIntentos; i++) {

        //Preguntar al usuario qué gesto/arma desea jugar
        jugadaUsuario = prompt("Escribe tal cual tu arma: 'Piedra','Papel', o 'Tijera':");

        // Arreglar después*
        // seleccionar uno de esos botones al aparecer luego de hacer click y entrar al blucle for
        // document.getElementById('armas').style.display = 'block';

        // document.getElementById('piedra').addEventListener('click', function () {
        //     jugadaUsuario = 'Piedra'
        //     console.log(jugadaUsuario)
        // });
        // document.getElementById('papel').addEventListener('click', function () {
        //     jugadaUsuario = 'Papel'
        //     console.log(jugadaUsuario)
        // });
        // document.getElementById('tijera').addEventListener('click', function () {
        //     jugadaUsuario = 'Tijera'
        //     console.log(jugadaUsuario)
        // });

        //Generar una jugada automática para la máquina usando la función Math.random() de Javascript (2 Puntos).  
        //esto entrega 3 números aleatorios, el 0, el 1, y el 2.
        let numeroAleatorio = Math.floor(Math.random() * 3);
        // console.log(numeroAleatorio)

        // Aqui creo que no necesito el triple igual === porque no hay manera de que se mande un string, porque yo no toco este codigo del compu, se genera automáticamente.
        if (numeroAleatorio == '0') {
            jugadaMaquina = 'Piedra';
        } else if (numeroAleatorio == '1') {
            jugadaMaquina = 'Papel';
        } else if (numeroAleatorio == '2') {
            jugadaMaquina = 'Tijera';
        }

        //Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina (3 Puntos)
        // Por cada juego, se debe mostrar el resultado UNMEDIATAMENTE y luego pedir nuevamente una respuesta 
        //dependiendo de las veces que haya indicado el usuario que desea jugar (2 Puntos). 

        //Cuando gana el usuario
        if (jugadaMaquina == 'Piedra' && jugadaUsuario == 'Papel' || jugadaMaquina == 'Papel' && jugadaUsuario == 'Tijera' || jugadaMaquina == 'Tijera' && jugadaUsuario == 'Piedra') {
            alert(`Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. ¡Felicidades!! Le has ganado a la máquina.`)
            // document.write(`Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}`);
            // document.getElementById('resultados').innerHTML = `<p>Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. ¡Felicidades!! Le has ganado a la máquina.</p>`;
            // resultado += `Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. ¡Felicidades!! Le has ganado a la máquina.<br>`;

            //Cuando pierde el usuario
        } else if (jugadaMaquina == 'Piedra' && jugadaUsuario == 'Tijera' || jugadaMaquina == 'Papel' && jugadaUsuario == 'Piedra' || jugadaMaquina == 'Tijera' && jugadaUsuario == 'Papel') {
            alert(`Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. Lástima!! Has perdido esta vez.`)
            // document.write(`Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}`);
            // document.getElementById('resultados').innerHTML = `<p>Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. Lástima!! Has perdido esta vez.</p>`;
            // resultado += `Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. Lástima!! Has perdido esta vez.<br>`;

            //Cuando hay empate    
        } else if (jugadaMaquina == 'Piedra' && jugadaUsuario == 'Piedra' || jugadaMaquina === 'Papel' && jugadaUsuario === 'Papel' || jugadaMaquina === 'Tijera' && jugadaUsuario === 'Tijera') {
            alert(`Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. Esto es un empate`)
            // document.write(`Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}`);
            // resultado += `Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. Esto es un empate.<br>`;
            // document.getElementById('resultados').innerHTML = `<p>Intento número ${i}: La máquina eligió ${jugadaMaquina}, tú elegiste ${jugadaUsuario}. Esto es un empate</p>`;
        } else {
            alert('No escribiste bien tu arma.')
        }
        //Indicar el resultado de la partida dependiendo del caso (2 Puntos):  
        //lo dejé con el alert*
        // resultadoAcumulado += resultado;
    }


});


