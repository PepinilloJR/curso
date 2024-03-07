// arrays

// los arrays deben tiparse

const nada = [] // sera de tipo never, por lo que no podra tener elementos

const palabras: string[] = [] // indicamos que es un array de strings

const lenguajes: (string | number) [] = [] // indicamos que puede tener tanto numeros como strings (los parentesis son obligatorios)
                                         // y asi podemos ir agregando booleanos, etc.


lenguajes.push(4)
lenguajes.push("hola")

type Palabrotas = {
    tipo: string
    cantidad: number
}
                                
const insultos: Palabrotas[] = [] // podemos hacer un array de alias de tipos


// si quisieramos hacer una matriz, debemos tiparla tambien, y podemos hacerlo del siguiente modo
// podemos usar el ejemplo del TA TE TI

type celdaTATETI = 'X' | 'O'
type lineaTATETI = [celdaTATETI, celdaTATETI, celdaTATETI] // ESTAS LISTAS SON DEFINIDAS COMO TUPLAS, ya que estamos fijando el tamaño de los arrays de este tipo, solo son 3 celdas
type matrizTATETI = [lineaTATETI, lineaTATETI, lineaTATETI] // y aqui son solo 3 lineas posibles

const TATETI: matrizTATETI = [ // VEMOS QUE LO VALIDA CORRECTAMENTE
    ['X','O','X'],
    ['X','O','X'],
    ['X','O','X']
]

type RGB = [number, number, number]

const color: RGB = [255, 40, 3]