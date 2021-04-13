import AsyncStorage from "@react-native-async-storage/async-storage";

export function login() {
  return {
    type: "LOGIN",
  };
}
export function logout() {
  return {
    type: "LOGOUT",
  };
}

export function setToken(token) {
  AsyncStorage.setItem("token", token);
  return {
    type: "SET_TOKEN",
    payload: token,
  };
}

export function setUsername(username) {
  return {
    type: "SETUSERNAME",
    payload: username,
  };
}
