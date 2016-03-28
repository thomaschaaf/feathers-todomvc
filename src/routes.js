import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import About from './containers/About/About';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="about" component={About} />
      
    <Route path="*" component={About} status={404} />

    </Route>
  );
};
