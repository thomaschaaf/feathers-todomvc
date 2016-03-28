import React, { PropTypes, Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
            <IndexLink to="/">
                home
            </IndexLink>
            <Link to="/about">
                about
            </Link>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}