import express from 'express';
import { Server } from 'typescript-rest';

const app = express()
Server.loadServices(app, "resources/*", __dirname)
Server.swagger(app, {filePath:'./dist/swagger.json'})
app.listen(3000, () => { 
  console.log("SERVIDOR OUVINDO NA PORTA 3000.")
})