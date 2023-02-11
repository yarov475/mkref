import {takePrompt} from "./takePrompt.js";

let takeINput = takePrompt();
let item = takeINput.item
let file = takeINput.file

export {item, file};