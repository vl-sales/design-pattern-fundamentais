import { CarProtocol } from "../protocols/CarProtocol"
import { Engine } from "../protocols/engine"

export class Car implements CarProtocol{
  private seats: number
  private engine: Engine
  
  setSeats(seats: number): void {
    this.seats = seats
  }

  setEngine(engine: Engine): void {
    this.engine = engine
  }

  getSeats(): number {
    return this.seats
  }

  installGps(): void {
    console.log('Installing GPS')
  }

  installTripComputer(): void {
    console.log('installing trip computer')
  }

  calculatePrice(): number {
    console.log(`Calculating price with ${this.engine.power} and ${this.seats}`)
    return 0
  }
}