type Ranking = [Number, String, Boolean]

var position: Number
var playerName: String
var finishedGame: Boolean
var ranking: Ranking

var hallOfRanking: Ranking[] = []

position = 1
playerName = "leontorre"
finishedGame = false

ranking = [position, playerName, finishedGame]

hallOfRanking.push(ranking)

position = 2
playerName = "newKlizz"
finishedGame = false

ranking= [position, playerName, finishedGame]

hallOfRanking.push(ranking)

function printRankings(rankings: Ranking[]): void{
    for (let r of rankings) {
        console.log("Posicion: " + r[0] + " , Jugador: " + r[1] + ", Ha terminado el juego: " + r[2])
    }
}

printRankings(hallOfRanking)