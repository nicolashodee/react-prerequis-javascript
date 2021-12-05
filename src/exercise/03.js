/* eslint-disable no-unused-vars */
// Décomposition et Shorthand property names
// http://localhost:3000/alone/exercise/03.js

import displayText, {init} from './helper/exerciseHelper'
init('Décomposition et Shorthand property names')

// propiétes d'un terrain de foot
const longueur = 120
const largeur = 90
const type = 'footbal'

// 🐶 Créé un object `terrainFoot` avec les propietes `longueur` et `largeur` initialisés avec les constantes ci-dessus
// en utilisant les shorthand property names

const terrainFoot = {longueur, largeur, type} 
const terrainBasket = {longueur:28, largeur:15, type:'basket'} 


// 🐶 Créé un object `terrainBasket` avec les propietes `longueur` 28 et `largeur` 15 (sans créer de variables intermédiaires)

// const {longueur: 28, largeur:15, type:basket} = terrainBasket 

// 🐶 Créé une fonction `calculAir` avec 1 paramètre : le terrain (utilise la décomposition)

function calculAir({largeur, longueur, type}) {
  displayText(`l'aire d'un terrain de type ${type} est de ${largeur * longueur}`)
}


// 🐶 affiche avec `displayText` : "La surface du terrain de footbal/basket est x m² "

// displayText(`la surface du terrain de ${type} est de ${calculAir(terrain)}`)

// 🐶 Appelle cette fonction avec le terrain de footbal puis de basket
// const terrainFoot = {longueur, largeur, type}
// const terrainBasket = {longueur: 28, largeur: 15, type: 'basket'}

// function calculAir({type, largeur, longueur}) {
//   displayText(
//     `la surface d’un terrain de ${type} est de ${longueur * largeur} m² `,
//   )
// }
calculAir(terrainFoot)
calculAir(terrainBasket)
