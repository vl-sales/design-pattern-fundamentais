import { DeleteUserDecorator } from "./decorators/delete-user-decorator";
import { DeleteUser } from "./implementation/delete-user-implementation";

const deleteUser = new DeleteUser()
const deleteUserDecorator = new DeleteUserDecorator(deleteUser)

deleteUserDecorator.delete('any_id')