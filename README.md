# Boot de Emergência | Cruzadinha de Arquitetura Computacional

A inicialização de um computador simulado foi interrompida. Para recuperar o sistema, descubra 12 termos de Arquitetura Computacional e preencha o tabuleiro. A cada palavra confirmada, a barra de inicialização avança.

Projeto da Sprint 3, feito com HTML, CSS e JavaScript puros.

## Sumário

1. [Visão geral](#1-visão-geral)
2. [Como executar](#2-como-executar)
3. [Como jogar](#3-como-jogar)
4. [Palavras e pistas](#4-palavras-e-pistas)
5. [Como o jogo funciona por dentro](#5-como-o-jogo-funciona-por-dentro)
6. [Como editar as palavras](#6-como-editar-as-palavras)
7. [Estrutura do projeto](#7-estrutura-do-projeto)

## 1. Visão geral

| Item | Descrição |
|---|---|
| Jogo | Boot de Emergência |
| Formato | Cruzadinha com visual de terminal |
| Público | Estudantes do primeiro semestre |
| Conteúdo | Processador, memórias e comunicação entre componentes |
| Tabuleiro | 8 linhas, 13 colunas e 52 casas preenchíveis |
| Objetivo | Acertar as 12 palavras e ver **Sistema iniciado** |

## 2. Como executar

**GitHub Pages** · Aguardando o endereço do jogo publicado.
<!-- Substitua a linha acima pelo link exibido em Settings → Pages → Visit site. -->

Para jogar no computador, mantenha `index.html`, `style.css` e `script.js` na mesma pasta e abra `index.html` no navegador. O jogo roda sem instalar dependências nem iniciar um servidor.

## 3. Como jogar

1. Leia as pistas em **Horizontais** e **Verticais**. O número da pista indica onde a palavra começa. O número entre parênteses indica quantas letras ela tem.
2. Clique em uma pista para destacar a palavra e selecionar a primeira casa vazia. Você também pode clicar direto no tabuleiro.
3. Digite uma letra por casa. O cursor avança sozinho. Escreva as respostas sem espaços ou acentos, como `ADDRESSBUS`.
4. Clique em **Conferir** ou pressione **Enter** dentro do tabuleiro para atualizar o contador de acertos.
5. Ao acertar as 12 palavras, o terminal mostra **Sistema iniciado**. Use **Reiniciar** para limpar o tabuleiro e começar outra partida.

| Resultado da pista | Significado |
|---|---|
| **Certa** | A palavra está completa e corresponde à resposta. |
| **Errada** | A palavra está completa, mas há pelo menos uma letra diferente da resposta. |
| **Incompleta** | Ainda há casas vazias nessa palavra. |

Nos cruzamentos, uma casa que pertence a uma palavra certa continua verde mesmo quando a outra palavra está errada. Se uma letra mudar depois da conferência, o jogo limpa o resultado das palavras que passam por aquela casa até você conferir de novo.

### Atalhos

| Ação | Como usar |
|---|---|
| Navegar | Use as setas. Em um cruzamento, as setas para os lados selecionam a horizontal, e as setas para cima ou para baixo selecionam a vertical. |
| Apagar | Use **Backspace**. Em uma casa vazia, o cursor volta uma casa na palavra ativa. |
| Colar | Selecione a pista e cole a resposta na primeira casa. As letras se distribuem na direção selecionada. |
| Conferir | Pressione **Enter** com uma casa selecionada. |

## 4. Palavras e pistas

O número de cada linha corresponde ao número que aparece no tabuleiro.

### Horizontais

| Nº | Resposta | Letras | Pista |
|---:|---|---:|---|
| 2 | `ADDRESSBUS` | 10 | Leva a indicação da posição de memória que será acessada. |
| 6 | `UC` | 2 | Interpreta cada comando e envia sinais que coordenam os demais blocos do processador. |
| 9 | `RAM` | 3 | Guarda dados de aplicativos abertos e perde seu conteúdo quando a energia acaba. |
| 12 | `REGISTRADORES` | 13 | Pequenos espaços internos do processador que guardam operandos e resultados imediatos. |

### Verticais

| Nº | Resposta | Letras | Pista |
|---:|---|---:|---|
| 1 | `CPU` | 3 | Componente principal que busca, interpreta e executa as instruções dos programas. |
| 3 | `DATABUS` | 7 | Transporta o conteúdo transferido entre processador, memória e periféricos. |
| 4 | `ROM` | 3 | Memória tradicional de fábrica cujo conteúdo pode ser lido, mas não alterado em uso normal. |
| 5 | `ULA` | 3 | Parte do processador que realiza somas, subtrações e operações lógicas. |
| 7 | `CACHE` | 5 | Mantém cópias de valores recentemente acessados para acelerar novas consultas do processador. |
| 8 | `EEPROM` | 6 | No Arduino Uno, permite salvar pequenos ajustes separadamente do código, mesmo após desligar a placa. |
| 10 | `FLASH` | 5 | No Arduino Uno, guarda o código gravado e o mantém quando a placa desliga. |
| 11 | `DMA` | 3 | Permite transferências entre memória e periféricos sem o processador copiar cada byte. |

### Glossário

| Termo | O que significa |
|---|---|
| `CPU` | É o processador. Busca, decodifica e executa as instruções de um programa. |
| `ADDRESSBUS` | É o barramento de endereço. Informa qual posição de memória ou dispositivo será acessado. |
| `DATABUS` | É o barramento de dados. Transporta o valor lido ou escrito. |
| `ROM` | É uma memória não volátil, tradicionalmente gravada de fábrica para leitura. Hoje, muitas máquinas usam Flash para guardar firmware atualizável. |
| `ULA` | É a parte do processador que faz operações aritméticas e lógicas. |
| `UC` | Interpreta a instrução e coordena as ações dos outros blocos por sinais de controle. |
| `CACHE` | É uma memória pequena e rápida que mantém cópias de dados e instruções acessados recentemente. |
| `EEPROM` | É uma memória regravável e não volátil. No Arduino Uno, o próprio programa pode usá-la para salvar pequenas configurações. |
| `RAM` | É a memória de trabalho dos programas em execução. Seus dados se perdem sem energia. |
| `FLASH` | É uma memória não volátil e regravável. No Arduino Uno, é onde fica o programa gravado. |
| `DMA` | Permite que um controlador transfira dados entre um dispositivo e a RAM sem a CPU copiar cada byte. |
| `REGISTRADORES` | São pequenas memórias muito rápidas dentro da CPU. Cada registrador tem uma função, como guardar um valor para a ULA ou o resultado de uma operação. |

**Outros termos do enunciado**

| Termo | O que significa |
|---|---|
| Memória de massa | É o armazenamento de longo prazo. Um SSD ou HD mantém arquivos e programas mesmo com o computador desligado. |
| Microcontrolador | É um chip que reúne processador, memória e interfaces de entrada e saída. Um exemplo é o ATmega328P do Arduino Uno. |
| Dual core | É um processador com dois núcleos. Os núcleos podem executar tarefas em paralelo. |
| Quad core | É um processador com quatro núcleos. Os quatro podem executar tarefas em paralelo quando há trabalho que pode ser dividido. |

## 5. Como o jogo funciona por dentro

1. O `script.js` percorre a lista `palavras` e calcula as casas de cada resposta usando linha, coluna e direção.
2. Quando duas respostas cruzam, elas compartilham o mesmo campo de texto. As casas iniciais recebem o número mostrado na lista de pistas.
3. A pista selecionada define a direção da digitação e da colagem. Quando você digita uma letra, o cursor avança para a próxima casa da palavra.
4. A função `conferir()` junta as letras de cada palavra, compara com a resposta e atualiza as marcas, o placar e a barra.
5. A função `reiniciar()` limpa as letras, as marcas e o progresso.

## 6. Como editar as palavras

A lista `palavras` fica no início de `script.js`. Este é um item do tabuleiro atual:

```js
{
    termo: 'RAM',
    linha: 3,
    coluna: 3,
    direcao: 'H',
    pista: 'Guarda dados de aplicativos abertos e perde seu conteúdo quando a energia acaba.'
}
```

| Campo | O que preencher |
|---|---|
| `termo` | Resposta em maiúsculas, sem espaços e sem acentos. |
| `linha` e `coluna` | Posição da primeira letra, contando a partir de zero. |
| `direcao` | `H` para horizontal ou `V` para vertical. |
| `pista` | Descrição com até 15 palavras, sem revelar a resposta. |

Ao alterar o tabuleiro, mantenha a lista em ordem de linha e coluna para que as pistas sejam numeradas na ordem de leitura. Confira se cada palavra cruza com outra na mesma letra e atualize as tabelas deste README.

## 7. Estrutura do projeto

| Arquivo na raiz | Função |
|---|---|
| `index.html` | Estrutura da página, do tabuleiro, das pistas e dos botões. |
| `style.css` | Visual do terminal, cores e layout para computador e celular. |
| `script.js` | Palavras, montagem do tabuleiro, interação e conferência. |
| `README.md` | Instruções, pistas, gabarito e documentação do projeto. |

Materiais da disciplina usados no projeto: *ARQCOMP Exercício 04 v3: Game cruzadinha* e *[SP3 MAT3] Tópicos de Arquitetura Computacional*.
