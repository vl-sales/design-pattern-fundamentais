import { ShippingCalculator } from "./shipping-calculator";

export class SimpleShipping implements ShippingCalculator {
  calculate(cep: string): number {
    // Faz algum processamento para calcular o preço do frete simples
    return 10
  } 
}