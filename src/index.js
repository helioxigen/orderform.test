import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App';
import store from 'store';
import { injectGlobal } from 'styled-components';
import injectFonts from 'utils/injectFont';

injectFonts('Proxima Nova', {
  300: 'proxima_nova_light',
  normal: 'proxima_nova_regular',
  600: 'proxima_nova_semibold',
  bold: 'proxima_nova_bold',
  900: 'proxima_nova_extrabold',
});

injectGlobal`
    body{
        margin: 0;
        font-family: 'Proxima Nova', 'Trebuchet MS', Verdana, sans-serif;
    }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
