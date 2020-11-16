import {DELETE, GET, Path, PathParam, POST, PUT} from "typescript-rest";
import {Tags} from 'typescript-rest-swagger';
import {UserModel} from "../models/User";
import {UserController} from "../controllers/UserController";


@Tags('Client')
@Path('/v1/clients')
export class UsersResource {

  controller = new UserController();

  @GET
  @Path('')
  public getAll() { 
    return this.controller.findAll();
  }

  @GET
  @Path(':uuid')
  public getById(@PathParam('uuid')uuid: string) { 
    return this.controller.findById(uuid);
  }

  @POST
  @Path('')
  public save(data: UserModel) {
    return this.controller.save(data);
  }

  @PUT
  @Path(':uuid')
  public update(@PathParam("uuid")uuid:string, data: UserModel) {
    return this.controller.update(uuid, data);
  }

  @DELETE
  @Path(':uuid')
  public delete(@PathParam('uuid')uuid: string) {
    return this.controller.delete(uuid);
  }

}