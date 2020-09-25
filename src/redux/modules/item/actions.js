import { ItemAPI } from '../../../api';


export const FETCH_ITEM_ALL = 'item/FETCH_ITEM_ALL';

export const actionCreators = {
  fetchItemAll: () => async (dispatch) => {
    try {
      const response = await ItemAPI.findAll();
      const { result, msg, errorCode, errorMsg, data } = response;
      if (result) {
        dispatch({ type: FETCH_ITEM_ALL, payload: data });
        return true;
      }
      return false;
    } catch (error) { }
  },
};
