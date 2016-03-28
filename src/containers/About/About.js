import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default class About extends Component {
    render() {
        return (
          <div>
            <span>About us!</span>
            <DocumentMeta title="helloabout" />
          </div>  
        );
    }
}
