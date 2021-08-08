import Express from 'express'
import path from 'path'
import router from './routes'
import layouts from 'express-ejs-layouts'

import { User } from './entities/User'
import { getConnectionOptions, createConnection, BaseEntity } from 'typeorm'

( async () => {
    // MySQLと接続
    const connection = await createConnection( 'default' );
  
    // データを挿入する
    await connection.manager.save( User, [
      {
        name: 'user1',
        email: 'email1@example.com',
        age: 20
      },
      {
        name: 'user2',
        email: 'email2@example.com',
        age:21
      }
    ] );
  
    await connection.close();
  } )().catch( e => console.log( e ) );

const app=Express()
const port=3000

app.set('view engine', 'ejs')
app.set('views',path.resolve(__dirname,'views'))
app.use(layouts)
app.use(Express.static(__dirname+'/public'))
app.use('/',router)

app.listen(port,()=>{
    console.log('server start')
})