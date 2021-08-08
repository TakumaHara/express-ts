import Express from 'express'
import * as User from '../models/userModel'

export default{
    index:(req:Express.Request, res:Express.Response)=>{
        const users=User.find()
        res.render('users/index',{users})
    }
}