import {UserModel} from "../../models/User";

export interface IUserController{
    findById(uuid:string):UserModel;
    findAll():UserModel[];
    save(user:UserModel):UserModel;
    update(uuid:string, user:UserModel);
    delete(uuid:string):void;
}