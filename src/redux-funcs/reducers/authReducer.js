import React from "react";
import {FETCH_CURRENT_USER} from "../actions";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER :
            return  false;
        default :
            return state;
    }
};