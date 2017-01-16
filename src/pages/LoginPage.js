import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';

export default class LoginPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
       
        <LoginForm>
            <p>
              <label htmlFor="username">Username or Email</label><br />
              <input id="username" type="text" name="username" />
            </p>
            <p>
              <label htmlFor="password">Password</label><br />
              <input id="password" type="password" name="password" />
            </p>
            <p data-spIf="form.error">
              <strong>Error:</strong><br />
              <span data-spBind="form.errorMessage" />
            </p>
            <p>
              <input type="submit" value="Login" />
            </p>
        </LoginForm>
        
      </DocumentTitle>
    );
  }
}