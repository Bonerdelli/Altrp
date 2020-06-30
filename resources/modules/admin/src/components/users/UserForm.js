import React, {Component} from "react";
import {Link} from "react-router-dom";
import Resource from "../../../../editor/src/js/classes/Resource";
import {Redirect, withRouter} from "react-router";
//import TableForm from "../../../../admin/src/components/tables/TableForm";
/**
 * @class
 * @property {Resource} resource
 */

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            user: {},
            usermeta: {},
            errors: [],
            redirectAfterSave: false,
            redirectAfterError: false,
            redirect_error_url: "/admin/users"
        };
        
        if(!this.state.id) {
            console.log(this.props.id)
        }
        
        this.resource = new Resource({route: '/admin/ajax/users'});
        
        
        this.saveUser = this.saveUser.bind(this);
    }
    
    async componentDidMount(){
        
        if(!this.state.id) {
            return;
        }
        
        if(this.state.id){
            
            let user_data = await this.resource.get(this.state.id);
            
            this.setState(state=>{
                return{...state, user:user_data}
            }, async () => {
               let usermeta_data = await this.resource.get(this.state.id+"/usermeta");
               
                this.setState(state=>{
                    return{...state, usermeta:usermeta_data}
                },() =>{console.log(this.state)});
               
            });
        }
    }
    
    async saveUser(e){
        e.preventDefault();
        let res, usermeta_resource,  usermeta_res;

        if(this.state.id){
            res = await this.resource.put(this.state.id, this.state.value);
        } else {
            res = await this.resource.post(this.state.user);
        }
        
        
        
        
        if(res){
            
            //Обновление меты
            
            usermeta_resource = new Resource({route: '/admin/ajax/users/' + res.id + "/usermeta"});
            
            usermeta_res = await usermeta_resource.post(this.state.usermeta);
            
            if(usermeta_res) {
                this.setState(state=>{
                    return {...state, redirectAfterSave: true}
                });
            }
            else {
                this.setState(state=>{
                    return {...state, redirectAfterError: true, redirect_error_url: this.state.redirect_error_url + "/user/" + res.id}
                });
            }
            
            
        } else {
            /*this.setState(state=>{
                return {...state, value: {}}
            });*/
        }
    }
    
    changeValue(e, source = "user"){
        let field = e.target.name;
        let value = e.target.value;
        this.setState(state=>{
            state = {...state};
            state[source][field] = value;
            return state
        })
    }
    
    render() {
        if(this.state.redirectAfterSave){
            return <Redirect to={this.props.redirect_url}/>
        }
        if(this.state.redirectAfterError){
            return <Redirect to={this.state.redirect_error_url}/>
        }
        return <form className="admin-form" onSubmit={this.saveUser}>
            <div className="form-group">
                <label htmlFor="page-name">Name</label>
                <input type="text" id="name" name="name" required={1}
                    value={this.state.user.name || ''}
                    onChange={(e) => {this.changeValue(e)}}
                    className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="page-title">Email</label>
                <input type="email" id="email" name="email" required={1}
                    value={this.state.user.email || ''}
                    onChange={(e) => {this.changeValue(e)}}
                    className="form-control"/>
            </div>
            
             {!this.state.id ? 
                <div className="form-group">
                    <label htmlFor="page-description">Password</label>
                    <input type="password" id="password" name="password" required={1}
                        value={this.state.user.password || ''}
                        onChange={(e) => {this.changeValue(e)}}
                        className="form-control"/>
                </div>: null}
              {!this.state.id ?   
                <div className="form-group">
                    <label htmlFor="page-description">Confirm Password</label>
                    <input type="password" id="password_confirmation" name="password_confirmation" required={1}
                        value={this.state.user.password_confirmation || ''}
                        onChange={(e) => {this.changeValue(e)}}
                        className="form-control"/>
                </div> : null}
                
            
            <div className="form-group">
                <label htmlFor="page-description">First Name</label>
                <input type="text" id="first_name" name="first_name" required={1}
                    value={this.state.usermeta.first_name || ''}
                    onChange={(e) => {this.changeValue(e, "usermeta")}}
                    className="form-control"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="page-description">Second Name</label>
                <input type="text" id="second_name" name="second_name" required={1}
                    value={this.state.usermeta.second_name || ''}
                    onChange={(e) => {this.changeValue(e, "usermeta")}}
                    className="form-control"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="page-description">Patronymic</label>
                <input type="text" id="patronymic" name="patronymic" required={1}
                    value={this.state.usermeta.patronymic || ''}
                    onChange={(e) => {this.changeValue(e, "usermeta")}}
                    className="form-control"/>
            </div>
            
            <button className="btn btn_success">{this.state.id ? 'Save' : 'Add'}</button>
        </form>;
    }
}

export default UserForm;