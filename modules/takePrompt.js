import prompt_sync from "prompt-sync";

export const takePrompt = function () {
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

    const makechoise = function () {

    }
// make item to ref
    if (choice == "Y") {
        item = `${author} ${title}.${volume}-е изд. ${place}: ${publisher}, ${year}. ${pages} с\n`;
        file = "ruItem.txt";
        console.log('item addedRU');
    } else {
        if (!author.includes(",")) {
            item = `${title}, ${year}. ${place}: ${publisher}, pp: ${pages}.\n`;
        } else {
            item = ` several authors":   ${title}, ${year}. ${place}: ${publisher}, pp: ${pages}.\n`;
            console.log("several authors")
        }

        file = "foreignItem.txt"

        console.log('item foreignItem aded');
    }
    return {item, file};
}
