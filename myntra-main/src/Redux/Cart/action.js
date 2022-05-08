import axios from "axios";
import {
  DECREASE_BAG_QTY,
  INCREASE_BAG_QTY,
  DELETE_BAG_FAILURE,
  DELETE_BAG_REQUEST,
  DELETE_BAG_SUCCESS,
  GET_BAG_FAILURE,
  GET_BAG_REQUEST,
  GET_BAG_SUCCESS,
  PATCH_BAG_FAILURE,
  PATCH_BAG_REQUEST,
  PATCH_BAG_SUCCESS,
  POST_BAG_FAILURE,
  POST_BAG_REQUEST,
  POST_BAG_SUCCESS,
} from "./actiontypes";

export const postBagRequest = () => {
  return {
    type: POST_BAG_REQUEST,
  };
};

export const postBagSuccess = () => {
  return {
    type: POST_BAG_SUCCESS,
  };
};

export const postBagFailure = (err) => {
  return {
    type: POST_BAG_FAILURE,
    payload: err,
  };
};

export const getBagRequest = () => {
  return {
    type: GET_BAG_REQUEST,
  };
};

export const getBagSuccess = (payload) => {
  return {
    type: "GET_BAG_SUCCESS",
    payload,
  };
};

export const getBagFailure = (err) => {
  return {
    type: GET_BAG_FAILURE,
    payload: err,
  };
};

export const deleteBagRequest = () => {
  return {
    type: DELETE_BAG_REQUEST,
  };
};

export const deleteBagSuccess = () => {
  return {
    type: DELETE_BAG_SUCCESS,
  };
};

export const deleteBagFailure = (err) => {
  return {
    type: "DELETE_BAG_FAILURE",
    payload: err,
  };
};

export const patchBagRequest = () => {
  return {
    type: "PATCH_BAG_REQUEST",
  };
};

export const patchBagSuccess = () => {
  return {
    type: PATCH_BAG_SUCCESS,
  };
};

export const patchBagFailure = (err) => {
  return {
    type: PATCH_BAG_FAILURE,
    payload: err,
  };
};
export const increaseQty = (idx) => {
  return {
    type: INCREASE_BAG_QTY,
    payload: idx,
  };
};
export const decreaseQty = (idx) => {
  return {
    type: DECREASE_BAG_QTY,
    payload: idx,
  };
};

export const postBagData = (payload) => async (dispatch) => {
  dispatch(postBagRequest());

  return axios
    .post("http://localhost:5000/cart", payload)
    .then((res) => {
      dispatch(postBagSuccess());
      dispatch(getBagData());
    })
    .catch((err) => {
      dispatch(postBagFailure());
    });
};

export const patchBagData = (clickedId, isQtySame) => async (dispatch) => {
  dispatch(patchBagRequest());

  return axios
    .patch(`http://localhost:5000/cart/${clickedId}`, {
      quantity: `${isQtySame}`,
    })
    .then((res) => {
      dispatch(patchBagSuccess());
      dispatch(getBagData());
    })
    .catch((err) => {
      dispatch(patchBagFailure());
    });
};

export const deleteBagData = (idx) => async (dispatch) => {
  // dispatch( deleteBagRequest() )

  return axios
    .delete(`http://localhost:5000/cart/${idx}`)
    .then((res) => {
      dispatch(deleteBagSuccess());
      dispatch(getBagData());
    })
    .catch((err) => {
      dispatch(deleteBagFailure());
    });
};

export const getBagData = (payload) => (dispatch) => {
  // dispatch( getBagRequest() )

  return axios
    .get("http://localhost:5000/cart", payload)
    .then((res) => {
      dispatch(getBagSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getBagFailure());
    });
};

export const increase = (idx) => async (dispatch) => {
  // dispatch( getBagRequest() )

  return axios
    .delete(`http://localhost:5000/cart/${idx}`)
    .then((res) => {
      dispatch(deleteBagSuccess());
      dispatch(getBagData());
    })
    .catch((err) => {
      dispatch(deleteBagFailure());
    });
};

export const decrease = (idx) => async (dispatch) => {
  // dispatch( getBagRequest() )

  return axios
    .delete(`http://localhost:5000/cart/${idx}`)
    .then((res) => {
      dispatch(deleteBagSuccess());
      dispatch(getBagData());
    })
    .catch((err) => {
      dispatch(deleteBagFailure());
    });
};
