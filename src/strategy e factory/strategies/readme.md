# Strategy
<b style="font-size: larger;">Tipo de Pattern: Comportamental</b>

## Problema
    Imagine que você esteja desenvolvendo um sistema de processamento de pagamentos para um aplicativo de comércio eletrônico. O sistema precisa calcular o valor final do pagamento com base em diferentes métodos de pagamento, como cartão de crédito, PayPal e transferência bancária. Cada método de pagamento tem sua própria lógica de cálculo de taxas e descontos.

## Solução
    Você pode usar o padrão Strategy para implementar diferentes estratégias de cálculo de pagamento. Primeiro, defina uma interface comum. Em seguida, crie classes concretas que implementem essa interface para cada método de pagamento suportado, como PagamentoCartaoCredito, PagamentoPayPal e PagamentoTransferenciaBancaria. Cada uma dessas classes terá sua própria implementação refletindo a lógica específica de cálculo associada ao método de pagamento.

## Utilizando o exemplo deste repositório
    Neste repositório simulei o problema de termos diferente tipos de calculo de frete, então criei strategies para cada tipo que implementam a mesma interface ShippingCalculator, cada um poderia ter sua própria implementação tornando mais fácil de adicionar novos tipos de calcular frete.

## Como executar
```bash
npx tsc -p .
```
Em seguida
```bash
node dist/strategy\ e\ factory/main.js
```