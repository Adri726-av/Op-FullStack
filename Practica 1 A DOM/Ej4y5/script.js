ciudades_gratis = new Array()
ciudades_gratis = ["Sevilla", "Madrid", "Valencia", "Barcelona"]
ciudades_gastos = new Array()
ciudades_gastos = ["Cantabria", "Pontevedra", "Toledo", "Segovia"]

function cargada() {
    var ciudadElegida = prompt("Introduce la ciudad que quieres: ")
    if (ciudades_gastos.includes(ciudadElegida)) {
        var gastosEnvio = prompt("Introduce los gastos de envio: ")
        document.getElementById('gastos').innerText = gastosEnvio
        document.getElementById('ciudad').innerText = ciudadElegida
        var fechaElegida = prompt("Introduce la fecha mamabicho: ")
        document.getElementById('fecha').innerText = fechaElegida
    }else if (ciudades_gratis.includes(ciudadElegida)) {
        document.getElementById('ciudad').innerText = ciudadElegida
        document.getElementById('gastos').innerText = "Los gastos son gratuitos"
        var fechaElegida = prompt("Introduce la fecha mamabicho: ")
        document.getElementById('fecha').innerText = fechaElegida
    } else {
        document.getElementById('ciudad').innerText = ciudadElegida
        document.getElementById('gastos').innerText = "No se pueden realizar envios"
        document.querySelector("h1").style.display = "none"
    }
}

window.onload = cargada;