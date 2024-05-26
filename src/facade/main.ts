import { DisableClientFacade } from "./facade";
import { Client } from "./sub-services/client";

const client = new Client('Vinicius', 'vl-sales', 'vlande.sales1@gmail.com')
const disableClientFacade = new DisableClientFacade(client)

disableClientFacade.disableClient()