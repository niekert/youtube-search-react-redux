export default function({ dispatch }) {
  return next => action => {
    //If the action does not have a payload or not a .then it's not a promise
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
      .then(response => dispatch({ ...action, payload:response }));
  };
}
