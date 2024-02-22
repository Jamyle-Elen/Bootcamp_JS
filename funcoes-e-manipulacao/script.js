
function falarMeuNome() {
    console.log(`Meu nome é Jamyle`)
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Cardoso do Nascimento')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome) ()