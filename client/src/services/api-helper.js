const baseUrl =
// 'postgres://icszgphfgogafs:4bd11b621ac82804ca1112f657a28f6e321a0dcd44a36ed3225e82426cdf934d@ec2-54-235-208-103.compute-1.amazonaws.com:5432/dbbj52liqtubm5'
'http://localhost:3000'

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
}

export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/users/`, opts)
    .then(resp => resp.json())
}

const createPost = (data) => {  
  const opts = {
    method: 'POST',
    body: JSON.stringify({ post: data }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
  return fetch(`${baseUrl}/posts`, opts)
    .then(resp => resp.json())
}

const readAllPosts = () => {
  return fetch(`${baseUrl}/posts`)
    .then(resp => resp.json())
}

const updatePost = (id, data) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify({ post: data }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/posts/${id}`, opts)
    .then(resp => resp.json())
}

const destroyPost = (id) => {
  const opts = {
    method: 'DELETE'
  }
  return fetch(`${baseUrl}/posts/${id}`, opts)
}

export {
  createPost,
  readAllPosts,
  updatePost,
  destroyPost
}