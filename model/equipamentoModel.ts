export type Equipamento = {
    id: number;
    nome: string;
    tipo: {
        id: number;
        nome: string;
    };
}

export type Tipo = {
    id: number;
    nome: string;
}