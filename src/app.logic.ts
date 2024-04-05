import { yarg } from "./config/plugins/args.plugin";
import { generateMultiplicationTable } from "./services/multiplication.service";
import { writeFileSync, mkdirSync, existsSync } from "fs";

const { l:limit, s:showTable, b:base} = yarg;

const outputMessage:string = generateMultiplicationTable( base, limit );
const outputPath:string = 'outputs';
const routeFile:string = `${ outputPath }/table-${base}.txt`;

// Generar carpeta output si no existe
if(!existsSync(outputPath)){
    mkdirSync(outputPath, { recursive: true });    
}

// El resultado esperado se debe guardar en un archivo llamado table5.txt
writeFileSync(routeFile, outputMessage, 'utf-8');

showTable && console.log(outputMessage);