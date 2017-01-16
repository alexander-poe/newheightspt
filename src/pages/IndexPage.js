import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';
import LoginPage from './LoginPage'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <img src="./nhits.jpeg" height="500"/>
     

        <div>
          <LoginPage/>
        </div>
      </div>
    );
  }
}