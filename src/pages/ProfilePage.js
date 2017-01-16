import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { UserProfileForm } from 'react-stormpath';
import * as actions from '../actions/actions';
import { Sparklines, SparklinesLine } from 'react-sparklines';


 

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.editData   = this.editData.bind(this);
  }
  componentDidMount () {
    this.props.dispatch(actions.getPayStub());
  }
  submitData (e) {
    e.preventDefault();
    this.props.dispatch(actions.postPortlandHours(this.pt.value, this.hoursTotal.value, this.clinicHours.value, this.target.value, this.actual.value, this.target2.value));
    this.pt.value          = '';
    this.hoursTotal.value  = '';
    this.clinicHours.value = '';
    this.target.value      = '';
    this.actual.value      = '';
    this.target2.value     = '';

  }
  editData(e) {
    e.preventDefault();
    this.props.dispatch(actions.editPortlandHours(this.id.value, this.pt.value, this.hoursTotal.value, this.clinicHours.value, this.target.value, this.actual.value, this.target2.value));
    this.pt.value          = '';
    this.id.value          = '';
    this.hoursTotal.value  = '';
    this.clinicHours.value = '';
    this.target.value      = '';
    this.actual.value      = '';
    this.target2.value     = '';
  }
  //idea is that when you click on datatable id it returns the id so you can dispatch a delete request.
  //i know i can get value from input, can i get value from table?
  deleteData(e) {
    e.preventDefault();
    this.id.value          = '';
    this.props.dispatch(actions.deletePortlandHours(this.id.value));


  }
  render() {
    const eachColumn      = this.props.employees.map((data, index) => {
      let id            = data.id;
      let pts           = data.pts;
      let hourstotal    = data.hourstotal;
      let clinichours   = data.clinichours;
      let target        = data.target;
      let target2       = data.target2;
      let visitsperhour = data.visitsperhour;

      return (
        <tr key={index}>
          <td>{id}           </td>
          <td>{pts}          </td>
          <td>{hourstotal}   </td>
          <td>{clinichours}  </td>
          <td>{target}       </td>
          <td>{visitsperhour}</td>
          <td>{target2}      </td>
        </tr>
        );
    });
    return (
      <div className="container">          
        <h1>Admin View</h1>
        <div className="scroll">
        <table className="table">
          <thead>
            <tr>
              <th> id                </th>
              <th> PT's              </th>
              <th> Hours Total       </th>
              <th> Clinic Hours      </th>
              <th> Target            </th>
              <th> Visits Per Hour   </th>
              <th> Target Results +/-</th>
            </tr>
          </thead>
          <tbody>
            {eachColumn}
          </tbody>
        </table>
        </div>
     

      
          <Sparklines data={[5, 4, 5, 2, 10, 5, 20]}>
            <SparklinesLine color="blue" />
          </Sparklines>
    
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  employees: state.employees
});

export default connect(mapStateToProps)(ProfilePage);