import Express from 'express'
import path from 'path'
import router from './routes'
import layouts from 'express-ejs-layouts'
// ejsのformにinputに入力された値を受け取れるようにするもの
import bodyParser from 'body-parser'


const app=Express()
const port=3000

app.use(
  bodyParser.urlencoded({
    extended:true,
  })
)
app.set('view engine', 'ejs')
app.set('views',path.resolve(__dirname,'views'))
app.use(layouts)
app.use(Express.static(__dirname+'/public'))
app.use('/',router)

app.listen(port,()=>{
    console.log('server start')
})