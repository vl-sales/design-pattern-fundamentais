import { ShippingFactory } from "./factory/shipping-factory";

const factory = new ShippingFactory()
const simpleShippingCalculator = factory.createShippingStrategy('simple')
const expressShippingCalculator = factory.createShippingStrategy('express')

console.log(simpleShippingCalculator.calculate('fake_cep'))
console.log(expressShippingCalculator.calculate('fake_cep'))