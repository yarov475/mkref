#!/usr/bin/env node
// use node v installed on user machine
import {appendItem} from "./modules/appendItem.js";
import {eject} from "./modules/eject.js";
import {file, item} from "./modules/takeiInput.js";
// take  metadata of book

appendItem(item, file);

eject()





