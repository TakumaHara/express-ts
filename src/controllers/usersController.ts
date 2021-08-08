import Express from 'express'
// import * as User from '../models/userModel'
import { User } from '../entities/User'
import { getConnectionOptions, createConnection, BaseEntity } from 'typeorm'


export default{
    index:async(
        req:Express.Request, 
        res:Express.Response,
        next: Express.NextFunction
        )=>{
            try{
                // MySQLと接続
                const connection = await createConnection( 'default' );
                //MySQLからデータ取得
                const users= await connection.manager.find( User);
                res.locals.users=users
                next();
                await connection.close();
                
                }catch(err){
                    next(err);
                }
    },
    indexView:(req:Express.Request,res:Express.Response)=>{
        res.render('users/index')
    },
    new:(req:Express.Request,res:Express.Response)=>{
        res.render('users/new')
    },
    create:async(
        req:Express.Request,
        res:Express.Response,
        next:Express.NextFunction
    )=>{
        try{
            await User.create()
            res.locals.redirect='/users'
            next()
        }catch(err){
            next(err)
        }
    },
    redirectView:(
        req:Express.Request,
        res:Express.Response,
        next:Express.NextFunction
    )=>{
        const redirect=res.locals.redirect
        if(redirect){
            res.redirect(redirect)
        }else{
            next()
        }
    },

}