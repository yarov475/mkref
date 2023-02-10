#!/usr/bin/env node
// use node v installed on user machine
import prompt_sync from "prompt-sync";
import fs from "fs";
import concat from "concat-files";
import {appendItem} from "./appendItem.js";

// take  metadata of book


const takePrompt = function () {
    let item;
    let file;
    const prompt = prompt_sync();
    const choice = prompt("press 'Y' if russian and  'N' if foreign: ");
    const author = prompt('Family N sN: ');
    const title = prompt('book title: ');
    const volume = prompt('isdaniye: ');
    const place = prompt('place: ');
    const publisher = prompt('publisher: ');
    const year = prompt('year: ');
    const pages = prompt('pages: ');
// make item to ref
    if (choice == "Y") {
        item = `${author} ${title}.${volume}-е изд. ${place}: ${publisher}, ${year}. ${pages} с\n`;
        file = "ruItem.txt";
        console.log('item addedRU');
    }
    if (choice == "N") {
        item = `${title}, ${year}. ${place}: ${publisher}, pp: ${pages}.\n`;
        file = "foreignItem.txt"

        console.log('item foreignItem aded');
    }
return {item,file};
}

let takeINput =  takePrompt();
let item = takeINput.item
let file = takeINput.file


appendItem(item, file);


concat([
        'ruItem.txt',
        'foreignItem.txt',
    ],
    'final.txt',
    function (err) {
        if (err) throw err
        console.log('done');
    });






