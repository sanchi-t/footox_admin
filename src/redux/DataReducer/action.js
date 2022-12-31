import * as types from "./actionType";
import axios from "axios";

const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get("http://localhost:4000/admin1", params)
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
    (`http://localhost:4000/admin1/`, {id,payload},{
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
    .post(`http://localhost:4000/admin1`,{id},{
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
    (`http://localhost:4000/admin2/`, {details},{
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
    .get("http://localhost:4000/coupon", params)
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
    (`http://localhost:4000/coupon`, {id,payload},{
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
    (`http://localhost:4000/couponGetOne`, {id,mode},{
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
    .post(`http://localhost:4000/coupon`,{id},{
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


const addCoupon = (details) => (dispatch) => {

  dispatch({ type: types.Add_DATA_R });
  return axios.post
    (`http://localhost:4000/couponAdd/`, {details},{
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



export { getData, updateData, deleteData,addData,getCoupon,updateCoupon,deleteCoupon,addCoupon,getOneCoupon };

