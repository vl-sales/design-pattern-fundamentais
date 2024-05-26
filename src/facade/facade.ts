import { Client } from "./sub-services/client";
import { ClientAccess } from "./sub-services/client-access";
import { ClientData } from "./sub-services/client-data";
import { ClientDocuments } from "./sub-services/client-documents";

export class DisableClientFacade {
  private readonly clientData: ClientData
  private readonly clientAccess: ClientAccess
  private readonly clientDocuments: ClientDocuments

  constructor(private readonly client: Client) {
    this.clientData = new ClientData(client)
    this.clientAccess = new ClientAccess(client)
    this.clientDocuments = new ClientDocuments(client)
  }

  disableClient(): void {
    this.clientData.delete()
    this.clientDocuments.delete()
    this.clientAccess.disable()
  }
}