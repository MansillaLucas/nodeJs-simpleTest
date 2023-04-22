// Existen funciones, presentes en el navegador tambien, llamadas TimeRanges. Estos permiten realizar acciones sobre
// lapsos de tiempo especificos:

// setInterval ejecuta un codigo cada cierto tiempo. setTimeout ejecuta una funcion luego de que el contador termina.

setInterval(() => {
    console.log("Cada dos segundos muestra este mensaje.");
}, 2000)

setTimeout(() => {
    console.log("Pasaron 5 segundos. No vas a volver a ver este mensaje.")
}, 5000);