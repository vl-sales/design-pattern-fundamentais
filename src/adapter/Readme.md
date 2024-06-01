# Adapter
<b style="font-size: larger;">Tipo de Pattern: Estrutural</b>

## Problema
    Digamos que seja necessário integrar sua aplicação com softwares terceiros. Sua aplicação trabalha apenas com JSON e o software terceiro utiliza XML, como adaptar sua aplicação para realizar esta integração?

## Solução
    Você pode usar um Adapter. Este pattern adapta interfaces externas para uma interface nova que o seu sistema conhece. Desta forma seu código não ficará acoplado ao software terceiro e caso haja mudanças você só vai precisar arrumar seu adapter

## Utilizando o exemplo deste repositório
    Neste exemplo temos a classe Login que precisa gerar um JWT, poderiamos importar a lib jsonwebtoken e usar ela diretamente mas e se por algum motivo esta lib não te atender ou existir mais? Você estaria acoplado a ela. Então neste caso utilizei um adapter para que a interface que a classe Login tem como dependência seja uma classe conhecida pelo sistema.

## Como executar
```bash
npx tsc -p .
```
Em seguida
```bash
node dist/adapter/main.js
```