import {IUserController} from "./interfaces/IUserController";
import {UserModel} from "../models/User";

export class UserController implements IUserController{
  delete(uuid: string) {
    console.log("DELETADO")
  }

  findAll(): UserModel[] {
    const list: UserModel[] = [];
    const user = new UserModel();
    user.name = "Fred"
    list.push(user);
    list.push(user);
    list.push(user);
    list.push(user);
    return list;
  }

  findById(uuid: string): UserModel {
    const user = new UserModel();
    user.name = "Fred"
    return user;
  }

  save(user: UserModel): UserModel {
    return user;
  }

  update(uuid: string, user: UserModel) {
    user.uuid = uuid;
    return user
  }

}