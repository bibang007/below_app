import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';

import Login from './components/Login'
import Register from './components/Register'

import {
  loginUser,
  registerUser,
} from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postForm: {
      name: "",
      price: "",
      category: "",
      content:"",
      image: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password_digest: ""
      }
    };


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default withRouter(App);
