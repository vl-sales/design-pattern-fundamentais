import { CarBuilder } from "../builder-implementation/car-builder";
import { Car } from "../car-implementation/car";
import { NormalEngine } from "../engines/normalEngine";
import { SportEngine } from "../engines/sportEngine";

export class CarDirector {
  buildNormalCar()  {
    return new CarBuilder()
      .setSeats(5)
      .setEngine(new NormalEngine())
      .setGps(false)
      .setTripComputer(false)
      .getProduct()
  }

  buildSportCar()  {
    return new CarBuilder()
      .setSeats(2)
      .setEngine(new SportEngine())
      .setGps(true)
      .setTripComputer(true)
      .getProduct()
  }
}
