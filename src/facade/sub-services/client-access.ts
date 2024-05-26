import { Client } from "./client";

export class ClientAccess {
  constructor(private readonly client: Client) {}

  disable(): boolean {
    console.log(`Aceesso à conta de ${this.client.name} desativado`);
    return true;
  }
}