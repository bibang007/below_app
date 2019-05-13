import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';

import PostView from './components/PostView';
import PostPage from './components/PostPage';
import CreatePost from './components/CreatePost'
import Login from './components/Login'
import Register from './components/Register'
import logo from '../src/images/belowbonbonlogo.png'


import {
  createPost,
  readAllPosts,
  updatePost,
  destroyPost,
  loginUser,
  registerUser
} from './services/api-helper'

import './App.css';

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


    this.handleFormChange = this.handleFormChange.bind(this)
    this.mountEditForm = this.mountEditForm.bind(this)
    this.editPost = this.editPost.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.newPost = this.newPost.bind(this)
    this.handleLoginButton = this.handleLoginButton.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.authHandleChange = this.authHandleChange.bind(this)
  }

  componentDidMount() {
    this.getPosts();
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  async getPosts() {
    const posts = await readAllPosts();
    this.setState({
      posts
    })
  }

  async newPost(e) {
    console.log('newPost running')
    e.preventDefault();
    console.log("Post Form: ",this.state.postForm)
    const post = await createPost(this.state.postForm);   
    this.setState(prevState => ({
      posts: [...prevState.posts, post],
      postForm: {
      name: "",
      price: "",
      category: "",
      content:"",
      image: ""
      }
    }))
    this.props.history.push('/posts')
  }

  async editPost() {
    const { postForm } = this.state
    await updatePost(postForm.id, postForm);
    this.setState(prevState => (
      {
        posts: prevState.posts.map(post => post.id === postForm.id ? postForm : post),
      }
    ))
  }

  async deletePost(id) {
    console.log('calling deletePost')
    console.log('deleting id: ', id)
    await destroyPost(id);
    console.log('getting posts')
    this.getPosts();
    console.log('done')
    // this.setState(prevState => ({
    //   posts: prevState.posts.filter(post => post.id !== id)
    // }))
  }

  handleFormChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      postForm: {
        ...prevState.postForm,
        [name]: value
      }
    }))
  }

  async mountEditForm(id) {
    const posts = await readAllPosts();
    const post = posts.find(el => el.id === parseInt(id));
    this.setState({
      postForm: post
    });
  }

  // -------------- AUTH ------------------

  handleLoginButton() {
    this.props.history.push("/login")
  }

  async handleLogin() {
    const token = await loginUser(this.state.authFormData);
    const userData = decode(token.token)
    this.setState({
      currentUser: userData
    })
    localStorage.setItem("jwt", token.token)
    this.props.history.push("/")
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
    this.props.history.push('/')
  }

  handleLogout() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <header>
        {/* <img className="logo" src={logo} /> */}
          <h1 className="logo-container"><Link to='/posts' onClick={() => {
          this.setState({
            postForm: {
              name: "",
              price: "",
              category: "",
              content:"",
              image: "",
              // contact: ""
              }
          })
          }}> <img className="logo" src={logo} /></Link></h1>
           <div
              className="post-card"
              onClick={() => {
                this.props.history.push('/new/post');
                window.scrollTo(0, 0);
              }}>
              <img
                alt="Create a post"
                src="https://image.flaticon.com/icons/png/512/14/14980.png"
                className="plus-sign" />
            </div>
          <div>
          {this.state.currentUser
            ?
            <>
              <p className='loggedUser'>{this.state.currentUser.username}</p>
              <div onClick={this.handleLogout}><img
                alt="Create a post"
                src="http://www.clker.com/cliparts/7/6/0/d/11949892261770556543led_circle_black.svg.med.png"
                className="logout-sign" /></div>
            </>
            :
            <button onClick={this.handleLoginButton}>Login/register</button>
          }
          </div>
        </header>
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route
          exact path="/posts"
          render={() => (
            <PostView
              posts={this.state.posts}
              currentUser={this.state.currentUser}
              postForm={this.state.PostForm}
              handleFormChange={this.handleFormChange}
              newPost={this.newPost} />
          )}
        />
        <Route
          path="/new/post"
          render={() => (
            <CreatePost
              handleFormChange={this.handleFormChange}
              postForm={this.state.postForm}
              newPost={this.newPost}
             
               />
          )} />
        <Route
          path="/posts/:id"
          render={(props) => {
            const { id } = props.match.params;
            const post = this.state.posts.find(el => el.id === parseInt(id));
            return <PostPage
              id={id}
              post={post}
              currentUser={this.state.currentUser}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editPost={this.editPost}
              postForm={this.state.postForm}
              deletePost={this.deletePost} />
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);