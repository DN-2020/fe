import { FETCH_ITEM_ALL } from './actions';
const initialState = {
  itemList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEM_ALL:
      return { ...state, itemList: payload };

    default:
      return state;
  }
};
