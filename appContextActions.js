export function login() {
  return {
    type: "LOGIN",
  };
}
export function logout() {
<<<<<<< HEAD
  return {
    type: "LOGOUT",
  };
}
=======
    return {
        type: 'LOGOUT'
    }
}

export function setToken(token) {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export function setUsername(username) {
    return {
        type: 'SETUSERNAME',
        payload: username
    }
}
>>>>>>> main
