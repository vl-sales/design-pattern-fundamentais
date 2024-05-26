import { DeleteUserProtocol, DeleteUserResponse } from "../protocols/delete-user-protocol";

export class DeleteUser implements DeleteUserProtocol {
  delete(userId: string): DeleteUserResponse {
    return {
      deleteFail: true
    }
  }
}