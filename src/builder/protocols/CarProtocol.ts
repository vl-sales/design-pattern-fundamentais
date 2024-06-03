import { Engine } from "./engine"

export interface CarProtocol {
  setSeats(seat: number): void
  setEngine(engine: Engine): void
  getSeats(): number
  installGps(): void
  installTripComputer(): void
  calculatePrice(): number
}