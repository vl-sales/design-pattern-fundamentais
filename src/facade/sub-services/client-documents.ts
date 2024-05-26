import { Client } from "./client";

export class ClientDocuments {
  constructor(private client: Client) {}

  delete(): boolean {
    console.log("Documentos de " + this.client.name + " deletados com sucesso!");
    return true;
  }
}