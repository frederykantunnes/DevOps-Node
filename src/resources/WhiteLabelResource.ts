import { GET, Path, PathParam } from "typescript-rest";
import {Tags} from 'typescript-rest-swagger';


@Tags('White Label')
@Path('/v1/white-label')
export class UsersResource { 

  @GET
  @Path('')
  public getAll() { 
    return { "opa": 1234 };
  }

  @GET
  @Path(':uuid')
  public getById(@PathParam('uuid')uuid: string) { 
    return uuid;
  }

}