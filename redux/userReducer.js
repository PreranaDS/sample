export function userReducer(state, action) {
  switch(action.type) {
    case 'SET_USER':
      console.log("Setting user:", action);
      return action.payload;
    case 'REMOVE_USER':
      return '';
    default:
      return state;
    }
}