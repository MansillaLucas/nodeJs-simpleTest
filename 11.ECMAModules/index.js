// Existen dos estandares para realizar integración de modulos. Como vimos anteriormente, Common JS es una de ellas.
// Vamos a tener por otro lado una solución más nueva propia de los navegadores web llamado ECMAScript.
// Teniendo en cuenta el ejemplo anterior, podemos realizar el import de dos formas distintas mientras trabajemos con ECMAScript.
import math, {suma,resta} from './funciones'

// Estas cuatro instrucciones usan el modulo math completo. Las funciones que contienen son las que
// estarán dentro del bloque export default.
console.log(math.suma(10,20))
console.log(math.resta(10,20))
console.log(math.multiplicacion(10,20))
console.log(math.division(10,20))

// Por otro lado, estas funciones son las que se importaron individualmente en las llaves, y son aquellas que se decoraron con
// export al momento de definirlas en el archivo funciones.
console.log(suma(10,30))
console.log(resta(10,60))

// Recordar que para que esto funcione, es necesario especificar dentro de nuestro package.json el atributo "type":"module"