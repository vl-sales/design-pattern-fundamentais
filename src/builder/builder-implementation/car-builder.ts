import { Car } from "../car-implementation/car";
import { CarProtocol } from "../protocols/CarProtocol";
import { Builder } from "../protocols/builder";
import { Engine } from "../protocols/engine";

export class CarBuilder implements Builder {
  private car = new Car() 
  reset(): this {
    this.car = new Car()
    return this
  }

  setEngine(engine: Engine): this {
    this.car.setEngine(engine) 
    return this
  }

  setGps(active: boolean): this {
    if (active) {
      this.car.installGps()
    }
    return this
  }

  setSeats(seats: number): this {
    this.car.setSeats(seats)
    return this
  }

  setTripComputer(active: boolean): this {
    if (active) {
      this.car.installTripComputer()
    }
    return this
  }

  getProduct(): CarProtocol {
    const result = this.car
    this.reset()
    return result
  }
}