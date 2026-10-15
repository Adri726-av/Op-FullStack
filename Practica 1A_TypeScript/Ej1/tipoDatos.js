"use strict";
var position;
var playerName;
var finishedGame;
var ranking;
var hallOfRanking = [];
position = 1;
playerName = "leontorre";
finishedGame = false;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);
position = 2;
playerName = "newKlizz";
finishedGame = false;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);
function printRankings(rankings) {
    for (let r of rankings) {
        console.log("Posicion: " + r[0] + " , Jugador: " + r[1] + ", Ha terminado el juego: " + r[2]);
    }
}
printRankings(hallOfRanking);
//# sourceMappingURL=tipoDatos.js.map