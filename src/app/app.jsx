import React from 'react';
import { Route } from 'react-router-dom';

import Service from './containers/Service';
import Base from './containers/Base';

const App = () => {
  return (
    <Base>
      <Route exact strict path="/" component={Service} />
      <Route exact strict path="/second" render={() => <h1>hola</h1>} />
    </Base>
  );
};

export default App;
