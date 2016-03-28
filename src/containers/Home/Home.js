import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import { IndexLink } from 'react-router';

if(__SERVER__ == false) {
    
const feathers = require('feathers/client')
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');

const socket = io();
const app = feathers()
  .configure(hooks())
  .configure(socketio(socket));
  
  app.service('todos').get(2).then(todo => console.log(todo));
}

//


// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
/*const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks());*/

console.log("hello", __SERVER__);

export default class Home extends Component {
    render() {
        return (
          <div>
            <span>Home!!aa</span>
            
            <DocumentMeta title="home is where I belong" />
            
          </div>  
        );
    }
}
