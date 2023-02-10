import fs from "fs";

export   const appendItem = function (item,file){
  fs.appendFile(file, item, function (err){
    if(err) throw err;

})
}

