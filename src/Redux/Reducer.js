import { SET_USER, STORE_USER_DATA} from '../Action.Constant'

const initialState = {
    user: [],
    formData: {},

  };


  export default(state = initialState, action) => {
    switch (action.type) {
      case SET_USER:
        const { user } = action;
        return { ...state, user };

      case STORE_USER_DATA:
        return { ...state, formData: action.payload}

      default:
        return state;
    }
  };
  