import React from 'react';

import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';

import App from '../../../app/app';
import reducers from "../../../app/reducers";

const Index = (props) => {
  const store = createStore(reducers, props);

  return (
    <html>
      <head>
        <title>Keystone With React And Redux</title>
        <link href="bundle.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div id="root">
          <Provider store={store}>
            <StaticRouter location={props.request.url}>
              <App />
            </StaticRouter>
          </Provider>
        </div>
        <script async={true} src="bundle.js" />
      </body>
    </html>
  );
};

Index.propTypes = {
  request: PropTypes.shape({
    url: PropTypes.string,
    query: PropTypes.object
  })
};

export default Index;
