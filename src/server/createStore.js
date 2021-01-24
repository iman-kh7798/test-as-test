import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../redux-funcs/reducers";
//import urls from "./api/urls";
//import {serverGetCookies} from "../cookies";
//import {AuthenticationTokenCookie, AuthenticationTokenPrefix} from "../constantValues";

export default (req) => {
    // let cookie_token = serverGetCookies(req, AuthenticationTokenCookie);
    // let token = cookie_token ? `${AuthenticationTokenPrefix} ${cookie_token}` : '';
    const axiosInstance = axios.create({
        //baseURL: urls.URL_Base,
        //headers: {Authorization: `${token}`}
    });
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    return store;
}