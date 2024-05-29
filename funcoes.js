const funcoes = {
    taxaJuros: ({ value }) => {
        const mes = typeof value === "string" ? parseInt(value) : value;
        if (mes <= 6) {
            return 3;
        } else if (mes <= 12) {
            return 5 % ;
        } else if (mes <= 24) {
            return 7;
        }
    }
};
