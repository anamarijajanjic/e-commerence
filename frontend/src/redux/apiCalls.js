import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/authentication/login", user);
    dispatch(loginSuccess(res.data));
    console.log("200 ok");
  } catch (err) {
    dispatch(loginFailure());
    console.log("401 fail");
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/authentication/register", user);
    dispatch(registerSuccess(res.data));
    console.log("200 ok");
  } catch (err) {
    dispatch(registerFailure());
    console.log("401 fail");
  }
};
