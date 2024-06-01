# Facade
<b style="font-size: larger;">Tipo de Pattern: Estrutural</b>

## Problema
    Suponha que você esteja desenvolvendo um sistema para uma biblioteca, onde os usuários podem emprestar livros, CDs e DVDs. Cada tipo de item tem diferentes processos de empréstimo, devolução e verificação de disponibilidade.

## Solução
    Você pode criar uma classe BibliotecaFacade que serve como uma interface simplificada para interagir com os diferentes subsistemas da biblioteca, como GestorLivros, GestorCDs e GestorDVDs.

    A BibliotecaFacade oferece métodos simples para operações comuns, como emprestarLivro, devolverCD e verificarDisponibilidadeDVD. Internamente, a Facade se comunica com os subsistemas relevantes para executar as operações necessárias, abstraindo toda a complexidade do sistema de biblioteca.

## Utilizando o exemplo deste repositório
    Neste repositório fiz uma simulação de remoção de um cliente do sistema, tendo que usar várias sub-partes do sistema para realizar a remoção total do cliente. Então o facade facilita toda esta lógica encapsulando tudo que é necessário para remover o cliente.

## Como executar
```bash
npx tsc -p .
```
Em seguida
```bash
node dist/facade/main.js
```