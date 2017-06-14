import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './app';
import store from '../src/redux';

render(<AppContainer><Provider store={store}><App /></Provider></AppContainer>, document.querySelector('#app'));

if (module && module.hot) {
  module.hot.accept('./app.js', () => {
    const App = require('./app.js').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      document.querySelector('#app'),
    );
  });
}
