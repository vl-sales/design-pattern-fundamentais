import { DeleteUserProtocol, DeleteUserResponse } from "../protocols/delete-user-protocol";

export class DeleteUserDecorator implements DeleteUserProtocol {
  constructor(
    private readonly deleteUserRepository: DeleteUserProtocol
  ) {}
  delete(userId: string): DeleteUserResponse {
    const result = this.deleteUserRepository.delete(userId)
    if (result.deleteFail) {
      console.log('Enviado para fila de retentativa')
    }
    return result
  }
}