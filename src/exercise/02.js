// JavaScript - Template Literals
// http://localhost:3000/alone/exercise/02.js

// eslint-disable-next-line no-unused-vars
import displayText, {init} from './helper/exerciseHelper'
init('JavaScript - Template Literals')

// 🐶 Créé 3 constantes avec leurs valeurs 5 10 et 200
const a = 5
const b = 10
const c = 200

// 🐶 utilise la fonction `Math.max` pour trouver le nombre le plus grand
// 📑 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max
displayText(`le nombre le plus grand entre ${a} ${b} ${c} est ` + Math.max(a,b,c))
// 🐶 affiche le liblélé “Le nombre le plus grand entre 5 10 200 est 200 !”
// à l'écran avec 'displayText'
