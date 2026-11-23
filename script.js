// Linha e coluna começam em zero. H avança na coluna e V avança na linha.
let palavras = [
    { termo: 'CPU', linha: 0, coluna: 0, direcao: 'V', pista: 'Componente principal que busca, interpreta e executa as instruções dos programas.' },
    { termo: 'ADDRESSBUS', linha: 0, coluna: 3, direcao: 'H', pista: 'Leva a indicação da posição de memória que será acessada.' },
    { termo: 'DATABUS', linha: 0, coluna: 4, direcao: 'V', pista: 'Transporta o conteúdo transferido entre processador, memória e periféricos.' },
    { termo: 'ROM', linha: 0, coluna: 6, direcao: 'V', pista: 'Memória tradicional de fábrica cujo conteúdo pode ser lido, mas não alterado em uso normal.' },
    { termo: 'ULA', linha: 0, coluna: 11, direcao: 'V', pista: 'Parte do processador que realiza somas, subtrações e operações lógicas.' },
    { termo: 'UC', linha: 2, coluna: 0, direcao: 'H', pista: 'Interpreta cada comando e envia sinais que coordenam os demais blocos do processador.' },
    { termo: 'CACHE', linha: 2, coluna: 1, direcao: 'V', pista: 'Mantém cópias de valores recentemente acessados para acelerar novas consultas do processador.' },
    { termo: 'EEPROM', linha: 2, coluna: 9, direcao: 'V', pista: 'No Arduino Uno, permite salvar pequenos ajustes separadamente do código, mesmo após desligar a placa.' },
    { termo: 'RAM', linha: 3, coluna: 3, direcao: 'H', pista: 'Guarda dados de aplicativos abertos e perde seu conteúdo quando a energia acaba.' },
    { termo: 'FLASH', linha: 3, coluna: 12, direcao: 'V', pista: 'No Arduino Uno, guarda o código gravado e o mantém quando a placa desliga.' },
    { termo: 'DMA', linha: 4, coluna: 7, direcao: 'V', pista: 'Permite transferências entre memória e periféricos sem o processador copiar cada byte.' },
    { termo: 'REGISTRADORES', linha: 6, coluna: 0, direcao: 'H', pista: 'Pequenos espaços internos do processador que guardam operandos e resultados imediatos.' }
]

let tabuleiro = document.getElementById('tabuleiro')
let horizontais = document.getElementById('horizontais')
let verticais = document.getElementById('verticais')
let barra = document.getElementById('barra-progresso')
let placar = document.getElementById('placar')
let estado = document.getElementById('estado')
let mensagem = document.getElementById('div_msg')
let instrucao = document.getElementById('instrucao')
let instrucaoInicial = instrucao.textContent

let casas = {}
let numeros = {}
let proximoNumero = 1
let totalColunas = 0
let palavraAtiva = null

for (let palavra of palavras) {
    let inicio = palavra.linha + ',' + palavra.coluna

    if (!numeros[inicio]) {
        numeros[inicio] = proximoNumero
        proximoNumero++
    }

    palavra.numero = numeros[inicio]
    palavra.casas = []
    palavra.resultado = ''

    for (let i = 0; i < palavra.termo.length; i++) {
        let linha = palavra.linha
        let coluna = palavra.coluna

        if (palavra.direcao === 'H') {
            coluna += i
        } else {
            linha += i
        }

        let chave = linha + ',' + coluna
        if (!casas[chave]) {
            casas[chave] = { linha, coluna, palavras: [] }
        }

        let casa = casas[chave]
        casa.palavras.push(palavra)
        palavra.casas.push(casa)
        totalColunas = Math.max(totalColunas, coluna + 1)
    }

    criarPista(palavra)
}

let casasEmOrdem = Object.values(casas).sort((a, b) => a.linha - b.linha || a.coluna - b.coluna)

tabuleiro.style.setProperty('--colunas', totalColunas)
for (let casa of casasEmOrdem) {
    criarCasa(casa)
}

barra.max = palavras.length
document.getElementById('conferir').addEventListener('click', conferir)
document.getElementById('reiniciar').addEventListener('click', reiniciar)
atualizarTela()

function criarPista(palavra) {
    let item = document.createElement('li')
    let botao = document.createElement('button')
    let numero = document.createElement('span')
    let pista = document.createElement('span')
    let resultado = document.createElement('span')

    item.value = palavra.numero
    botao.type = 'button'
    botao.className = 'pista'
    numero.className = 'numero'
    numero.textContent = palavra.numero
    pista.id = 'pista-' + palavra.numero + palavra.direcao
    pista.textContent = palavra.pista
    resultado.className = 'resultado'

    palavra.botao = botao
    palavra.rotulo = pista
    palavra.indicador = resultado

    botao.addEventListener('click', () => {
        selecionar(palavra)
        let destino = palavra.casas.find(casa => !casa.input.value) || palavra.casas[0]
        destino.input.focus()
    })

    botao.append(numero, pista, resultado)
    item.append(botao)

    let lista = palavra.direcao === 'H' ? horizontais : verticais
    lista.append(item)
}

