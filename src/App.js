import React, { Component } from 'react';
import $ from "jquery";
class App extends Component {
  handleChange = (event) => {
    this.componentDidMount();
  };  
  state = {data: []}
  componentDidMount() {
    var userIdNo = $('#selectUser').val() == null ? 1 : $('#selectUser').val()
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+userIdNo).then(res => res.json()).then((data) => {
      this.setState({ data: data })
      console.log(this.state.data)
    })
    .catch(console.log)
  }
  
  checkboxEventHandler(e) {
    if ($('input.checkbox_check').is(':checked')) {
      $(e.target).parent().parent('tr').parent().append('<tr>'+$(e.target).parent().parent('tr').html()+'</tr>')
      console.log("Class Click Event Handler")
    }else{
      
    }

}


  render() {    
    return (
        <div className="col-md-10 offset-md-1 col-12">
          <br/><br/>
          <h4>Select User</h4>
          <select name="" id="selectUser" className="form-control col-md-3 col-6 text-center" onChange={this.handleChange}>
          {this.state.data.map((item, i) => (
            <option value={i + 1} id={i + 1} key={i}>User Id -{i + 1}</option>
          ))}
          </select>
          <br/><br/><br/>
          <h5>Json Listing Data</h5>
          <table width="100%" className="table table-bordered">
            <thead>
              <tr>
                <th width="4%">No.</th>
                <th width="2%"><input type="checkbox" className="checkbox_check" /></th>
                <th width="30%">Name</th>
                <th width="66%">Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, i) => (
                <tr className="card-body" key={i}>
                  <td width="4%" className="card-src">{item.id}</td>
                  <td width="2%" className="card-select" onClick={this.checkboxEventHandler}> <input type="checkbox" className="checkbox_check" />    </td>
                  <td width="30%" className="card-title">{item.title}</td>
                  <td width="64%" className="card-subtitle mb-2 text-muted">{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>       
    );
  }
}
export default App;