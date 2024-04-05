import { existsSync, mkdirSync, writeFileSync } from "fs";

export interface SaveFileUseCase{
    execute( options: Options ): boolean;
}

export interface Options{
    fileContent :   string;
    fileDestination?:   string;
    fileName?   :   string;
}

export class SaveFile implements SaveFileUseCase{
    constructor(
        /**
         *  DI - Dependency Injection
         */
    ){}

    execute({
        fileName = "table", 
        fileDestination = 'outputs', 
        fileContent
    }: Options): boolean{
        try{
            console.log({fileName, fileDestination})
            // Generar carpeta output si no existe
            if(!existsSync(fileDestination)){
                mkdirSync(fileDestination, { recursive: true });    
            }

            // El resultado esperado se debe guardar en un archivo llamado table5.txt
            writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent, 'utf-8');

            return true;
        }catch(e){
            console.error(e);
            return false;
        }
    }

}