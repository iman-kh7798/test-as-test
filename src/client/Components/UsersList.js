import React,{useEffect} from 'react';
import {thunker} from "../../actions/actions";
import {useSelector,useDispatch} from 'react-redux'
import {Helmet} from "react-helmet";

function UsersList() {
    const states=useSelector(state => state.users)
    const dispatcher=useDispatch()
    useEffect(() => {
        dispatcher(thunker())
    },[])
        return (
            <div>
                <Helmet>
                    <title>iman</title>
                </Helmet>
                <ul>{states.map((res)=>{return <li key={res.id}>{res.name}</li>})}</ul>
            </div>
        );
}
export function LoadData(store)
{
    return store.dispatch(thunker())
}
export default {
    component:UsersList,
    LoadData: LoadData
};