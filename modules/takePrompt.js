import prompt_sync from "prompt-sync";
import {ifEng} from "./ifEng.js";
import {mkChoice} from "./mkChoice.js";

export const takePrompt = function () {
    // let item;
    // let file;
    const prompt = prompt_sync();
    // const choice = prompt("press 'Y' if russian and  'N' if foreign: ");
    const author = prompt('Family Name N N: ');
    const title = prompt('Book title: ');
    const volume = prompt('isdaniye: ');
    const place = prompt('place: ');
    const publisher = prompt('publisher: ');
    const year = prompt('year: ');
    const pages = prompt('pages: ');
return    mkChoice(author,title,place,publisher,year,pages,volume)

    // return {item, file};
}
