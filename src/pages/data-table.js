import React from 'react';

var count = 1;

class DataTables extends React.component {
	constructor(props) {
		super(props);
	
	}
	render() {
	//highest up in render function determine what count or graph is being  requested
     

    // loop through index of save graphs, compare to count being sent by filter
    // then that variable will be save and be able to be rendered in the render function.


	for (var i = 0; i < charts.length; i++) {
		if (count = 1) {
			const table1 = this.props.allData.map((data, index => {
				let firstgraphvar = data.firstgraphvar
				return (
					 <tr key={index}>
				     	<td>{firstgraphvar}</td>
				     </tr>
					)
			}))
		}
		if (count = 2) {
			const table2 = this.props.allData.map((data, index => {
				let secondgraphvar = data.firstgraphvar
				return (
					 <tr key={index}>
				     	<td>{firstgraphvar}</td>
				     </tr>
					)
					return (
						<td> table names </td>
						<td> table titles </td>

						<di
						)
			}))
		}

	}



	const graph          = this.props.allData.map((data, index) => {
		let id1            = data.id;
		let pts1           = data.pts;
		let hourstotal1    = data.hourstotal;
		let clinichours1   = data.clinichours;
		let target1        = data.target;
		let target21       = data.target2;
		let visitsperhour1 = data.visitsperhour;
		let allofthedata1 = data.parametersheretobe;
		let selectedfrom1 = data.thenfilteredthroughifs;
        let graph2 = data.graph2;
        let graphintro = data.smokewee;




     
		if (this.props = 1) {
		    return (
		      <div className="container">          
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
	               	    <tr key={index}>
				          <td>{id}              </td>
				          <td>{pts}             </td>
				          <td>{hourstotal}      </td>
				          <td>{clinichours}     </td>
				          <td>{target}          </td>
				          <td>{visitsperhour}   </td>
				          <td>{target2}         </td>
				        </tr>
				)
		}



		}
	}
}