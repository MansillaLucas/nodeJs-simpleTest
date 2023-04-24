// Estando aún en etapa de desarrollo en la versión 18 de Node, este nos va a permitir obtener información a partir de un enlace.
// Para ello, lo que podemos hacer es utilizar la instrucción fetch...

try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
}
catch (error) {
    console.log(error)
}

// Algo particular con la sintaxis es que podemos quitar la sentencia async y el codigo sigue funcionando sin problemas. Esto
// justamente se debe al atributo "type":"module" dentro de package.json.