import createReducer from 'utils/createReducer';

const defaultState = () => ({
  demoMessage: '',
});

const getDempMessageSuccess = (state, action) => ({
  ...state,
  demoMessage: action.payload.data,
});

export default createReducer(defaultState, {
  DEMO_GET_MESSAGE_SUCCESS: getDempMessageSuccess,
});
