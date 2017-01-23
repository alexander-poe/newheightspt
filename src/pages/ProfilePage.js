import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { UserProfileForm } from 'react-stormpath';
import * as actions from '../actions/actions';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    this.props.dispatch(actions.getPayStub());
  }
  render() {
    return (
      <DataTables/>
      )
  }
}   

const mapStateToProps = (state, props) => ({
  employees: state.employees
});

export default connect(mapStateToProps)(ProfilePage);