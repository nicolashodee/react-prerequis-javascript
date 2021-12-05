// ESModule Import / Export
// http://localhost:3000/alone/exercise/01.js

// 🐶 Importe 'init' et 'displayText' du module qui permet d'afficher un texte dans la page de l'exercice
//  🤖 import displayText, {init} from './helper/exerciseHelper'

import {init} from "./helper/exerciseHelper";
import displayText from "./helper/exerciseHelper";


// 🐶 Affiche 'HelloWorld' dans la page grace à la fonction `displayText` importée
// Atention il faut appeler une fois la fonction init avant les appels à displayText
//  🤖 init()
//  🤖 displayText("Hello World")


// 🐶 Pour la suite de l"exercice il faut aller renseigner le module dans
// `src/helper/roomHelper.js`


// 🐶 Importe tout du module roomHelper
import roomHelper, { calculPerimetre } from "./helper/roomHelper";
import { TEMP_MAX } from "../final/helper/roomHelper";

// 🐶 Utilise ces 3 fonctions pour créér les bons libéllés


init(); 
displayText("Hello world"); 

let lib = "l'Aire d'une piece de 5 par 3 donne" + roomHelper(5,3);
displayText(lib)
lib = "le perimetre d'une piece de 5 par 3 donne" + calculPerimetre(5,3)
displayText(lib)
lib = "la temp max d'une piece donne" + TEMP_MAX
displayText(lib)

// 🤖 let lib = "Air de d'un pièce de 2 par 5 donne " + ...
// Utilise displayText pour afficher ces 3 libéllés


