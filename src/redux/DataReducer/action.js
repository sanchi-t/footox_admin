import * as types from "./actionType";
import axios from "axios";

const BackendServer = process.env.REACT_APP_BACKEND_SERVER

const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get(`${BackendServer}admin1`, params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};


const updateData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios.post
    (`${BackendServer}admin1/`, {id,payload},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } )
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
    .post(`${process.env.REACT_APP_BACKEND_SERVER}admin1`,{id},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res) => {
      dispatch({ type: types.DELETE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_DATA_F });
    });
};

const addData = (details) => (dispatch) => {
  dispatch({ type: types.Add_DATA_R });
  return axios.post
    (`${process.env.REACT_APP_BACKEND_SERVER}admin2/`, {details},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } )
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
    .get(`${process.env.REACT_APP_BACKEND_SERVER}coupon`, params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};


const updateCoupon = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios.post
    (`${process.env.REACT_APP_BACKEND_SERVER}coupon`, {id,payload},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } )
    .then((res) => {
      dispatch({ type: types.UPDATE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};

const getOneCoupon = (id,mode) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios.post
    (`${process.env.REACT_APP_BACKEND_SERVER}couponOne`, {id,mode},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } )
    .then((res) => {
      return(res);
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};

const deleteCoupon = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_R });
  return axios
    .delete(`${process.env.REACT_APP_BACKEND_SERVER}coupon/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_DATA_F });
    });
};


const addCoupon = (details) => (dispatch) => {

  dispatch({ type: types.Add_DATA_R });
  return axios.post
    (`${process.env.REACT_APP_BACKEND_SERVER}coupon`, {details},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } )
    .then((res) => {
      
    
      dispatch({ type: types.Add_DATA_S });

    })
    .catch((err) => {
      dispatch({ type: types.Add_DATA_F });
    });
};

const getBannerData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get(`${process.env.REACT_APP_BACKEND_SERVER}banner`, params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};

const updateBannerData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios.post
    (`${process.env.REACT_APP_BACKEND_SERVER}banner`, {id,payload},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } )
    .then((res) => {
      dispatch({ type: types.UPDATE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};


export { getData, updateData, deleteData,addData,getCoupon,updateCoupon,deleteCoupon,addCoupon,getOneCoupon,getBannerData,updateBannerData };

