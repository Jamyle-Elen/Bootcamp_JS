
function funcao1() {
    console.log(this);
}

const funcao2 = () => {
    console.log(this);
}

const jamyle = {
    nome: 'Jamyle',
    funcao1,
    funcao2
}

jamyle.funcao1();
jamyle.funcao2();