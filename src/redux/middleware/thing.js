export default function thingMiddleware(a, req) {
  let app = undefined;
  if(__SERVER__) {
    app = req.app;
  } else {
    console.log("client");
    const feathers = require('feathers/client')
    const socketio = require('feathers-socketio/client');
    const hooks = require('feathers-hooks');
    const io = require('socket.io-client');

    const socket = io();
    app = feathers()
      .configure(hooks())
      .configure(socketio(socket));
  }
  
  const todos = app.service('todos');  
  todos.get(1).then((todo) => {
    console.log(todo);
  });
  
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
      
    return next(action);
  };
}
