export interface JwtGenerator{
  encrypt(value: string): string
}