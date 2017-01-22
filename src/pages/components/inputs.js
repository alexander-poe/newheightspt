import React from 'react';
import { connect } from 'react-redux';

class Inputs extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		if (this.props.status === 'employees') {
				return(	
					<form className="form-horizontal" id="form" onSubmit={this.submitData}>
			          <select name="pts" ref={input => this.pt = input}>
			            <option value="Long">Long      </option>
			            <option value="Gromont">Gromont</option>
			            <option value="Tina">Tina      </option>
			            <option value="Liz">Liz        </option>
			          </select>
			          <br/>
			            Hours Total:
			          <br/>
			          <input        
			          type="text" 
			          name="hours_total" 
			          ref={input => this.hoursTotal = input}
			          />
			          <br/>
			            Clinic Hours:
			          <br/>
			          <input 
			          type="text" 
			          name="clinc_hours" 
			          ref={input => this.clinicHours = input}
			          />
			          <br/>
			            Target:
			          <br/>
			          <input 
			          type="text" 
			          name="target" 
			          ref={input => this.target = input}
			          />
			          <br/>
			            Actual Patients per Clinic Hour:
			          <br/>
			          <input           
			          type="text" 
			          name="actual" 
			          ref={input => this.actual = input}
			          />
			          <br/>
			            Target Results +/- :
			          <br/>
			          <input 
			          type="text" 
			          name="target2" 
			          ref={input => this.target2 = input}
			          />
			          <input 
			          type="submit" 
			          name="submit"
			          />
			        </form>	
				);
		}
		if (this.props.status === 'graph2') {
				return(	
					<form className="form-horizontal" id="form" onSubmit={this.submitData}>
			          <select name="pts" ref={input => this.pt = input}>
			            <option value="Long">Long      </option>
			            <option value="Gromont">Gromont</option>
			            <option value="Tina">Tina      </option>
			            <option value="Liz">Liz        </option>
			          </select>
			          <br/>
			            Hours Total:
			          <br/>
			          <input        
			          type="text" 
			          name="hours_total" 
			          ref={input => this.hoursTotal = input}
			          />
			          <br/>
			            Clinic Hours:
			          <br/>
			          <input 
			          type="text" 
			          name="clinc_hours" 
			          ref={input => this.clinicHours = input}
			          />
			          <br/>
			            Target:
			          <br/>
			          <input 
			          type="text" 
			          name="target" 
			          ref={input => this.target = input}
			          />
			          <br/>
			            Actual Patients per Clinic Hour:
			          <br/>
			          <input           
			          type="text" 
			          name="actual" 
			          ref={input => this.actual = input}
			          />
			          <br/>
			            Target Results +/- :
			          <br/>
			          <input 
			          type="text" 
			          name="target2" 
			          ref={input => this.target2 = input}
			          />
			          <input 
			          type="submit" 
			          name="submit"
			          />
			        </form>	
				);
		}
		if (this.props.status === 'graph3') {
				return(	
					<form className="form-horizontal" id="form" onSubmit={this.submitData}>
			          <select name="pts" ref={input => this.pt = input}>
			            <option value="Long">Long      </option>
			            <option value="Gromont">Gromont</option>
			            <option value="Tina">Tina      </option>
			            <option value="Liz">Liz        </option>
			          </select>
			          <br/>
			            Hours Total:
			          <br/>
			          <input        
			          type="text" 
			          name="hours_total" 
			          ref={input => this.hoursTotal = input}
			          />
			          <br/>
			            Clinic Hours:
			          <br/>
			          <input 
			          type="text" 
			          name="clinc_hours" 
			          ref={input => this.clinicHours = input}
			          />
			          <br/>
			            Target:
			          <br/>
			          <input 
			          type="text" 
			          name="target" 
			          ref={input => this.target = input}
			          />
			          <br/>
			            Actual Patients per Clinic Hour:
			          <br/>
			          <input           
			          type="text" 
			          name="actual" 
			          ref={input => this.actual = input}
			          />
			          <br/>
			            Target Results +/- :
			          <br/>
			          <input 
			          type="text" 
			          name="target2" 
			          ref={input => this.target2 = input}
			          />
			          <input 
			          type="submit" 
			          name="submit"
			          />
			        </form>	
				);
		}
		if (this.props.status === 'graph4') {
			return(	
				<form className="form-horizontal" id="form" onSubmit={this.submitData}>
		          <select name="pts" ref={input => this.pt = input}>
		            <option value="Long">Long      </option>
		            <option value="Gromont">Gromont</option>
		            <option value="Tina">Tina      </option>
		            <option value="Liz">Liz        </option>
		          </select>
		          <br/>
		            Hours Total:
		          <br/>
		          <input        
		          type="text" 
		          name="hours_total" 
		          ref={input => this.hoursTotal = input}
		          />
		          <br/>
		            Clinic Hours:
		          <br/>
		          <input 
		          type="text" 
		          name="clinc_hours" 
		          ref={input => this.clinicHours = input}
		          />
		          <br/>
		            Target:
		          <br/>
		          <input 
		          type="text" 
		          name="target" 
		          ref={input => this.target = input}
		          />
		          <br/>
		            Actual Patients per Clinic Hour:
		          <br/>
		          <input           
		          type="text" 
		          name="actual" 
		          ref={input => this.actual = input}
		          />
		          <br/>
		            Target Results +/- :
		          <br/>
		          <input 
		          type="text" 
		          name="target2" 
		          ref={input => this.target2 = input}
		          />
		          <input 
		          type="submit" 
		          name="submit"
		          />
		        </form>	
			);
		}
	}
}
const mapStateToProps = (state, props) => ({
  status: state.graphstatus,
  employees: state.employees,
  graph2: state.graph2,
  graph3: state.graph3,
  graph4: state.graph4
});

export default connect(mapStateToProps)(Inputs);