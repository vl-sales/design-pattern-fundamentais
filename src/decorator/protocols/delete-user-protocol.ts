export interface DeleteUserResponse {
  deleteFail: boolean
}
export interface DeleteUserProtocol {
  delete(userId: string): DeleteUserResponse
}