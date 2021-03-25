import {ModelDefault} from "./model.default";

export class Usuario extends ModelDefault{
    id;
    nome;
    dataNascimento;
    foto

    constructor(
        id,
        nome,
        dataNascimento,
        foto
    ) {
        super();
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.foto = foto;
    }
}