function criarCasa(casa) {
    let celula = document.createElement('div')
    let input = document.createElement('input')
    let numero = numeros[casa.linha + ',' + casa.coluna]

    celula.className = 'casa'
    celula.style.setProperty('--linha-casa', casa.linha + 1)
    celula.style.setProperty('--coluna-casa', casa.coluna + 1)

    input.id = 'ipt_' + casa.linha + '_' + casa.coluna
    input.type = 'text'
    input.maxLength = 1
    input.autocomplete = 'off'
    input.autocapitalize = 'characters'
    input.spellcheck = false
    input.setAttribute('aria-label', 'Linha ' + (casa.linha + 1) + ', coluna ' + (casa.coluna + 1))
    celula.append(input)

    if (numero) {
        let etiqueta = document.createElement('span')
        etiqueta.setAttribute('aria-hidden', 'true')
        etiqueta.textContent = numero
        celula.append(etiqueta)
    }

    casa.celula = celula
    casa.input = input
    casa.letra = ''

    input.addEventListener('focus', () => {
        if (!casa.palavras.includes(palavraAtiva)) {
            selecionar(casa.palavras[0])
        }
        input.select()
    })

    input.addEventListener('input', () => {
        input.value = input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 1)

        if (input.value !== casa.letra) {
            casa.letra = input.value

            // Uma casa de cruzamento pode alterar duas respostas conferidas.
            for (let palavra of casa.palavras) {
                palavra.resultado = ''
            }

            mensagem.textContent = ''
            atualizarTela()
        }
        if (input.value) {
            moverNaPalavra(casa, 1)
        }
    })

    input.addEventListener('keydown', evento => navegar(evento, casa))
    tabuleiro.append(celula)
}

function selecionar(palavra) {
    palavraAtiva = palavra
    let direcao = palavra.direcao === 'H' ? 'Horizontal' : 'Vertical'
    instrucao.textContent = palavra.numero + ' · ' + direcao + ' · ' + palavra.pista
    atualizarTela()
}

function moverNaPalavra(casa, passo) {
    let indice = palavraAtiva.casas.indexOf(casa)
    let destino = palavraAtiva.casas[indice + passo]

    if (destino) {
        destino.input.focus()
    }
}

function navegar(evento, casa) {
    let setas = {
        ArrowLeft: [0, -1, 'H'],
        ArrowRight: [0, 1, 'H'],
        ArrowUp: [-1, 0, 'V'],
        ArrowDown: [1, 0, 'V']
    }

    if (evento.key in setas) {
        evento.preventDefault()
        let [linha, coluna, direcao] = setas[evento.key]
        let palavra = casa.palavras.find(item => item.direcao === direcao)

        if (palavra) {
            selecionar(palavra)
            let destino = casas[(casa.linha + linha) + ',' + (casa.coluna + coluna)]
            if (palavra.casas.includes(destino)) {
                destino.input.focus()
            }
        }
    }

    if (evento.key === 'Backspace' && !casa.input.value) {
        evento.preventDefault()
        moverNaPalavra(casa, -1)
    }
}

function conferir() {
    let incompletas = 0
    let erradas = 0

    for (let palavra of palavras) {
        let resposta = palavra.casas.map(casa => casa.input.value).join('')

        if (resposta === palavra.termo) {
            palavra.resultado = 'certa'
        } else if (resposta.length < palavra.termo.length) {
            palavra.resultado = 'incompleta'
            incompletas++
        } else {
            palavra.resultado = 'errada'
            erradas++
        }
    }

    atualizarTela()
    if (incompletas + erradas === 0) {
        mensagem.textContent = 'Sistema iniciado! Você acertou todas as palavras.'
    } else {
        mensagem.textContent = placar.textContent + ' certas. Erradas: ' + erradas + '. Incompletas: ' + incompletas + '.'
    }
}

function atualizarTela() {
    let certas = 0
    let rotulos = { certa: 'Certa', errada: 'Errada', incompleta: 'Incompleta' }

    for (let palavra of palavras) {
        palavra.botao.setAttribute('aria-pressed', palavra === palavraAtiva)
        palavra.indicador.textContent = rotulos[palavra.resultado] || ''
        palavra.indicador.className = 'resultado ' + palavra.resultado
        if (palavra.resultado === 'certa') {
            certas++
        }
    }

    for (let casa of casasEmOrdem) {
        let selecionada = casa.palavras.includes(palavraAtiva)
        let certa = casa.palavras.some(palavra => palavra.resultado === 'certa')
        let errada = casa.palavras.some(palavra => palavra.resultado === 'errada')
        casa.celula.classList.toggle('selecionada', selecionada)
        casa.celula.classList.toggle('certa', certa)
        casa.celula.classList.toggle('errada', errada && !certa)

        if (selecionada) {
            casa.input.setAttribute('aria-describedby', palavraAtiva.rotulo.id)
        } else {
            casa.input.removeAttribute('aria-describedby')
        }
    }

    placar.textContent = certas + ' de ' + palavras.length + ' palavras'
    barra.value = certas
    let concluido = certas === palavras.length
    if (concluido) {
        estado.textContent = 'Sistema iniciado'
    } else if (certas > 0) {
        estado.textContent = 'Recuperação em andamento'
    } else {
        estado.textContent = 'Inicialização interrompida'
    }
    estado.classList.toggle('concluido', concluido)
}

function reiniciar() {
    for (let casa of casasEmOrdem) {
        casa.input.value = ''
        casa.letra = ''
    }

    for (let palavra of palavras) {
        palavra.resultado = ''
    }

    palavraAtiva = null
    instrucao.textContent = instrucaoInicial
    mensagem.textContent = 'Tabuleiro limpo. Você pode iniciar outra partida.'
    atualizarTela()
}
