import { CarDirector } from "./director/director";

const director = new CarDirector()

const normalCar = director.buildNormalCar()
const sportCar = director.buildSportCar()

console.log(normalCar.getSeats())
console.log(sportCar.getSeats())
normalCar.calculatePrice()
sportCar.calculatePrice()