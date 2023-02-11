import prompt_sync from "prompt-sync";
import {ifEng} from "./ifEng.js";

export const takePrompt = function () {
    let item;
    let file;
    const prompt = prompt_sync();
    // const choice = prompt("press 'Y' if russian and  'N' if foreign: ");
    const author = prompt('Family Name N N: ');
    const title = prompt('Book title: ');
    const volume = prompt('isdaniye: ');
    const place = prompt('place: ');
    const publisher = prompt('publisher: ');
    const year = prompt('year: ');
    const pages = prompt('pages: ');

   // make item to ref
const engReg='[a-zA-Z]'
    // todo:refactor export if
    if (!ifEng(author)) {
        item = `${author} ${title}.${volume}-е изд. ${place}: ${publisher}, ${year}. ${pages} с\n`;
        file = "refsList/ruItem.txt";
        console.log('item addedRU');
    } else {
        if (!author.includes(",")) {
            item = `${title}, ${year}. ${place}: ${publisher}, pp: ${pages}.\n`;
        } else {
            item = ` several authors":   ${title}, ${year}. ${place}: ${publisher}, pp: ${pages}.\n`;
            console.log("several authors")
        }

        file = "refsList/foreignItem.txt"

        console.log('item foreignItem aded');
    }
    return {item, file};
}
