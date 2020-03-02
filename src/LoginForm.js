import React, { Component } from 'react';
import $ from "jquery";
class LoginForm extends Component {
  handleClick(event){
    if (this.refs.userId !== null && this.refs.password !== null) {
      var userId = this.refs.userId.value;
      var password = this.refs.password.value;
      if(userId === "admin" && password === "password"){
        $('#LoginForm, #errorLogin').addClass("d-none");
        $('#root').removeClass("d-none");
      }
      else{
        $('#LoginForm, #errorLogin').removeClass("d-none");
        $('root').addClass("d-none");
      }
    }
  }
  render() {    
    return (
      <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-3 col-10 rounded border shadow p-3 mb-5 mt-5 bg-white " id="col-Login">
            <p className="text-center"><strong>Login Admin</strong></p>
              <div className="form-group">
                <label>Username</label>
                <input type="text" id="user" ref="userId" className="form-control" placeholder="admin" />    
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" ref="password"  placeholder="password" />
              </div>
              <div className="form-group text-danger d-none font-12" id="errorLogin">UserId-><b>"admin"</b> and password->"<b>password</b>"</div>
              <div className="form-group">
                <button type="button" onClick={(event) => this.handleClick(event)} className="btn btn-primary float-right">Submit</button>
              </div>
            </div>
          </div>
      </section>
    );
  }
}
export default LoginForm;