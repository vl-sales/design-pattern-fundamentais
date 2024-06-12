import { NumberHandler } from "./handlers/concrete-handlers.ts/number-handler"
import { StringHandler } from "./handlers/concrete-handlers.ts/string-handler"

const numberHandler = new NumberHandler()
const stringHandler = new StringHandler()

numberHandler.setNext(stringHandler)

console.log(numberHandler.handle("123"))
console.log(numberHandler.handle("abc"))
console.log(numberHandler.handle("456def"))
console.log(numberHandler.handle("789"))
console.log(numberHandler.handle("xyz"))