import { ShippingCalculator } from "../strategies/shipping-calculator";

export interface ShippingFactoryProtocol {
  createShippingStrategy(type: string): ShippingCalculator
}