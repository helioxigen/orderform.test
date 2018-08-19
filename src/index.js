import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App';
import store from 'store';
import { injectGlobal } from 'styled-components';

injectGlobal`
    body{
        margin: 0;
    }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
