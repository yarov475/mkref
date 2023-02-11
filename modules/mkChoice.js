import {ifEng} from "./ifEng.js";

export const mkChoice = function (author, title, place, publisher, year, pages) {
    let item;
    let file;

    // make item to ref

    // todo:refactor export if
    if (!ifEng(author)) {
        item = `${author} ${title}.${volume}-е изд. ${place}: ${publisher}, ${year}. ${pages} с\n`;
        file = "refsList/ruItem.txt";
        console.log('item addedRU');
    } else {
        if (!author.includes(",")) {
            item = ` ${author} ${title}, ${year}. ${place}: ${publisher}, pp: ${pages}.\n`;
        } else {
            item = ` several authors":   ${title}, ${year}. ${place}: ${publisher}, pp: ${pages}.\n`;
            console.log("several authors")
        }

        file = "refsList/foreignItem.txt"

        console.log('item foreignItem aded');
    }
    return {item, file};
}