import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import axios from "axios";
import reducers from "../actions/actions";
function createServerStore(req){
    const insaxios=axios.create({
        baseURL:'http://react-ssr-api.herokuapp.com',
        headers:{cookie:req.get('cookie') || ''}
    })
    const store=createStore(reducers,{},applyMiddleware(thunk.withExtraArgument(insaxios)));
    return store;
}
export default createServerStore