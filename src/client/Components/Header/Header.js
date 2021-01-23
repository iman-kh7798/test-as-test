import React  from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {fetchtUsers} from "../../../actions/actions";
function Header({auth}){
    const authButtom= auth ? (
         <a href='/api/logout'>logout</a>
    ):(
         <a href='/api/auth/google'>login</a>
        )
        return (
            <div>
                <div>
                    <Link to="/users">Users</Link>
                    <Link to="/admins">Admins</Link>
                    {authButtom}
                </div>
            </div>
        )
}
function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps,{fetchtUsers})(Header)