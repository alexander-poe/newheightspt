import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import Header from './Header';
import * as actions from '../actions/actions';
export class MasterPage extends React.Component {
  render() {
    return (
      <div className="main-container">
      <DocumentTitle title='My React App'>
        <div>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
      </div>
    );
  }
}
export default connect()(MasterPage)