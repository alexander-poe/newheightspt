import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { UserProfileForm } from 'react-stormpath';
import * as actions from '../actions/actions';
import Form from './Form.js';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount () {
    this.props.dispatch(actions.getPayStub());
    console.log('data', this.props);
  }

  submitData (e) {
    e.preventDefault();
    alert('hey');
  }


  render() {
    const eachColumn      = this.props.employees.map((data, index) => {
      console.log(data.employee)
      const pts           = data.pts;
      const hourstotal    = data.hourstotal;
      const clinichours   = data.clinichours;
      const target        = data.target;
      const target2       = data.target2;
      const visitsperhour = data.visitsperhour;
      
      return (
        <tr key={index}>
          <td>{pts}</td>
          <td>{hourstotal}</td>
          <td>{clinichours}</td>
          <td>{target}</td>
          <td>{visitsperhour}</td>
          <td>{target2}</td>
        </tr>
        );
    });
    return (
      <div className="container">          
        <h1>Admin View</h1>
        <table className="table">
          <thead>
            <tr>
              <th>PT's</th>
              <th>Hours Total</th>
              <th>Clinic Hours</th>
              <th>Target</th>
              <th>Visits Per Hour</th>
              <th>Target Results +/-</th>
            </tr>
          </thead>
          <tbody>
            {eachColumn}
          </tbody>
        </table>
        <form>
          PT:<br/>
          <select name="pts">
            <option value="Long">Long</option>
            <option value="Gromont">Gromont</option>
            <option value="Tina">Tina</option>
            <option value="Liz">Liz</option>
          </select>
          <br/>
          Hours Total:<br/>
          <input type="text" name="hours_total"/>
           <br/>
          Clinic Hours:<br/>
          <input type="text" name="clinc_hours"/>
           <br/>
          Target:<br/>
          <input type="text" name="target"/>
           <br/>
          Actual Patients per Clinic Hour:<br/>
          <input type="text" name="actual"/>
           <br/>
          Target Results +/- :<br/>
          <input type="text" name="target2"/>
          <input type="submit" name="submit" onClick={this.submitData}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  employees: state.employees
});

export default connect(mapStateToProps)(ProfilePage);