function parOuImpar(numero) {
    if (numero % 2 ===  0) {
        return 'Par';
    }else {
        return "ímpar";
    }
}

module.exports = parOuImpar;