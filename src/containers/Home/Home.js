import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import { IndexLink } from 'react-router';

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
