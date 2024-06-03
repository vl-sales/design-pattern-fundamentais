import { CarProtocol } from "./CarProtocol"
import { Engine } from "./engine"

export interface Builder {
  reset(): this
  setSeats(seats: number): this
  setEngine(engine: Engine): this
  setGps(active: boolean): this
  setTripComputer(active: boolean): this
  getProduct(): CarProtocol
}