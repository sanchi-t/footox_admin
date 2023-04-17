import * as types from "./actionType";
import axios from "axios";

const BackendServer = process.env.REACT_APP_API_BASE_URL;

const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get(`${BackendServer}getImage`, params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};

const updateData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios
    .post(
      `${BackendServer}admin1/`,
      { id, payload },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.UPDATE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};

const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_R });
  return axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}admin1`,
      { id },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.DELETE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_DATA_F });
    });
};

const addData = (details) => (dispatch) => {
  dispatch({ type: types.Add_DATA_R });
  return axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}admin2/`,
      { details },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.Add_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.Add_DATA_F });
    });
};

//https://desktime-tanner-redux.herokuapp.com/allproducts

const getCoupon = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}coupon`, params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};

const updateCoupon = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}coupon`,
      { id, payload },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.UPDATE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};

const getOneCoupon = (id, mode) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}couponOne`,
      { id, mode },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};

const deleteCoupon = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_R });
  return axios
    .delete(`${process.env.REACT_APP_API_BASE_URL}coupon/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_DATA_F });
    });
};

const addCoupon = (details) => (dispatch) => {
  dispatch({ type: types.Add_DATA_R });
  return axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}coupon`,
      { details },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.Add_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.Add_DATA_F });
    });
};

const getBannerData = (params) => (dispatch) => {
  console.log("aman");
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}banner`, params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_S, payload: res.data });
      console.log(res.data, "zxcvbn");
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};

const updateBannerData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}banner`,
      { id, payload },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.UPDATE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};

export {
  getData,
  updateData,
  deleteData,
  addData,
  getCoupon,
  updateCoupon,
  deleteCoupon,
  addCoupon,
  getOneCoupon,
  getBannerData,
  updateBannerData,
};
