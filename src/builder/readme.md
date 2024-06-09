# Builder
<b style="font-size: larger;">Tipo de Pattern: Criacional</b>

## Problema
  Uma aplicação de e-commerce precisa criar objetos de pedido complexos, que incluem informações detalhadas sobre itens, opções de entrega e pagamento, entre outros, de forma flexível e sem uma quantidade excessiva de construtores.

## Solução
  Utilizar o padrão Builder para construir objetos de pedido de maneira flexível e escalável. Cada etapa da construção do pedido (adicionar item, selecionar opção de entrega, escolher método de pagamento, etc.) é encapsulada em um construtor correspondente. Isso permite criar objetos de pedido com configurações variadas sem a complexidade de múltiplos construtores fixos.

## Utilizando o exemplo deste repositório
  Neste repositório criei um builder para a classe carro que usa outras classes para definir seu motor. Para construir usei uma classe diretor que tem os metodos para construir cada um dos tipos de carros.

## Como executar
```bash
npx tsc -p .
```
Em seguida
```bash
node dist/builder/main.js
```