import concat from "concat-files";

export const eject = function (){
    concat([
        'refsList/ruItem.txt',
        'refsList/foreignItem.txt',
    ],
    'refsList/final.txt',
    function (err) {
        if (err) throw err
        console.log('done');
    });


}