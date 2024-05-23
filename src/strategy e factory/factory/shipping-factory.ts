import { ExpressShipping } from "../strategies/ExpressShipping";
import { SimpleShipping } from "../strategies/SimpleShipping";
import { ShippingCalculator } from "../strategies/shipping-calculator";
import { ShippingFactoryProtocol } from "./shipping-factory-protocol";

export class ShippingFactory implements ShippingFactoryProtocol {
  createShippingStrategy(type: string): ShippingCalculator {
    switch (type) {
      case 'simple':
        return new SimpleShipping()
      case 'express':
        return new ExpressShipping()
      default:
        return new SimpleShipping()
    }
  }
}