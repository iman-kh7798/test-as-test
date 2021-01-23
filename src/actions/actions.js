import {combineReducers} from "redux";

const FETCH='fetch'
const FETCH_CURRENT_USER ='fetch-current-users'
const FETCH_ADMINS='fetch_admin'
export const reducer = (state = [],action)=>
{
    switch (action.type) {
        case FETCH:
            return action.payload.data
        default:
            return state
    }
}
const reducer2=(state=null,action)=>
{
    switch (action.type){
        case FETCH_CURRENT_USER:
            return action.payload.data || false
        default:
            return state
    }
}
const reducer3=(state =[],action)=>
{
    switch (action.type){
        case FETCH_ADMINS:
            return action.payload.data
        default:
            return state
    }
}
export const thunker=()=>async (dispatch,getState,api)=>
{
    const  res=await api.get('/users');
    dispatch({
        type:FETCH,
        payload:res
    })
}

export const fetchtUsers=()=>async (dispatch,getState,api)=>
{
    const  res=await api.get('/current_user');
    dispatch({
        type:FETCH_CURRENT_USER,
        payload:res
    })
}
export const adminFetch=()=>async (dispatch,getState,api)=>
{
    const res= await api.get('/admins')
    dispatch({
        type:FETCH_ADMINS,
        payload:res
    })
}
export default combineReducers({
    users:reducer,
    auth: reducer2,
    admins:reducer3
})