import { Client } from "./client";

export class ClientData {
  constructor(private client: Client) {}
  
  delete(): boolean {
    console.log("Dados de " + this.client.name + " deletados com sucesso!");
    return true;
  }

}