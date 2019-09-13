import { Library } from './library.model';

export class Questions{

    id_qst :number;
    qst : string;
    description : string;
    nbrReponse : number;
    nomUser : string;
    lib : Library;
}