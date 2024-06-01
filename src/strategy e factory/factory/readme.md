# Factory
<b style="font-size: larger;">Tipo de Pattern: Criacional</b>

## Problema
    Suponha que você esteja desenvolvendo um sistema de gerenciamento de transporte para uma empresa de logística. O sistema precisa criar diferentes tipos de veículos, como caminhões, carros e bicicletas, com base nos requisitos específicos de cada entrega.

## Solução
    Você pode implementar um Factory Method para criar instâncias dos diferentes tipos de veículos necessários para as entregas. Primeiro, defina uma interface comum chamada Veiculo que contenha métodos como transportarCarga e calcularTempoEntrega.

    Em seguida, crie classes concretas que implementem a interface Veiculo, como Caminhão, Carro e Bicicleta. Cada uma dessas classes terá sua própria implementação dos métodos da interface, adequada ao tipo de veículo.

    Por fim, crie uma fábrica (VeiculoFactory) que contém um método para criar instâncias dos diferentes tipos de veículos com base nos requisitos de entrega. Por exemplo, você pode ter métodos na fábrica como criarCaminhao, criarCarro e criarBicicleta, que retornam instâncias dos respectivos tipos de veículos.

## Utilizando o exemplo deste repositório
    Neste repositório simulei o problema de diversos tipos de frete, em que cada um teria sua forma de calcular o valor total (strategies), cada tipo de frete implementa a mesma interface: ShippingCalculator, e utilizei uma factory para construir o objeto responsável por calcular o frete.

## Como executar
```bash
npx tsc -p .
```
Em seguida
```bash
node dist/factory/main.js
```