import React, {Component} from "react";
import {adminFetch} from "../../actions/actions";
import {connect} from 'react-redux'
import requieAuth from "./hoc/requieAuth";
class Adminslist extends Component
{
    constructor(props) {
        super(props);
        this.renderAdmins=this.renderAdmins.bind(this)
    }
    componentDidMount() {
        this.props.adminFetch()
    }
    renderAdmins()
    {
       return (this.props.admins.map((res)=>{
            return <li key={res.id}>{res.name}</li>
        }))
    }
    render() {
        return(
            <div>
                <h1>List of admins </h1>
                <u>{this.renderAdmins()}</u>
            </div>
        )
    }
}
const mapStateToProps=({admins})=>
{
    return {admins}
}
export default {
    component:connect(mapStateToProps,{adminFetch})(requieAuth(Adminslist)),
    LoadData:({dispatch})=>dispatch(adminFetch())
}