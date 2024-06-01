# Decorator
<b style="font-size: larger;">Tipo de Pattern: Estrutural</b>

## Problema
    Imagine que você está desenvolvendo um sistema de pedidos online para uma loja. Você precisa calcular o preço total de um pedido, levando em consideração diferentes tipos de itens e possíveis descontos aplicáveis a eles.

## Solução
    Você pode implementar o padrão Decorator para adicionar funcionalidades extras de desconto aos itens do pedido. Por exemplo, você pode ter um decorador DescontoPorQuantidade que aplica descontos com base na quantidade de um determinado item no pedido. Outro decorador poderia ser DescontoPorCategoria, que aplica descontos com base na categoria do item.

## Utilizando o exemplo deste repositório
    Neste exemplo usei um fluxo de deleção de usuários, este fluxo não pode deixar de deletar um usuário, então usei um decorator para adicionar o comportamento de enviar para um fila de retentativa de deleção em caso de erro.

## Como executar
```bash
npx tsc -p .
```
Em seguida
```bash
node dist/decorator/main.js
```