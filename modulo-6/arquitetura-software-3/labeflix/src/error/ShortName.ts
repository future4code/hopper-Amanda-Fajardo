import { CustomError } from "./CustomError";


export class ShortName extends CustomError {
    constructor(){
        super("Nome inválido. O nome precisa ter pelo menos 3 caracteres.", 406)
    }
}