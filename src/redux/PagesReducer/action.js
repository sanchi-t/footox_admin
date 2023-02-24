import * as types from "./actionType";
import axios from "axios";

const getMensData = (params) => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });

  return axios
    .get(
      `${process.env.REACT_APP_BACKEND_SERVER}men`,
      params
    )
    .then((res) => {
      dispatch({ type: types.GET_MENS_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};

const getWomensData = (params) => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });

  return axios
    .get(
      `${process.env.REACT_APP_BACKEND_SERVER}women`,
      params
    )
    .then((res) => {
      dispatch({ type: types.GET_WOMENS_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};
const getShoesData = (params) => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });
  return axios
    .get(`${process.env.REACT_APP_BACKEND_SERVER}shoes` params)
    .then((res) => {
      dispatch({ type: types.GET_SHOES_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};

const getHomeData = () => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });

  return axios
    .get("https://desktime-tanner-redux.herokuapp.com/Homepage")
    .then((res) => {
      dispatch({ type: types.GET_HOMEDATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};

export { getWomensData, getMensData, getShoesData, getHomeData };