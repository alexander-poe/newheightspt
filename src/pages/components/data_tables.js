import React from 'react';
import { connect } from 'react-redux';

class DataTables extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		if (this.props.status === 'employees') {
				const eachColumn = this.props.employees.map((data, index) => {
			      let id = data.id;
			      let pts = data.pts;
			      let hourstotal = data.hourstotal;
			      let clinichours = data.clinichours;
			      let target = data.target;
			      let target2 = data.target2;
			      let visitsperhour = data.visitsperhour;
			      return (
			        <tr key={index}>
			          <td>{id}</td>
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
				        <div className="scroll">
				        <table className="table">
				          <thead>
				            <tr>
				              <th> id </th>
				              <th> PT's </th>
				              <th> Hours Total </th>
				              <th> Clinic Hours </th>
				              <th> Target </th>
				              <th> Visits Per Hour </th>
				              <th> Target Results +/-</th>
				            </tr>
				          </thead>
				          <tbody>
				            {eachColumn}
				          </tbody>
				        </table>
				        </div>
				      </div>    
				    );    		
		}
		if (this.props.status === 'graph2') {
			return (
				const eachColumn = this.props.employees.map((data, index) => {
			      let id = data.id;
			      let pts = data.pts;
			      let hourstotal = data.hourstotal;
			      let clinichours = data.clinichours;
			      let target = data.target;
			      let target2 = data.target2;
			      let visitsperhour = data.visitsperhour;
			      return (
			        <tr key={index}>
			          <td>{id}</td>
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
				        <div className="scroll">
				        <table className="table">
				          <thead>
				            <tr>
				              <th> id </th>
				              <th> PT's </th>
				              <th> Hours Total </th>
				              <th> Clinic Hours </th>
				              <th> Target </th>
				              <th> Visits Per Hour </th>
				              <th> Target Results +/-</th>
				            </tr>
				          </thead>
				          <tbody>
				            {eachColumn}
				          </tbody>
				        </table>
				        </div>
				      </div>    
				    ); 
		}

		if (this.props.status === 'graph3') {
			return (
				const eachColumn = this.props.employees.map((data, index) => {
			      let id = data.id;
			      let pts = data.pts;
			      let hourstotal = data.hourstotal;
			      let clinichours = data.clinichours;
			      let target = data.target;
			      let target2 = data.target2;
			      let visitsperhour = data.visitsperhour;
			      return (
			        <tr key={index}>
			          <td>{id}</td>
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
				        <div className="scroll">
				        <table className="table">
				          <thead>
				            <tr>
				              <th> id </th>
				              <th> PT's </th>
				              <th> Hours Total </th>
				              <th> Clinic Hours </th>
				              <th> Target </th>
				              <th> Visits Per Hour </th>
				              <th> Target Results +/-</th>
				            </tr>
				          </thead>
				          <tbody>
				            {eachColumn}
				          </tbody>
				        </table>
				        </div>
				      </div>    
				    ); 
		}
		if (this.props.status === 'graph4') {
			return (
			return (
				const eachColumn = this.props.employees.map((data, index) => {
			      let id = data.id;
			      let pts = data.pts;
			      let hourstotal = data.hourstotal;
			      let clinichours = data.clinichours;
			      let target = data.target;
			      let target2 = data.target2;
			      let visitsperhour = data.visitsperhour;
			      return (
			        <tr key={index}>
			          <td>{id}</td>
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
				        <div className="scroll">
				        <table className="table">
				          <thead>
				            <tr>
				              <th> id </th>
				              <th> PT's </th>
				              <th> Hours Total </th>
				              <th> Clinic Hours </th>
				              <th> Target </th>
				              <th> Visits Per Hour </th>
				              <th> Target Results +/-</th>
				            </tr>
				          </thead>
				          <tbody>
				            {eachColumn}
				          </tbody>
				        </table>
				        </div>
				      </div>    
				    ); 
		}
	}
//graph status is used to determine which graph we should be one. 
//its value will be a 'string' or a number that this page will listen for to determine
//which graph we are on. 
const mapStateToProps = (state, props) => ({
  status: state.status,
  employees: state.employees,
  graph2: state.graph2,
  graph3: state.graph3,
  graph4: state.graph4
});

export default connect(mapStateToProps)(DataTables);