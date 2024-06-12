# Facade
<b style="font-size: larger;">Tipo de Pattern: Comportamental</b>

## Problema
  Imagine um sistema de validação de formulários onde diferentes tipos de validações, como validação de email, validação de senha, validação de idade mínima, etc., precisam ser aplicadas a uma solicitação de registro de usuário. Essas validações podem variar dependendo do tipo de solicitação ou das configurações do sistema.

## Solução
  Você pode criar uma cadeia de validadores, onde cada validador é responsável por uma validação específica. Cada validador na cadeia implementa uma interface comum, permitindo que todos sejam tratados de forma uniforme e ao receber uma solicitação de registro de usuário, a cadeia de validadores é percorrida sequencialmente. Se a solicitação passar em todas as validações, ela é considerada válida e o processo continua. Caso contrário, a validação falha e o processo é interrompido, indicando ao usuário quais validações falharam.

## Utilizando o exemplo deste repositório
  Neste repositório criei uma cadeia de validação de strings que é passado sequencialmente, primeiro validando se a string contém apenas numeros, depois apenas letras. Caso contrário retorna null.

## Como executar
```bash
npx tsc -p .
```
Em seguida
```bash
node dist/chain-of-responsibility/main.js
```