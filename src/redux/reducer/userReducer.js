import { SET_USER_INFO, SET_SCORE, CLEAR_PLAYER } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_INFO:
    return {
      ...state,
      gravatarEmail: action.userInfo.email,
      name: action.userInfo.name,
    };
  case SET_SCORE:
    return {
      ...state,
      score: state.score + action.score,
      assertions: state.assertions + 1,
    };
  case CLEAR_PLAYER:
    return {
      ...state,
      name: '',
      assertions: 0,
      score: 0,
      gravatarEmail: '',
    };
  default:
    return state;
  }
};

export default playerReducer;
