import { JwtAdapter } from "./jwt-adapter"
import { JwtGenerator } from "./jwt-generator"

class Login {
  constructor(private readonly jwtGenerator: JwtGenerator) {}

  public login(credentials: any) {
    return this.jwtGenerator.encrypt(JSON.stringify(credentials))
  }
}

const jwtAdapter = new JwtAdapter()
const login = new Login(jwtAdapter)

console.log(login.login({username: 'Vinicius', password: 'ANY_PASSWORD'}))