import fs from "node:fs";
import { yarg } from "./config/plugins/args.plugin";

const { b:base, l:limit, s:showTable} = yarg;
// console.log({b, l, s});
const directory = "outputs/";

const headerMessage = `
============================
        Tabla del ${base}
============================
`;
let content = '';

for (let i = 1; i <= limit; i++) {
    content += `${base} x ${i} = ${base * i}\n`;
}
content = headerMessage + content;
if(showTable) console.log(content);


fs.mkdirSync(directory, { recursive: true });
fs.writeFileSync(`${directory}/tabla-${base}.txt`, content);
