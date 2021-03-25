export class Usuario{
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
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.foto = foto;
    }
}
