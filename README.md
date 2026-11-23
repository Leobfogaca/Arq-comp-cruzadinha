# Boot de Emergência

## Parte 1 | Contexto e pistas

A inicialização de um computador simulado foi interrompida. Para recuperar o sistema, você precisa descobrir 12 termos de Arquitetura Computacional. Cada pista descreve a função de um componente ou mecanismo. Quando você confirma um acerto, a barra de inicialização avança.

O jogo revisa três temas da Sprint 3: o que acontece dentro do processador, o que cada memória guarda e como os componentes trocam informações. Por exemplo, no Arduino Uno, a contagem em RAM se perde ao desligar, enquanto o código gravado na Flash permanece.

### Gabarito e explicações

As respostas abaixo aparecem no tabuleiro em maiúsculas, sem acentos e sem espaços. A numeração indica a casa em que cada resposta começa.

| Nº | Direção | Resposta | Pista no jogo | O que significa |
|---|---|---|---|---|
| 1 | Vertical | `CPU` | Componente principal que busca, interpreta e executa as instruções dos programas. | É o processador. Busca, decodifica e executa as instruções de um programa. |
| 2 | Horizontal | `ADDRESSBUS` | Leva a indicação da posição de memória que será acessada. | É o barramento de endereço. Informa qual posição de memória ou dispositivo será acessado. |
| 3 | Vertical | `DATABUS` | Transporta o conteúdo transferido entre processador, memória e periféricos. | É o barramento de dados. Transporta o valor lido ou escrito. |
| 4 | Vertical | `ROM` | Memória tradicional de fábrica cujo conteúdo pode ser lido, mas não alterado em uso normal. | É uma memória não volátil, tradicionalmente gravada de fábrica para leitura. Hoje, muitas máquinas usam Flash para guardar firmware atualizável. |
| 5 | Vertical | `ULA` | Parte do processador que realiza somas, subtrações e operações lógicas. | É a parte do processador que faz operações aritméticas e lógicas. |
| 6 | Horizontal | `UC` | Interpreta cada comando e envia sinais que coordenam os demais blocos do processador. | Interpreta a instrução e coordena as ações dos outros blocos por sinais de controle. |
| 7 | Vertical | `CACHE` | Mantém cópias de valores recentemente acessados para acelerar novas consultas do processador. | É uma memória pequena e rápida que mantém cópias de dados e instruções acessados recentemente. |
| 8 | Vertical | `EEPROM` | No Arduino Uno, permite salvar pequenos ajustes separadamente do código, mesmo após desligar a placa. | É uma memória regravável e não volátil. No Arduino Uno, o próprio programa pode usá-la para salvar pequenas configurações. |
| 9 | Horizontal | `RAM` | Guarda dados de aplicativos abertos e perde seu conteúdo quando a energia acaba. | É a memória de trabalho dos programas em execução. Seus dados se perdem sem energia. |
| 10 | Vertical | `FLASH` | No Arduino Uno, guarda o código gravado e o mantém quando a placa desliga. | É uma memória não volátil e regravável. No Arduino Uno, é onde fica o programa gravado. |
| 11 | Vertical | `DMA` | Permite transferências entre memória e periféricos sem o processador copiar cada byte. | Permite que um controlador transfira dados entre um dispositivo e a RAM sem a CPU copiar cada byte. |
| 12 | Horizontal | `REGISTRADORES` | Pequenos espaços internos do processador que guardam operandos e resultados imediatos. | São pequenas memórias muito rápidas dentro da CPU. Cada registrador tem uma função, como guardar um valor para a ULA ou o resultado de uma operação. |

### Outros quatro termos do enunciado

| Termo | O que significa |
|---|---|
| Memória de massa | É o armazenamento de longo prazo. Um SSD ou HD mantém arquivos e programas mesmo com o computador desligado. |
| Microcontrolador | É um chip que reúne processador, memória e interfaces de entrada e saída. Um exemplo é o ATmega328P do Arduino Uno. |
| Dual core | É um processador com dois núcleos. Os núcleos podem executar tarefas em paralelo. |
| Quad core | É um processador com quatro núcleos. Os quatro podem executar tarefas em paralelo quando há trabalho que pode ser dividido. |

Material da disciplina usado neste jogo: *ARQCOMP Exercício 04 v3: Game cruzadinha* e *[SP3 MAT3] Tópicos de Arquitetura Computacional*.

## Parte 2 | Como jogar

1. Abra o arquivo `index.html` em um navegador.
2. Clique em uma pista para realçar a palavra e ir à primeira casa vazia. A pista escolhida fica visível acima do tabuleiro com o número de letras. Você também pode clicar direto nas casas.
3. Digite uma letra por casa. O cursor avança sozinho na direção selecionada. Em um cruzamento, clique na pista da outra direção ou use as setas do teclado para mudar de direção.
4. Se preferir, cole a resposta inteira na primeira casa. O jogo distribui as letras na direção da pista selecionada.
5. Clique em **Conferir** ou pressione **Enter** dentro do tabuleiro. Cada pista recebe o resultado **Certa**, **Errada** ou **Incompleta**. Edite as respostas e confira de novo.
6. Com 12 acertos, o terminal mostra **Sistema iniciado**. Para jogar de novo, clique em **Reiniciar**.

O `index.html` contém a estrutura da tela. O `style.css` define o visual. O `script.js` guarda as pistas e as posições de cada palavra, monta o tabuleiro e confere as respostas. O jogo roda localmente, sem bibliotecas ou conexão com a internet.

## Partes 3 e 4 | GitHub e entrega

**Link do jogo no GitHub Pages** · Aguardando publicação. Depois de publicar, substitua esta frase pelo endereço exibido em **Settings → Pages → Visit site**.

O arquivo `historico/arqcomp-cruzadinha.bundle` do ZIP leva os commits locais. Com o Git instalado, execute o comando abaixo dentro da pasta extraída para abrir uma cópia do projeto com o histórico.

```bash
git clone -b main historico/arqcomp-cruzadinha.bundle arqcomp-cruzadinha
cd arqcomp-cruzadinha
git log --format="%h %as %s"
```

1. Crie o repositório público `arqcomp-cruzadinha` vazio. Para apontar a cópia para o GitHub, rode `git remote set-url origin https://github.com/SEU-USUARIO/arqcomp-cruzadinha.git` com seu usuário e depois `git push -u origin main`.
2. No repositório, abra **Settings → Pages**. Em **Source**, selecione **Deploy from a branch**, depois **main** e **/ (root)**. Salve.
3. Abra o endereço publicado em uma janela anônima e teste a digitação, o botão **Conferir** e o botão **Reiniciar**.
4. Atualize a linha do link neste README e faça um commit `docs: adiciona link do GitHub Pages`. Antes de entregar, confira no histórico se há pelo menos **6 commits em 2 dias diferentes**.
5. Envie somente o link público do jogo no Moodle.
