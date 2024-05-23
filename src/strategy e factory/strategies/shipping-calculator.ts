export interface ShippingCalculator {
  calculate(cep: string): number
}