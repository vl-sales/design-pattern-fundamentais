import { JwtGenerator } from "./jwt-generator";
import jwt from 'jsonwebtoken'

export class JwtAdapter implements JwtGenerator {
  encrypt(value: string): string {
    return jwt.sign(value, process.env.JWT_SECRET || 'FAKE_JWT_SECRET')
  }
}