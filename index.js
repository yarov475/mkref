#!/usr/bin/env node
// use node v installed on user machine
import prompt_sync from "prompt-sync";
import fs from "fs";
import concat from "concat-files";
import {appendItem} from "./modules/appendItem.js";
import {takePrompt} from "./modules/takePrompt.js";



// take  metadata of book
let takeINput =  takePrompt();

let item = takeINput.item
let file = takeINput.file


appendItem(item, file);

const eject = function (){
    concat([
        'ruItem.txt',
        'foreignItem.txt',
    ],
    'final.txt',
    function (err) {
        if (err) throw err
        console.log('done');
    });


}
 eject()





