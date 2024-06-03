export abstract class Engine {
  constructor(public power: number) {}

  getEnginePrice(): number {
    return 30 * this.power
  }
}