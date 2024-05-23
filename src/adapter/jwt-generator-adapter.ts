import { JwtGenerator } from "./jwt-generator";
import jwt from 'jsonwebtoken'

class JwtGeneratorAdapter implements JwtGenerator {
  encrypt(value: string): string {
    return jwt.sign(value, process.env.JWT_SECRET || 'FAKE_JWT_SECRET')
  }
}

const JwtAdapter = new JwtGeneratorAdapter()
const jwtToken = JwtAdapter.encrypt(JSON.stringify({ nome: 'Vinicius' }))

console.log(jwtToken)