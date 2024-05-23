import { ShippingCalculator } from "./shipping-calculator";

export class ExpressShipping implements ShippingCalculator {
  calculate(cep: string): number {
    //calcula o preço do frete expresso
    return 30
  }
}