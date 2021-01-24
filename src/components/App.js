import React from 'react';
import {renderRoutes} from "react-router-config";
import Header from "./Components/Header/Header";
import {fetchtUsers} from "../actions/actions";
import '../styles.css'
const App=({route})=> {
        return (
            <div>
                <Header/>
                {renderRoutes(route.routes)}
            </div>
        )
    }

export default {
    component:App,
    LoadData: ({dispatch})=>dispatch(fetchtUsers())
}
