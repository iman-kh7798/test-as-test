import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from "react-router-config";
import Routes from "../components/Routes";
import React from 'react';
import Renderer from "./Renderer";
import createServerStore from "./createStore";
import proxy from 'express-http-proxy';





const app=express();
app.use('/api',proxy('http://react-ssr-api.herokuapp.com/',{
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host']='localhost:3000';
        return opts;
    }
}))
app.use(express.static('public'));
app.get('*',(req,res)=>{
    const store=createServerStore(req)
    const promise=matchRoutes(Routes,req.path).map(({route})=>{
        return route.LoadData?route.LoadData(store) : null;
    }).map(promise=>{
        if(promise){
        return new Promise((resolve ,reject)=>{
            promise.then(resolve).catch(resolve)
        })
        }
    })



    Promise.all(promise).then(()=>{
        const context={}
        const content=Renderer(req,store,context)
        if(context.uri){
            return res.redirect(301,context.uri)
        }
        if(context.notFound){
            res.status(404);
        }
        res.send(content);
    });
});
app.listen(3000,()=>{
    console.log('listening to port 3000')
});