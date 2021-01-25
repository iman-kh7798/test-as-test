import React from "react";
// import urls from "../../Helpers/api/urls";
// import AuthenticationTokenPrefix from "../../constantValues";

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () =>(dispatch, getState, api) => {
    // const res = await api.get(urls.URL_UserData);
    dispatch(
        {
            type: FETCH_CURRENT_USER,
        }
    );
}